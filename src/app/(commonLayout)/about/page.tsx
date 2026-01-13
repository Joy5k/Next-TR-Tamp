/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import { useState, useEffect } from 'react';
import { Target, Lightbulb, Award, Users, Code, Heart, TrendingUp, Shield, Zap, Globe, CheckCircle, ArrowRight, Rocket, Star, Clock, Coffee, Laptop, Trophy } from 'lucide-react';

export default function AboutPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const story = {
    year: "2019",
    title: "Our Journey Began",
    description: "Joy Web Solutions was founded with a simple mission: to help businesses thrive in the digital world. What started as a small team of passionate developers has grown into a full-service web development agency serving clients across the globe."
  };

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Your success is our success. We prioritize understanding your unique needs and delivering solutions that exceed expectations.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation First",
      description: "We stay ahead of technology trends, constantly learning and implementing cutting-edge solutions to give you a competitive advantage.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Quality Driven",
      description: "We don't cut corners. Every line of code, every design element is crafted with precision and tested rigorously for perfection.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Passion & Integrity",
      description: "We love what we do and we do it honestly. Transparency, ethical practices, and genuine care drive every project we undertake.",
      gradient: "from-pink-500 to-red-500"
    }
  ];

  const team = [
    {
      name: "Sarah Mitchell",
      role: "CEO & Founder",
      image: "👩‍💼",
      bio: "15+ years in tech leadership, visionary entrepreneur passionate about digital transformation.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      name: "Michael Chen",
      role: "CTO & Lead Architect",
      image: "👨‍💻",
      bio: "Full-stack expert with mastery in modern frameworks and scalable cloud architecture.",
      gradient: "from-purple-500 to-pink-600"
    },
    {
      name: "Emily Rodriguez",
      role: "Head of Design",
      image: "👩‍🎨",
      bio: "Award-winning UI/UX designer creating beautiful, user-centric digital experiences.",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "David Thompson",
      role: "Sales Manager",
      image: "👨‍💼",
      bio: "Strategic relationship builder connecting businesses with perfect web solutions.",
      gradient: "from-purple-600 to-blue-600"
    },
    {
      name: "Lisa Wang",
      role: "Lead Generator",
      image: "👩‍💻",
      bio: "Growth specialist identifying opportunities and expanding our global client base.",
      gradient: "from-pink-500 to-purple-600"
    },
    {
      name: "James Wilson",
      role: "Senior Developer",
      image: "👨‍🔧",
      bio: "Code craftsman specializing in React, Node.js, and high-performance applications.",
      gradient: "from-cyan-500 to-blue-500"
    }
  ];

  const stats = [
    { icon: <Rocket className="w-8 h-8" />, number: "500+", label: "Projects Completed", color: "text-blue-600" },
    { icon: <Users className="w-8 h-8" />, number: "200+", label: "Happy Clients", color: "text-purple-600" },
    { icon: <Globe className="w-8 h-8" />, number: "45+", label: "Countries Served", color: "text-cyan-600" },
    { icon: <Trophy className="w-8 h-8" />, number: "15+", label: "Industry Awards", color: "text-pink-600" }
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Joy Web Solutions launched with a team of 3 passionate developers in San Francisco.",
      icon: <Star className="w-6 h-6" />
    },
    {
      year: "2020",
      title: "First 100 Projects",
      description: "Reached milestone of 100 successful project deliveries and expanded team to 10 members.",
      icon: <Trophy className="w-6 h-6" />
    },
    {
      year: "2021",
      title: "Global Expansion",
      description: "Opened offices in London and Toronto, serving clients across 3 continents.",
      icon: <Globe className="w-6 h-6" />
    },
    {
      year: "2022",
      title: "Innovation Award",
      description: "Received 'Best Web Development Agency' award from TechInnovate Summit.",
      icon: <Award className="w-6 h-6" />
    },
    {
      year: "2023",
      title: "500+ Projects",
      description: "Celebrated 500th project completion and launched 24/7 global support.",
      icon: <Rocket className="w-6 h-6" />
    },
    {
      year: "2024",
      title: "AI Integration",
      description: "Pioneered AI-powered development tools, reducing delivery time by 40%.",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const expertise = [
    { icon: <Code className="w-6 h-6" />, text: "Full-Stack Development", percent: 95 },
    { icon: <Laptop className="w-6 h-6" />, text: "UI/UX Design", percent: 92 },
    { icon: <Shield className="w-6 h-6" />, text: "Security & Performance", percent: 98 },
    { icon: <TrendingUp className="w-6 h-6" />, text: "SEO & Marketing", percent: 88 },
    { icon: <Globe className="w-6 h-6" />, text: "Cloud Deployment", percent: 90 },
    { icon: <Zap className="w-6 h-6" />, text: "API Integration", percent: 94 }
  ];

  const culture = [
    { icon: <Coffee className="w-6 h-6" />, title: "Work-Life Balance", desc: "Flexible hours and remote-friendly" },
    { icon: <Lightbulb className="w-6 h-6" />, title: "Continuous Learning", desc: "Monthly training and conference budgets" },
    { icon: <Users className="w-6 h-6" />, title: "Collaborative Environment", desc: "Open communication and teamwork" },
    { icon: <Heart className="w-6 h-6" />, title: "Health & Wellness", desc: "Comprehensive benefits and wellness programs" }
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
            top: '50%',
            right: '10%'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6 animate-pulse">
              <Heart className="w-4 h-4" />
              <span>Crafting Digital Excellence Since 2019</span>
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              About <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Joy Web Solutions</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              We&apos;re more than just developers. We&apos;re your partners in digital transformation, dedicated to building exceptional web experiences that drive real business results.
            </p>

            {/* Story Card */}
            <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
                <div className="shrink-0">
                  <div className="w-24 h-24 bg-linear-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white text-3xl font-bold">
                    {story.year}
                  </div>
                </div>
                <div className="text-left">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{story.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{story.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 bg-linear-to-br from-blue-100 to-purple-100 rounded-xl mb-4 group-hover:scale-110 transition-transform ${stat.color}`}>
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Our Core Values
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Drives Us</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we deliver
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 bg-linear-to-br ${value.gradient} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform`}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Meet the Team
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">People</span> Behind Our Success
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Talented individuals united by a passion for creating exceptional digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div 
                key={index}
                className="group relative bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-4 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${member.gradient} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="relative z-10 p-8 text-center">
                  <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform">
                    {member.image}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-purple-600 group-hover:text-white/90 font-semibold mb-4 transition-colors">
                    {member.role}
                  </p>
                  <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed transition-colors">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Key <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Milestones</span>
            </h2>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-linear-to-b from-blue-500 via-purple-600 to-pink-600 hidden md:block"></div>

            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div 
                  key={index}
                  className="relative pl-0 md:pl-20"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 top-6 w-5 h-5 bg-linear-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                  <div className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-x-2">
                    <div className="flex items-start space-x-4">
                      <div className="shrink-0 w-12 h-12 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {milestone.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <span className="text-2xl font-bold text-purple-600">{milestone.year}</span>
                          <h3 className="text-xl font-bold text-gray-900">{milestone.title}</h3>
                        </div>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600">Technologies and skills we&apos;ve mastered</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {expertise.map((skill, index) => (
              <div 
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-linear-to-br from-blue-100 to-purple-100 rounded-lg text-purple-600">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{skill.text}</span>
                  </div>
                  <span className="text-lg font-bold text-purple-600">{skill.percent}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                  <div 
                    className="h-full bg-linear-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Culture</span>
            </h2>
            <p className="text-xl text-gray-600">What makes Joy Web Solutions a great place to work</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <div 
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 text-center"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="inline-flex p-4 bg-linear-to-br from-blue-100 to-purple-100 rounded-xl text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-linear-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10 text-center">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Let&apos;s create something amazing. Join hundreds of satisfied clients who trust Joy Web Solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:scale-105 hover:shadow-2xl transition-all">
                  Start Your Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all">
                  View Our Work
                </button>
              </div>
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
      `}</style>
    </div>
  );
}