'use client'
import  { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, Send, MessageSquare, Linkedin, Twitter, Facebook, Instagram, CheckCircle, ArrowRight, Zap, Users, Headphones } from 'lucide-react';
import Swal from 'sweetalert2';
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const emailSuccessMessage = "Thanks! I've got your email and I will contact you as soon as possible.";
  const form = useRef<HTMLFormElement>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
    country: ''
  });
  const [isVisible, setIsVisible] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validate required fields
    if (!formData.name.trim() || !formData.email.trim() || !formData.service || !formData.message.trim()) {
      Swal.fire("Please fill in all required fields (*).");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      Swal.fire("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
console.log(formData)
    emailjs
      .sendForm(
          process.env.EMAILJS_SERVICE || "",
        process.env.EMAILJS_TEMPLATE || "",
        form.current!,
        process.env.EMAILJS_USER || ""
      )
      .then(
        (result) => {
          console.log(result)
          if (result.text === "OK") {
            Swal.fire({ text: emailSuccessMessage, icon: "success" });
            // Reset form data after successful submission
            setFormData({
              name: '',
              email: '',
              phone: '',
              company: '',
              service: '',
              budget: '',
              message: '',
              country: ''
            });
          }
        },
        (error) => {
          console.log(error.text);
          Swal.fire("Error sending message.");
        }
      )
      .finally(() => {
        setIsLoading(false);
      });
  };


  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email Us",
      primary: "hello@joysoftsolutions.com",
      secondary: "support@joysoftsolutions.com",
      gradient: "from-blue-500 to-purple-600",
      delay: "0ms"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Call Us",
      primary: "+1 (555) 123-4567",
      secondary: "+44 (20) 7946-0958",
      gradient: "from-purple-500 to-pink-600",
      delay: "100ms"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Visit Us",
      primary: "123 Innovation Street, Tech District",
      secondary: "San Francisco, CA 94105, USA",
      gradient: "from-blue-500 to-cyan-500",
      delay: "200ms"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Working Hours",
      primary: "Monday - Friday: 9:00 AM - 6:00 PM",
      secondary: "24/7 Emergency Support Available",
      gradient: "from-purple-600 to-blue-600",
      delay: "300ms"
    }
  ];

  const services = [
    "Full Website Development",
    "E-commerce Solutions",
    "Mobile App Development",
    "Bug Fixing & Maintenance",
    "UI/UX Design",
    "Cloud Deployment",
    "API Integration",
    "Custom Software Development"
  ];

  const budgetRanges = [
    "< $5,000",
    "$5,000 - $10,000",
    "$10,000 - $25,000",
    "$25,000 - $50,000",
    "$50,000+",
    "Not Sure Yet"
  ];

  const quickLinks = [
    { icon: <Zap className="w-5 h-5" />, text: "Fast Response Time", subtext: "Within 2 hours" },
    { icon: <Users className="w-5 h-5" />, text: "Dedicated Team", subtext: "Expert developers" },
    { icon: <Headphones className="w-5 h-5" />, text: "24/7 Support", subtext: "Always available" }
  ];

  const offices = [
    { country: "United States", city: "San Francisco", flag: "🇺🇸" },
    { country: "United Kingdom", city: "London", flag: "🇬🇧" },
    { country: "Canada", city: "Toronto", flag: "🇨🇦" },
    { country: "Australia", city: "Sydney", flag: "🇦🇺" },
    { country: "Germany", city: "Berlin", flag: "🇩🇪" },
    { country: "Singapore", city: "Singapore", flag: "🇸🇬" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-linear-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            top: '10%',
            left: '10%'
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 bg-linear-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            bottom: '10%',
            right: '10%'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6 animate-pulse">
              <MessageSquare className="w-4 h-4" />
              <span>Let&apos;s Start a Conversation</span>
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Get in <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-linear">Touch</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond within 2 hours during business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="relative py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link, index) => (
              <div
                key={index}
                className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl text-white group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {link.text}
                    </h3>
                    <p className="text-sm text-gray-600">{link.subtext}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form - Takes 2 columns */}
            <div className="lg:col-span-2">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 transition-all duration-500 hover:shadow-3xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Send us a Message</h2>
                <p className="text-gray-600 mb-8">Fill out the form below and our team will get back to you shortly.</p>

                {submitted && (
                  <div className="mb-6 p-4 bg-linear-to-r from-green-50 to-green-100 border-2 border-green-500 rounded-xl flex items-center space-x-3 animate-slideDown">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                    <span className="text-green-700 font-semibold">Message sent successfully! We&apos;ll contact you soon.</span>
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                      />
                    </div>
                  </div>

                  {/* Phone & Company */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                      />
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your Company Inc."
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                      />
                    </div>
                  </div>

                  {/* Service & Budget */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Service Needed *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                      >
                        <option value="">Select a service</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div className="group">
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Budget
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                      >
                        <option value="">Select budget range</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Country */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      placeholder="United States"
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300"
                    />
                  </div>

                  {/* Message */}
                  <div className="group">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us about your project, timeline, and specific requirements..."
                      className="w-full px-4 py-3 bg-gray-50 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-600 focus:bg-white transition-all group-hover:border-purple-300 resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    onClick={handleSubmit}
                    className="group relative w-full px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl"
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      Send Message
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                    <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Contact Cards */}
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                  style={{ transitionDelay: info.delay }}
                >
                  <div className={`inline-flex p-3 bg-linear-to-br ${info.gradient} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {info.icon}
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{info.title}</h3>
                  <p className="text-gray-700 font-medium mb-1">{info.primary}</p>
                  <p className="text-sm text-gray-600">{info.secondary}</p>
                </div>
              ))}

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Follow Us</h3>
                <div className="flex space-x-3">
                  {[
                    { icon: <Linkedin className="w-5 h-5" />, color: "hover:bg-blue-600" },
                    { icon: <Twitter className="w-5 h-5" />, color: "hover:bg-sky-500" },
                    { icon: <Facebook className="w-5 h-5" />, color: "hover:bg-blue-700" },
                    { icon: <Instagram className="w-5 h-5" />, color: "hover:bg-pink-600" }
                  ].map((social, index) => (
                    <button
                      key={index}
                      className={`p-3 bg-gray-100 rounded-xl text-gray-700 ${social.color} hover:text-white transition-all hover:scale-110`}
                    >
                      {social.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Global Presence</span>
            </h2>
            <p className="text-xl text-gray-600">Serving clients worldwide from multiple locations</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-4xl">{office.flag}</span>
                  <div>
                    <h3 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {office.country}
                    </h3>
                    <p className="text-sm text-gray-600">{office.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-linear-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Prefer to Talk Directly?
              </h2>
              <p className="text-lg text-white/90 mb-6">
                Schedule a free 30-minute consultation call with our team
              </p>
              <button className="group px-8 py-3 bg-white text-purple-600 rounded-xl font-bold hover:scale-105 hover:shadow-2xl transition-all">
                Schedule a Call
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
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

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-slideDown {
          animation: slideDown 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}