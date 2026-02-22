import { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const AdminLogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');

        try {
            const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';
            const response = await fetch(`${apiUrl}/api/admin/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            const data = await response.json();

            if (data.success) {
                localStorage.setItem('adminToken', data.token);
                navigate('/admin/dashboard');
            } else {
                setError(data.message || 'Invalid credentials');
            }
        } catch (err) {
            setError('Server is not responding. Please start the backend.');
        }
    };

    return (
        <div className="min-h-screen bg-black flex items-center justify-center p-6">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full max-w-md bg-neutral-900/50 backdrop-blur-xl p-10 rounded-3xl border border-white/10 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <h1 className="text-white text-3xl font-bold mb-2 tracking-tight">
                        CodeXSpace<span className="text-white">.</span>
                    </h1>
                    <p className="text-neutral-500 text-sm uppercase tracking-[0.2em]">Admin Portal</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-6">
                    <div>
                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full bg-black/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all"
                            placeholder="Enter username"
                            required
                        />
                    </div>

                    <div>
                        <label className="block text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full bg-black/50 border border-white/5 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-white/20 transition-all"
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-xs font-medium text-center">{error}</p>
                    )}

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full bg-white text-black font-bold py-4 rounded-xl hover:bg-neutral-200 transition-all"
                    >
                        Sign In
                    </motion.button>
                </form>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => navigate('/')}
                        className="text-neutral-500 text-xs hover:text-white transition-colors"
                    >
                        &larr; Back to Website
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
