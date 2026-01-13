'use client';

import  { useState, useEffect } from 'react';
import { Code, Wrench, Globe, Users, ChevronRight, CheckCircle, ArrowRight, Zap, Shield, Target, Sparkles, Rocket, TrendingUp, Menu, X } from 'lucide-react';

export default function HomePage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 0);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleResize = () => {
      if (window.innerWidth >= 768 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  const services = [
    {
      icon: <Code className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Full Stack Development",
      description: "Complete A-to-Z website development with cutting-edge technologies and modern frameworks.",
      color: "from-blue-500 to-purple-600",
      delay: "0ms"
    },
    {
      icon: <Wrench className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Bug Fixing & Optimization",
      description: "Expert debugging, performance optimization, and seamless maintenance for your applications.",
      color: "from-purple-500 to-pink-600",
      delay: "100ms"
    },
    {
      icon: <Globe className="w-8 h-8 md:w-12 md:h-12" />,
      title: "Global Solutions",
      description: "Worldwide service delivery with 24/7 support and multilingual project management.",
      color: "from-blue-500 to-cyan-500",
      delay: "200ms"
    }
  ];

  const stats = [
    { number: "19+", label: "Projects Delivered", icon: <Rocket className="w-6 h-6 md:w-8 md:h-8" /> },
    { number: "11+", label: "Happy Clients", icon: <Users className="w-6 h-6 md:w-8 md:h-8" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6 md:w-8 md:h-8" /> },
    { number: "24/7", label: "Support", icon: <Zap className="w-6 h-6 md:w-8 md:h-8" /> }
  ];

  const features = [
    { icon: <Target className="w-5 h-5 md:w-6 md:h-6" />, text: "Pixel-perfect Design Implementation" },
    { icon: <Zap className="w-5 h-5 md:w-6 md:h-6" />, text: "Lightning-fast Performance" },
    { icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />, text: "Enterprise-grade Security" },
    { icon: <TrendingUp className="w-5 h-5 md:w-6 md:h-6" />, text: "Scalable Architecture" }
  ];

  const team = [
    { 
      role: "Sales Manager", 
      description: "Strategic client relationship management",
      gradient: "from-blue-500 to-purple-600"
    },
    { 
      role: "Lead Generator", 
      description: "Growth-focused opportunity creation",
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      role: "Elite Programmers", 
      description: "Full-stack development experts",
      gradient: "from-blue-500 to-cyan-500"
    }
  ];

  const technologies = ['React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'PostgreSQL'];

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Mobile Navigation */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b">
        <div className="flex justify-between items-center p-4">
          <div className="text-xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Joy Web
          </div>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b shadow-lg">
            <div className="flex flex-col p-4 space-y-4">
              <a href="#services" className="py-2 px-4 hover:bg-gray-50 rounded-lg">Services</a>
              <a href="#team" className="py-2 px-4 hover:bg-gray-50 rounded-lg">Team</a>
              <a href="#contact" className="py-2 px-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-lg text-center">
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Animated Background Elements - Responsive */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-48 h-48 md:w-96 md:h-96 bg-linear-to-r from-blue-400 to-purple-600 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`,
            top: '5%',
            left: '5%'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 md:w-96 md:h-96 bg-linear-to-r from-purple-400 to-pink-600 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-2000"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`,
            top: '50%',
            right: '5%'
          }}
        ></div>
        <div 
          className="absolute w-48 h-48 md:w-96 md:h-96 bg-linear-to-r from-blue-400 to-cyan-500 rounded-full mix-blend-multiply filter blur-2xl md:blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.008}px, ${mousePosition.y * 0.008}px)`,
            bottom: '5%',
            left: '20%'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 md:pt-20 pb-20 md:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-6 md:space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>Transforming Ideas into Reality</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Joy Web
                </span>
                <br />
                <span className="text-gray-900 text-3xl md:text-6xl lg:text-7xl">Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 leading-relaxed">
                {"We craft exceptional digital experiences that drive business growth. From concept to deployment, we're your partner in success."}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group relative px-6 py-3 md:px-8 md:py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button className="px-6 py-3 md:px-8 md:py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-600 hover:text-purple-600 hover:shadow-lg transition-all">
                  View Portfolio
                </button>
              </div>

              {/* Quick Features */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="flex items-center space-x-2 text-gray-700 transition-all hover:text-purple-600"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="p-2 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg">
                      {feature.icon}
                    </div>
                    <span className="text-sm font-medium">{feature.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual - Hidden on small mobile, shown on tablet+ */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'} hidden md:block`}>
              <div className="relative">
                {/* Floating Cards Animation */}
                <div className="relative h-[400px] lg:h-[500px]">
                  {/* Main Card */}
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-64 md:w-80 h-80 md:h-96 bg-white rounded-3xl shadow-2xl p-6 md:p-8 transform hover:scale-105 transition-all duration-500"
                    style={{
                      transform: `translateX(-50%) translateY(${scrollY * 0.1}px) rotateY(${mousePosition.x * 0.01}deg) rotateX(${-mousePosition.y * 0.01}deg)`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <div className="w-12 h-12 md:w-16 md:h-16 bg-linear-to-br  from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-4 animate-pulse">
                          <Code className="w-6 h-6 md:w-8 md:h-8 text-white" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">Code Excellence</h3>
                        <p className="text-gray-600 text-sm md:text-base">Building scalable, maintainable solutions with modern technologies</p>
                      </div>
                      <div className="flex flex-wrap gap-2 ">
                        {technologies.slice(0, 4).map((tech, i) => (
                          <span key={i} className="px-2 py-1 md:px-3 md:py-1 bg-linear-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-xs font-semibold ">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Floating Element 1 */}
                  <div 
                    className="absolute -top-4 -left-32 w-24 h-24 md:w-32 md:h-32 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl shadow-xl flex items-center justify-center animate-float"
                    style={{ animationDelay: '0s' }}
                  >
                    <Rocket className="w-12 h-12 md:w-16 md:h-16 text-white" />
                  </div>

                  {/* Floating Element 2 */}
                  <div 
                    className="absolute top-32 -right-6 md:-right-8 w-20 h-20 md:w-24 md:h-24 bg-linear-to-br from-purple-500 to-pink-600 rounded-2xl shadow-xl flex items-center justify-center animate-float"
                    style={{ animationDelay: '1s' }}
                  >
                    <Zap className="w-10 h-10 md:w-12 md:h-12 text-white" />
                  </div>

                  {/* Floating Element 3 */}
                  <div 
                    className="absolute bottom-16 -left-6 md:-left-8 w-24 h-24 md:w-28 md:h-28 bg-linear-to-br from-blue-500 to-cyan-500 rounded-2xl shadow-xl flex items-center justify-center animate-float"
                    style={{ animationDelay: '2s' }}
                  >
                    <Globe className="w-10 h-10 md:w-14 md:h-14 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group relative bg-white/70 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 md:hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative z-10">
                  <div className="mb-3 md:mb-4 text-gray-700 group-hover:text-white transition-colors">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-900 group-hover:text-white transition-colors mb-1 md:mb-2">
                    {stat.number}
                  </div>
                  <div className="text-xs md:text-sm text-gray-600 group-hover:text-white/90 transition-colors font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              What We <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Deliver</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Comprehensive digital solutions tailored to elevate your business to new heights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-4"
                style={{ transitionDelay: service.delay }}
              >
                <div className="absolute inset-0 bg-linear-to-br opacity-0 group-hover:opacity-5 transition-opacity rounded-2xl md:rounded-3xl" 
                     style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }}></div>
                
                <div className={`inline-flex p-3 md:p-4 bg-linear-to-br ${service.color} rounded-xl md:rounded-2xl text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-500`}>
                  {service.icon}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                
                <button className="flex items-center text-purple-600 font-semibold group-hover:text-blue-600 transition-colors text-sm md:text-base">
                  Learn More 
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1 group-hover:translate-x-2 transition-transform" />
                </button>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-12 h-12 md:w-20 md:h-20 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className={`absolute top-2 right-2 md:top-4 md:right-4 w-8 h-8 md:w-12 md:h-12 bg-linear-to-br ${service.color} rounded-full blur-xl`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="team" className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
            {/* Left: Team Cards */}
            <div className="space-y-4 md:space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 md:mb-8">
                Meet Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expert Team</span>
              </h2>
              
              {team.map((member, index) => (
                <div 
                  key={index}
                  className="group relative bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-x-1 md:hover:-translate-x-2"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <div className={`w-12 h-12 md:w-16 md:h-16 bg-linear-to-br ${member.gradient} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Users className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                        {member.role}
                      </h3>
                      <p className="text-gray-600 text-sm md:text-base">{member.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Benefits */}
            <div className="space-y-4 md:space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8">Why Choose Us?</h3>
              
              {[
                { title: "Proven Track Record", desc: "500+ successful projects delivered globally" },
                { title: "Cutting-Edge Tech", desc: "Latest frameworks and industry best practices" },
                { title: "Agile Methodology", desc: "Fast iterations and continuous delivery" },
                { title: "24/7 Support", desc: "Round-the-clock assistance and maintenance" },
                { title: "Scalable Solutions", desc: "Built to grow with your business needs" },
                { title: "Transparent Process", desc: "Clear communication and regular updates" }
              ].map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-start space-x-3 md:space-x-4 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="shrink-0 pt-0.5">
                    <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-green-500 group-hover:scale-125 transition-transform" />
                  </div>
                  <div>
                    <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                      {benefit.title}
                    </h4>
                    <p className="text-gray-600 text-sm md:text-base">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-linear-to-br from-blue-500 via-purple-600 to-pink-600 rounded-2xl md:rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS435IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6">
                Ready to Build Something Amazing?
              </h2>
              <p className="text-base md:text-xl text-white/90 mb-6 md:mb-8 px-4">
                {"Let's turn your vision into reality. Get started with a free consultation today."}
              </p>
              <button className="group px-8 py-3 md:px-10 md:py-4 bg-white text-purple-600 rounded-xl font-bold text-base md:text-lg hover:scale-105 hover:shadow-2xl transition-all">
                Get Free Consultation
                <ArrowRight className="inline-block ml-2 w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t">
        <div className="max-w-7xl mx-auto text-center">
          <div className="text-lg font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Joy Web Solutions
          </div>
          <p className="text-gray-600 text-sm md:text-base">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(20px, -50px) scale(1.1); }
          50% { transform: translate(-20px, 20px) scale(0.9); }
          75% { transform: translate(50px, 50px) scale(1.05); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        /* Touch device optimizations */
        @media (hover: none) {
          .hover\:scale-105:hover,
          .group:hover .group-hover\:scale-110 {
            transform: none;
          }
          
          .hover\:shadow-2xl:hover {
            box-shadow: none;
          }
          
          .hover\:translate-x-2:hover {
            transform: none;
          }
          
          .hover\:-translate-y-2:hover {
            transform: none;
          }
          
          .hover\:-translate-x-2:hover {
            transform: none;
          }
        }
      `}</style>
    </div>
  );
}