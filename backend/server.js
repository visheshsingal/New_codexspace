const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');

dotenv.config({ override: true });

const app = express();
const PORT = process.env.PORT || 5000;

// CORS configuration
const corsOptions = {
    origin: [process.env.FRONTEND_URL, 'https://codexspace.vercel.app', 'http://localhost:5173'], // Add your Vercel URL here later
    credentials: true,
    optionsSuccessStatus: 200
};
app.use(cors(corsOptions));
app.use(express.json());

// MongoDB Connection
const connectDB = async () => {
    try {
        console.log('Attempting to connect to:', process.env.MONGODB_URI ? process.env.MONGODB_URI.split('@')[1] : 'UNDEFINED');
        await mongoose.connect(process.env.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000, // Timeout after 5 seconds
        });
        console.log('✅ Connected to MongoDB Successfully');
    } catch (err) {
        console.error('❌ MongoDB Connection Error!');
        console.error('-----------------------------------------');
        console.error('PROBABLE CAUSE: Your IP is not whitelisted in MongoDB Atlas.');
        console.error('FIX: Go to MongoDB Atlas -> Network Access -> Add IP -> "Allow Access From Anywhere"');
        console.error('-----------------------------------------');
        console.error(err.message);
        // Don't kill the server, allow it to run even if DB fails for now
    }
};
connectDB();

// --- Mongoose Schemas ---

const InquirySchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    phone: String,
    details: String,
    status: { type: String, default: 'new' },
    timestamp: { type: Date, default: Date.now }
});

const VisitSchema = new mongoose.Schema({
    path: String,
    referrer: String,
    device: String,
    timestamp: { type: Date, default: Date.now }
});

const Inquiry = mongoose.model('Inquiry', InquirySchema);
const Visit = mongoose.model('Visit', VisitSchema);

// --- Middleware ---

const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.sendStatus(401);

    jwt.verify(token, process.env.JWT_SECRET || 'secret_key', (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
};

// --- API Routes ---

app.get('/', (req, res) => {
    res.send('CodeXSpace Backend is running with MongoDB...');
});

// 1. Visit Tracking
app.post('/api/analytics/track', async (req, res) => {
    try {
        const { path, referrer, device } = req.body;
        const newVisit = new Visit({ path, referrer, device });
        await newVisit.save();
        res.status(201).json({ success: true });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

// 2. Contact Inquiry
app.post('/api/inquiries', async (req, res) => {
    try {
        const { firstName, lastName, email, phone, details } = req.body;
        if (!firstName || !email) {
            return res.status(400).json({ success: false, message: 'Missing required fields' });
        }
        const newInquiry = new Inquiry({ firstName, lastName, email, phone, details });
        await newInquiry.save();
        res.status(201).json({ success: true, message: 'Inquiry received' });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Server error' });
    }
});

// 3. Admin Login
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    if (username === process.env.ADMIN_USERNAME && password === process.env.ADMIN_PASSWORD) {
        const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET || 'secret_key', { expiresIn: '2h' });
        return res.json({ success: true, token });
    }
    res.status(401).json({ success: false, message: 'Invalid credentials' });
});

// --- Protected Admin Routes ---

app.get('/api/admin/inquiries', authenticateToken, async (req, res) => {
    try {
        const inquiries = await Inquiry.find().sort({ timestamp: -1 });
        res.json({ success: true, inquiries });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

app.get('/api/admin/analytics', authenticateToken, async (req, res) => {
    try {
        const totalVisits = await Visit.countDocuments();
        const uniquePaths = await Visit.distinct('path');
        const recentVisits = await Visit.find().sort({ timestamp: -1 }).limit(100);

        res.json({
            success: true,
            summary: { totalVisits, uniquePathsCount: uniquePaths.length },
            recentVisits
        });
    } catch (err) {
        res.status(500).json({ success: false });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
