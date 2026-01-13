"use client"

import  { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, ArrowRight, Shield, Zap, CheckCircle, AlertCircle, Chrome, Github, Linkedin } from 'lucide-react';

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = { email: '', password: '' };

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsLoading(true);
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
        setLoginSuccess(true);
        setTimeout(() => {
          setLoginSuccess(false);
          // Reset form
          setFormData({ email: '', password: '' });
        }, 2000);
      }, 1500);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Login with ${provider}`);
  };

  const features = [
    { icon: <Shield className="w-5 h-5" />, text: "Bank-level security" },
    { icon: <Zap className="w-5 h-5" />, text: "Lightning-fast access" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 support available" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        ></div>
      </div>

      <div className="relative max-w-6xl w-full">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Side - Branding & Info */}
          <div className="hidden lg:block animate-fadeInLeft">
            <div className="space-y-8">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">JW</span>
                </div>
                <span className="text-3xl font-bold text-gray-900">Joy Web Solutions</span>
              </div>

              <div>
                <h1 className="text-5xl font-bold text-gray-900 mb-4">
                  Welcome <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Back!</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Access your dashboard to manage projects, track progress, and collaborate with our team.
                </p>
              </div>

              {/* Features */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-purple-600">
                      {feature.icon}
                    </div>
                    <span className="font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">200+</div>
                  <div className="text-sm text-gray-600">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">99.9%</div>
                  <div className="text-sm text-gray-600">Uptime</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="animate-fadeInRight">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
              {/* Mobile Logo */}
              <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-lg">JW</span>
                </div>
                <span className="text-2xl font-bold text-gray-900">Joy Web Solutions</span>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign In</h2>
                <p className="text-gray-600">Enter your credentials to access your account</p>
              </div>

              {/* Success Message */}
              {loginSuccess && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-xl flex items-center space-x-3 animate-slideDown">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-700 font-semibold">Login successful! Redirecting...</span>
                </div>
              )}

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all group"
                >
                  <Chrome className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                  <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">Continue with Google</span>
                </button>
                
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => handleSocialLogin('GitHub')}
                    className="flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all group"
                  >
                    <Github className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                    <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">GitHub</span>
                  </button>
                  
                  <button
                    onClick={() => handleSocialLogin('LinkedIn')}
                    className="flex items-center justify-center space-x-2 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all group"
                  >
                    <Linkedin className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                    <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">LinkedIn</span>
                  </button>
                </div>
              </div>

              {/* Divider */}
              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white text-gray-500 font-medium">Or continue with email</span>
                </div>
              </div>

              {/* Login Form */}
              <div className="space-y-5">
                {/* Email Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Mail className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all ${
                        errors.email ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'
                      }`}
                    />
                  </div>
                  {errors.email && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className={`w-full pl-12 pr-12 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all ${
                        errors.password ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'
                      }`}
                    />
                    <button
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                      type="button"
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.password && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between">
                  <label className="flex items-center space-x-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                    />
                    <span className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors">Remember me</span>
                  </label>
                  <a href="#" className="text-sm font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                    Forgot password?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="group relative w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isLoading ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Signing In...
                      </>
                    ) : (
                      <>
                        Sign In
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>

              {/* Sign Up Link */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Don&apos;t have an account?{' '}
                  <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                    Sign up for free
                  </a>
                </p>
              </div>

              {/* Terms */}
              <p className="mt-6 text-xs text-center text-gray-500">
                By signing in, you agree to our{' '}
                <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
                {' '}and{' '}
                <a href="#" className="text-purple-600 hover:underline">Privacy Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out 0.3s both;
        }
      `}</style>
    </div>
  );
}