import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth'; // <-- Đảm bảo đường dẫn đúng với file useAuth

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();
    const { login, error } = useAuth(); // <-- lấy login từ context

    const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const validatePassword = (password) => password.length >= 8;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!validateEmail(email) || !validatePassword(password)) {
            alert("Please fill in all fields correctly.");
            return;
        }

        try {
            setLoading(true);
            await login({ email, password }); 
            navigate('/admin/dashboard');
        } catch (err) {
            alert("Login failed. Please try again.");
            console.error("Login error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-black">
            <div className="min-h-screen flex">
                <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
                    <div className="w-full max-w-md">
                        <div className="bg-gray-100 rounded-2xl shadow-2xl shadow-gray-500 p-8">
                            <div className="text-center mb-8">
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
                                    <img src="./logo.jpg" alt="Logo" className="rounded-full" />
                                </div>
                                <h2 className="text-2xl font-bold text-gray-800">Welcome Back!</h2>
                                <p className="text-gray-600 mt-2">Please sign in to continue</p>
                            </div>

                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                        placeholder="you@example.com"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                    />
                                    {email && !validateEmail(email) && (
                                        <p className="mt-2 text-sm text-red-600">Please enter a valid email address</p>
                                    )}
                                </div>

                                <div className="mb-6">
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                                    <div className="relative">
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                            placeholder="••••••••"
                                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-red-600 focus:border-transparent"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => setShowPassword(!showPassword)}
                                            className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                                        >
                                            <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'} w-6 h-6`} />
                                        </button>
                                    </div>
                                    {password && !validatePassword(password) && (
                                        <p className="mt-2 text-sm text-red-600">Password must be at least 8 characters</p>
                                    )}
                                </div>

                                {/* Show login error from context if exists */}
                                {error && (
                                    <p className="mb-4 text-sm text-red-600 text-center">{error}</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={loading || !validateEmail(email) || !validatePassword(password)}
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold 
                                    hover:bg-blue-700 focus:ring-4 focus:ring-blue-600 
                                    focus:ring-opacity-50 transition-colors disabled:opacity-50 
                                    disabled:cursor-not-allowed shadow-sm shadow-gray-400"
                                >
                                    {loading ? (
                                        <span className="inline-flex items-center">
                                            <svg
                                                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                            >
                                                <circle
                                                    className="opacity-25"
                                                    cx="12"
                                                    cy="12"
                                                    r="10"
                                                    stroke="currentColor"
                                                    strokeWidth="4"
                                                ></circle>
                                                <path
                                                    className="opacity-75"
                                                    fill="currentColor"
                                                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                ></path>
                                            </svg>
                                            Logging in...
                                        </span>
                                    ) : (
                                        <span>Sign In</span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Right Side */}
                <div className="hidden lg:block lg:w-1/2 bg-login">
                    <div className="h-full bg-black opacity-60 flex items-center justify-center">
                        <div className="text-center text-white px-12">
                            <h2 className="text-4xl font-bold mb-6">Your Title</h2>
                            <p className="text-xl">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, expedita.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
