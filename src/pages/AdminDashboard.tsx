import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

interface Inquiry {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    details: string;
    status: string;
    timestamp: string;
}

interface AnalyticsSummary {
    totalVisits: number;
    uniquePathsCount: number;
}

interface Visit {
    id: number;
    path: string;
    referrer: string;
    device: string;
    timestamp: string;
}

export const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState<'inquiries' | 'analytics'>('inquiries');
    const [inquiries, setInquiries] = useState<Inquiry[]>([]);
    const [analytics, setAnalytics] = useState<{ summary: AnalyticsSummary; recentVisits: Visit[] } | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchDashboardData = async () => {
            const token = localStorage.getItem('adminToken');
            if (!token) {
                navigate('/admin');
                return;
            }

            try {
                const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
                const [inqRes, anaRes] = await Promise.all([
                    fetch(`${apiUrl}/api/admin/inquiries`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    }),
                    fetch(`${apiUrl}/api/admin/analytics`, {
                        headers: { 'Authorization': `Bearer ${token}` }
                    })
                ]);

                if (inqRes.status === 401 || anaRes.status === 401) {
                    localStorage.removeItem('adminToken');
                    navigate('/admin');
                    return;
                }

                const inqData = await inqRes.json();
                const anaData = await anaRes.json();

                if (inqData.success) setInquiries(inqData.inquiries);
                if (anaData.success) setAnalytics({ summary: anaData.summary, recentVisits: anaData.recentVisits });
            } catch (err) {
                console.error('Failed to fetch dashboard data');
            } finally {
                setLoading(false);
            }
        };

        fetchDashboardData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('adminToken');
        navigate('/admin');
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-black flex items-center justify-center">
                <div className="text-white text-xl animate-pulse uppercase tracking-widest">Loading Dashboard...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-neutral-950 text-white font-switzer">
            {/* Sidebar / Topbar */}
            <nav className="border-b border-white/5 bg-black/50 backdrop-blur-xl sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <h1 className="text-xl font-bold tracking-tighter">CodeXSpace<span className="text-white">.</span></h1>
                        <div className="h-4 w-px bg-white/10 hidden md:block" />
                        <div className="flex gap-1">
                            {(['inquiries', 'analytics'] as const).map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab ? 'bg-white text-black' : 'text-neutral-400 hover:text-white hover:bg-white/5'}`}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                                </button>
                            ))}
                        </div>
                    </div>
                    <button
                        onClick={handleLogout}
                        className="text-xs uppercase tracking-widest font-bold text-red-500 hover:text-red-400 transition-colors"
                    >
                        Sign Out
                    </button>
                </div>
            </nav>

            <main className="max-w-7xl mx-auto p-6 md:p-12">
                <AnimatePresence mode="wait">
                    {activeTab === 'inquiries' ? (
                        <motion.div
                            key="inquiries"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-8"
                        >
                            <div className="flex justify-between items-end">
                                <div>
                                    <h2 className="text-3xl font-bold">Inquiries</h2>
                                    <p className="text-neutral-500 mt-1">Manage and respond to your latest leads.</p>
                                </div>
                                <div className="text-right">
                                    <span className="text-4xl font-black">{inquiries.length}</span>
                                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 font-bold">Total Requests</p>
                                </div>
                            </div>

                            <div className="grid gap-4">
                                {inquiries.length === 0 ? (
                                    <div className="p-20 text-center border border-dashed border-white/10 rounded-3xl">
                                        <p className="text-neutral-600">No inquiries found yet.</p>
                                    </div>
                                ) : (
                                    inquiries.map((inq) => (
                                        <div key={inq.id} className="bg-neutral-900/50 border border-white/5 p-6 rounded-2xl hover:border-white/10 transition-colors">
                                            <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
                                                <div>
                                                    <h3 className="text-lg font-bold">{inq.firstName} {inq.lastName}</h3>
                                                    <p className="text-neutral-400 text-sm">{inq.email} • {inq.phone || 'No phone'}</p>
                                                </div>
                                                <div className="text-right">
                                                    <span className="text-xs text-neutral-600 font-mono">{new Date(inq.timestamp).toLocaleString()}</span>
                                                </div>
                                            </div>
                                            <div className="bg-black/30 p-4 rounded-xl text-neutral-300 text-sm leading-relaxed italic">
                                                "{inq.details}"
                                            </div>
                                            <div className="mt-4 flex gap-2">
                                                <button className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold hover:bg-white/10 transition-all">Mark as read</button>
                                                <button className="px-4 py-2 bg-white/5 rounded-lg text-xs font-bold hover:bg-white/10 transition-all text-blue-400">Reply via email</button>
                                            </div>
                                        </div>
                                    ))
                                ).reverse()}
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="analytics"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="space-y-12"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5">
                                    <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-2">Total Page Views</p>
                                    <h4 className="text-6xl font-black">{analytics?.summary.totalVisits || 0}</h4>
                                </div>
                                <div className="bg-neutral-900/50 p-8 rounded-3xl border border-white/5">
                                    <p className="text-neutral-500 uppercase tracking-widest text-xs font-bold mb-2">Unique Paths Explored</p>
                                    <h4 className="text-6xl font-black">{analytics?.summary.uniquePathsCount || 0}</h4>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold mb-6">Recent Traffic</h3>
                                <div className="bg-neutral-900/50 rounded-3xl border border-white/5 overflow-hidden">
                                    <table className="w-full text-left">
                                        <thead>
                                            <tr className="border-b border-white/5 bg-white/5 text-neutral-400 text-xs uppercase tracking-widest">
                                                <th className="p-4 px-8 font-bold">Path</th>
                                                <th className="p-4 font-bold">Device</th>
                                                <th className="p-4 font-bold">Referrer</th>
                                                <th className="p-4 px-8 font-bold text-right">Time</th>
                                            </tr>
                                        </thead>
                                        <tbody className="text-sm">
                                            {analytics?.recentVisits.map((visit) => (
                                                <tr key={visit.id} className="border-b border-white/5 last:border-0 hover:bg-white/5 transition-colors">
                                                    <td className="p-4 px-8 font-mono text-emerald-400">{visit.path}</td>
                                                    <td className="p-4 uppercase text-[10px] font-bold tracking-widest">{visit.device}</td>
                                                    <td className="p-4 text-neutral-400">{visit.referrer}</td>
                                                    <td className="p-4 px-8 text-right text-neutral-500 font-mono text-xs">{new Date(visit.timestamp).toLocaleTimeString()}</td>
                                                </tr>
                                            )).reverse()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>
        </div>
    );
};
