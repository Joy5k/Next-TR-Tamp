'use client';

import { useState, useEffect } from 'react';
import { 
  Code, CheckCircle, ArrowRight, Target, Sparkles, TrendingUp, Briefcase,
  Globe, Cpu, Server,Search,
  Heart, Award, Clock, MapPin, DollarSign, Coffee,
   Terminal, Layout,
} from 'lucide-react';

export default function CareersPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [activeRole, setActiveRole] = useState('all');

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

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      clearTimeout(timer);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const jobPositions = [
    {
      id: 'frontend',
      title: 'Frontend Developer',
      type: 'Technical',
      level: 'Mid to Senior',
      location: 'Remote / On-site',
      description: 'Build beautiful, responsive web applications using modern frameworks.',
      salary: '$70K - $120K',
      tags: ['React.js', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Tailwind', 'Material-UI', 'Redux'],
      icon: <Layout className="w-6 h-6" />,
      gradient: 'from-blue-500 to-cyan-500',
      requirements: [
        '3+ years experience with React/Next.js',
        'Expert in TypeScript and modern JavaScript',
        'Proficient with Tailwind CSS and Material-UI',
        'Experience with state management (Redux)',
        'Strong UI/UX implementation skills'
      ]
    },
    {
      id: 'backend',
      title: 'Backend Developer',
      type: 'Technical',
      level: 'Mid to Senior',
      location: 'Remote / On-site',
      description: 'Design and implement robust server-side architectures.',
      salary: '$75K - $130K',
      tags: ['Node.js', 'TypeScript', 'PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'AWS', 'Supabase'],
      icon: <Server className="w-6 h-6" />,
      gradient: 'from-purple-500 to-pink-600',
      requirements: [
        '3+ years experience with Node.js',
        'Expert in database design (SQL & NoSQL)',
        'Experience with Prisma ORM and Mongoose',
        'AWS deployment and management',
        'API design and optimization'
      ]
    },
    {
      id: 'fullstack',
      title: 'Full Stack Developer',
      type: 'Technical',
      level: 'Senior',
      location: 'Remote / On-site',
      description: 'End-to-end development of scalable web applications.',
      salary: '$90K - $150K',
      tags: ['React', 'Next.js', 'Node.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Prisma', 'Tailwind'],
      icon: <Cpu className="w-6 h-6" />,
      gradient: 'from-green-500 to-blue-600',
      requirements: [
        '4+ years full stack experience',
        'Expert in React, Next.js, and Node.js',
        'Full database lifecycle management',
        'Cloud infrastructure experience',
        'CI/CD pipeline setup'
      ]
    },
    {
      id: 'lead-gen',
      title: 'Lead Generation Specialist',
      type: 'Business',
      level: 'Mid Level',
      location: 'Remote',
      description: 'Drive business growth through strategic lead acquisition.',
      salary: '$50K - $85K + Commission',
      tags: ['CRM', 'Sales', 'Marketing', 'Analytics', 'Outreach'],
      icon: <Search className="w-6 h-6" />,
      gradient: 'from-orange-500 to-red-600',
      requirements: [
        '2+ years in B2B lead generation',
        'Proven track record of meeting targets',
        'Experience with CRM tools',
        'Strong analytical skills',
        'Excellent communication'
      ]
    },
    {
      id: 'client-hunting',
      title: 'Client Hunting Executive',
      type: 'Business',
      level: 'Senior',
      location: 'Remote / Hybrid',
      description: 'Acquire and nurture enterprise-level client relationships.',
      salary: '$65K - $110K + Commission',
      tags: ['Sales', 'Negotiation', 'Enterprise', 'Relationship', 'Strategy'],
      icon: <Target className="w-6 h-6" />,
      gradient: 'from-red-500 to-purple-600',
      requirements: [
        '3+ years in enterprise sales',
        'Proven client acquisition record',
        'Strong negotiation skills',
        'Technical sales experience',
        'Portfolio management'
      ]
    }
  ];

  const techStack = {
    frontend: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Redux', 'Tailwind CSS', 'Material-UI'],
    backend: ['Node.js', 'PostgreSQL', 'MongoDB', 'Mongoose', 'Prisma', 'Supabase'],
    tools: ['AWS', 'Docker', 'Git', 'CI/CD', 'Jest', 'Webpack'],
    softSkills: ['Communication', 'Teamwork', 'Problem-solving', 'Leadership', 'Time Management']
  };

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'Industry-leading compensation with regular reviews'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive medical, dental, and vision coverage'
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: 'Flexible Hours',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: 'Learning Budget',
      description: '$2000 annual budget for courses and conferences'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear promotion paths and mentorship programs'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Remote First',
      description: 'Work from anywhere with our global team'
    }
  ];

  const cultureValues = [
    { title: 'Innovation First', description: 'We encourage experimentation and new ideas' },
    { title: 'Collaborative Spirit', description: 'Teamwork makes the dream work' },
    { title: 'Continuous Learning', description: 'Always growing, always improving' },
    { title: 'Work-Life Balance', description: 'Healthy minds create amazing work' },
    { title: 'Transparency', description: 'Open communication at all levels' },
    { title: 'Impact Driven', description: 'We build solutions that matter' }
  ];

  const filteredPositions = activeRole === 'all' 
    ? jobPositions 
    : jobPositions.filter(job => job.type.toLowerCase() === activeRole.toLowerCase());

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 via-blue-50 to-purple-50 overflow-hidden">
      {/* Animated Background Elements */}
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
        <div 
          className="absolute w-96 h-96 bg-linear-to-r from-green-400 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"
          style={{
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            bottom: '10%',
            left: '30%'
          }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-blue-500 to-purple-600 rounded-full text-white text-sm font-semibold shadow-lg animate-pulse">
                <Sparkles className="w-4 h-4" />
                <span>We&apos;re Hiring Tech Talent</span>
              </div>
              
              <h1 className="text-6xl md:text-7xl font-bold leading-tight">
                <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">
                  Join Our
                </span>
                <br />
                <span className="text-gray-900">Innovation Journey</span>
              </h1>
              
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                Build amazing products with cutting-edge technologies. We&apos;re looking for passionate developers and growth experts to shape the future.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="group relative px-8 py-4 bg-linear-to-r from-blue-500 to-purple-600 text-white rounded-xl font-semibold overflow-hidden transition-all hover:scale-105 hover:shadow-2xl">
                  <span className="relative z-10 flex items-center justify-center">
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className="absolute inset-0 bg-linear-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </button>
                
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 rounded-xl font-semibold hover:border-purple-600 hover:text-purple-600 hover:shadow-lg transition-all">
                  Meet Our Team
                </button>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-purple-600">15+</div>
                  <div className="text-sm text-gray-600">Open Roles</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-blue-600">50+</div>
                  <div className="text-sm text-gray-600">Team Members</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Remote Friendly</div>
                </div>
                <div className="text-center p-4 bg-white/50 backdrop-blur-sm rounded-xl">
                  <div className="text-2xl font-bold text-pink-600">Flex</div>
                  <div className="text-sm text-gray-600">Work Hours</div>
                </div>
              </div>
            </div>

            {/* Right Visual - Tech Stack */}
            <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Tech Stack</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex items-center mb-3">
                      <Layout className="w-5 h-5 text-blue-500 mr-2" />
                      <span className="font-semibold text-gray-700">Frontend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techStack.frontend.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Server className="w-5 h-5 text-purple-500 mr-2" />
                      <span className="font-semibold text-gray-700">Backend</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techStack.backend.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex items-center mb-3">
                      <Terminal className="w-5 h-5 text-green-500 mr-2" />
                      <span className="font-semibold text-gray-700">Tools & DevOps</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {techStack.tools.map((tech, i) => (
                        <span key={i} className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-linear-to-r from-blue-100 to-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
              Open Positions
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Join Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Dream Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We&apos;re looking for talented individuals who are passionate about technology and innovation.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button
              onClick={() => setActiveRole('all')}
              className={`px-6 py-3 rounded-full font-semibold transition-all ${activeRole === 'all' ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:shadow-md'}`}
            >
              All Roles
            </button>
            <button
              onClick={() => setActiveRole('technical')}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${activeRole === 'technical' ? 'bg-linear-to-r from-blue-500 to-cyan-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:shadow-md'}`}
            >
              <Code className="w-4 h-4" />
              Technical
            </button>
            <button
              onClick={() => setActiveRole('business')}
              className={`px-6 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${activeRole === 'business' ? 'bg-linear-to-r from-orange-500 to-red-600 text-white shadow-lg' : 'bg-white text-gray-700 hover:shadow-md'}`}
            >
              <Briefcase className="w-4 h-4" />
              Business
            </button>
          </div>

          {/* Job Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPositions.map((job) => (
              <div 
                key={job.id}
                className="group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100"
              >
                <div className="absolute top-4 right-4">
                  <div className={`p-3 rounded-xl bg-linear-to-br ${job.gradient}`}>
                    {job.icon}
                  </div>
                </div>

                <div className="mb-6">
                  <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold mb-3">
                    {job.type}
                  </span>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <TrendingUp className="w-4 h-4 mr-2" />
                    {job.level}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.slice(0, 4).map((tag, i) => (
                    <span key={i} className="px-3 py-1 bg-gray-50 text-gray-700 rounded-full text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                  {job.tags.length > 4 && (
                    <span className="px-3 py-1 bg-gray-50 text-gray-500 rounded-full text-xs font-medium">
                      +{job.tags.length - 4} more
                    </span>
                  )}
                </div>

                <button className="w-full group/btn py-3 bg-gray-50 text-gray-800 rounded-xl font-semibold hover:bg-linear-to-r hover:from-blue-500 hover:to-purple-600 hover:text-white transition-all flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Perks & <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Benefits</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We take care of our team with comprehensive benefits and a supportive work environment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="inline-flex p-4 bg-blue-50 rounded-2xl text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Our <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Culture</span>
              </h2>
              <div className="grid grid-cols-2 gap-6">
                {cultureValues.map((value, index) => (
                  <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg">
                    <div className="w-12 h-12 bg-linear-to-br from-blue-100 to-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <CheckCircle className="w-6 h-6 text-purple-600" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-linear-to-br from-blue-500 to-purple-600 rounded-3xl p-10 text-white">
              <h3 className="text-3xl font-bold mb-6">Why You&apos;ll Love Working Here</h3>
              <ul className="space-y-4">
                {[
                  'Work on challenging projects with modern tech stack',
                  'Collaborate with talented, passionate colleagues',
                  'Continuous learning and growth opportunities',
                  'Make a real impact on product direction',
                  'Flexible work arrangements',
                  'Regular team events and hackathons'
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <Sparkles className="w-5 h-5 mr-3 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Application <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Process</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Apply', desc: 'Submit your application with resume' },
              { step: '02', title: 'Screening', desc: 'Initial phone/email screening' },
              { step: '03', title: 'Technical', desc: 'Skills assessment & interview' },
              { step: '04', title: 'Offer', desc: 'Welcome to the team!' }
            ].map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
                  <div className="w-16 h-16 bg-linear-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-blue-500 to-purple-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="relative bg-linear-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Build the Future With Us?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Apply today and join our team of innovators, creators, and problem-solvers.
              </p>
              <button className="group px-10 py-4 bg-white text-purple-600 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all">
                Apply Now
                <Briefcase className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
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

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </div>
  );
}