'use client'

/* eslint-disable react-hooks/set-state-in-effect */
import  { useState, useEffect } from 'react';
import { Mail, Lock, Eye, EyeOff, User, Phone, Building, ArrowRight, Shield, Zap, CheckCircle, AlertCircle, Chrome, Github, Linkedin, Check } from 'lucide-react';

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    password: '',
    confirmPassword: '',
    terms: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [passwordStrength, setPasswordStrength] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    // Calculate password strength
    if (formData.password) {
      let strength = 0;
      if (formData.password.length >= 8) strength += 25;
      if (formData.password.length >= 12) strength += 25;
      if (/[a-z]/.test(formData.password) && /[A-Z]/.test(formData.password)) strength += 25;
      if (/[0-9]/.test(formData.password)) strength += 15;
      if (/[^a-zA-Z0-9]/.test(formData.password)) strength += 10;
      setPasswordStrength(Math.min(strength, 100));
    } else {
      setPasswordStrength(0);
    }
  }, [formData.password]);

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
    const newErrors = {
      fullName: '',
      email: '',
      phone: '',
      company: '',
      password: '',
      confirmPassword: '',
      terms: ''
    };

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
      isValid = false;
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
      isValid = false;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
      isValid = false;
    }

    // Phone validation (optional but if provided should be valid)
    if (formData.phone && !/^[\d\s\-\+\(\)]+$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
      isValid = false;
    }

    // Confirm Password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
      isValid = false;
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    // Terms validation
    if (!agreeTerms) {
      newErrors.terms = 'You must agree to the terms and conditions';
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
        setRegisterSuccess(true);
        setTimeout(() => {
          setRegisterSuccess(false);
          // Reset form
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            company: '',
            password: '',
            confirmPassword: ''
          });
          setAgreeTerms(false);
        }, 2000);
      }, 1500);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Register with ${provider}`);
  };

  const getPasswordStrengthColor = () => {
    if (passwordStrength < 40) return 'bg-red-500';
    if (passwordStrength < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  const getPasswordStrengthText = () => {
    if (passwordStrength < 40) return 'Weak';
    if (passwordStrength < 70) return 'Medium';
    return 'Strong';
  };

  const benefits = [
    { icon: <Zap className="w-5 h-5" />, text: "Access to client dashboard" },
    { icon: <Shield className="w-5 h-5" />, text: "Secure project management" },
    { icon: <CheckCircle className="w-5 h-5" />, text: "24/7 priority support" }
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
                  Join Our <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Community</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Create your account and start your journey to digital excellence. Access exclusive features and priority support.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-lg">What you get:</h3>
                {benefits.map((benefit, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-3 text-gray-700"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg text-purple-600">
                      {benefit.icon}
                    </div>
                    <span className="font-medium">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Trust Badges */}
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-gray-900">500+</div>
                    <div className="text-sm text-gray-600">Active Users</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-gray-900">4.9★</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                  <div className="h-12 w-px bg-gray-300"></div>
                  <div className="text-center flex-1">
                    <div className="text-3xl font-bold text-gray-900">99%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Register Form */}
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
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                <p className="text-gray-600">Fill in your details to get started</p>
              </div>

              {/* Success Message */}
              {registerSuccess && (
                <div className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-xl flex items-center space-x-3 animate-slideDown">
                  <CheckCircle className="w-6 h-6 text-green-500" />
                  <span className="text-green-700 font-semibold">Account created successfully! Redirecting...</span>
                </div>
              )}

              {/* Social Login */}
              <div className="space-y-3 mb-6">
                <button
                  onClick={() => handleSocialLogin('Google')}
                  className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-gray-200 rounded-xl hover:border-purple-600 hover:bg-purple-50 transition-all group"
                >
                  <Chrome className="w-5 h-5 text-gray-600 group-hover:text-purple-600 transition-colors" />
                  <span className="font-semibold text-gray-700 group-hover:text-purple-600 transition-colors">Sign up with Google</span>
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
                  <span className="px-4 bg-white text-gray-500 font-medium">Or register with email</span>
                </div>
              </div>

              {/* Register Form */}
              <div className="space-y-5">
                {/* Full Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <User className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all ${
                        errors.fullName ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'
                      }`}
                    />
                  </div>
                  {errors.fullName && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.fullName}</span>
                    </div>
                  )}
                </div>

                {/* Email & Phone */}
                <div className="grid md:grid-cols-2 gap-5">
                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
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

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                        <Phone className="w-5 h-5 text-gray-400" />
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className={`w-full pl-12 pr-4 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all ${
                          errors.phone ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'
                        }`}
                      />
                    </div>
                    {errors.phone && (
                      <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Company */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Company Name (Optional)
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Building className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Company Inc."
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Password *
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
                      placeholder="Create a strong password"
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
                  {/* Password Strength Indicator */}
                  {formData.password && (
                    <div className="mt-2">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-gray-600">Password Strength:</span>
                        <span className={`text-xs font-semibold ${
                          passwordStrength < 40 ? 'text-red-600' : 
                          passwordStrength < 70 ? 'text-yellow-600' : 'text-green-600'
                        }`}>
                          {getPasswordStrengthText()}
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                        <div 
                          className={`h-full ${getPasswordStrengthColor()} transition-all duration-300`}
                          style={{ width: `${passwordStrength}%` }}
                        ></div>
                      </div>
                    </div>
                  )}
                  {errors.password && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.password}</span>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Confirm Password *
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                      <Lock className="w-5 h-5 text-gray-400" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter your password"
                      className={`w-full pl-12 pr-12 py-3 bg-gray-50 border-2 rounded-xl focus:outline-none focus:bg-white transition-all ${
                        errors.confirmPassword ? 'border-red-500' : 'border-gray-200 focus:border-purple-600'
                      }`}
                    />
                    <button
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600"
                      type="button"
                    >
                      {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                  {errors.confirmPassword && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.confirmPassword}</span>
                    </div>
                  )}
                </div>

                {/* Terms & Conditions */}
                <div>
                  <label className="flex items-start space-x-3 cursor-pointer group">
                    <div className="relative flex items-center justify-center">
                      <input
                        type="checkbox"
                        checked={agreeTerms}
                        onChange={(e) => {
                          setAgreeTerms(e.target.checked);
                          if (errors.terms) {
                            setErrors(prev => ({ ...prev, terms: '' }));
                          }
                        }}
                        className="w-5 h-5 text-purple-600 border-2 border-gray-300 rounded focus:ring-purple-500 cursor-pointer"
                      />
                      {agreeTerms && (
                        <Check className="w-3 h-3 text-white absolute pointer-events-none" />
                      )}
                    </div>
                    <span className="text-sm text-gray-700 group-hover:text-purple-600 transition-colors leading-relaxed">
                      I agree to the{' '}
                      <a href="#" className="font-semibold text-purple-600 hover:underline">Terms of Service</a>
                      {' '}and{' '}
                      <a href="#" className="font-semibold text-purple-600 hover:underline">Privacy Policy</a>
                    </span>
                  </label>
                  {errors.terms && (
                    <div className="mt-2 flex items-center space-x-2 text-red-600 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.terms}</span>
                    </div>
                  )}
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
                        Creating Account...
                      </>
                    ) : (
                      <>
                        Create Account
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
              </div>

              {/* Sign In Link */}
              <div className="mt-6 text-center">
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <a href="#" className="font-semibold text-purple-600 hover:text-purple-700 transition-colors">
                    Sign in here
                  </a>
                </p>
              </div>
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }

        .animate-fadeInLeft {
          animation: fadeInLeft 1s ease-out;
        }

        .animate-fadeInRight {
          animation: fadeInRight 1s ease-out 0.3s both;
        }

        @keyframes spin {
          to { transform: rotate(360deg); }
        }

        .animate-spin {
          animation: spin 1s linear infinite;
        }
      `}</style>
    </div>
  );
}