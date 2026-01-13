/* eslint-disable react-hooks/set-state-in-effect */
'use client'

import  { useState, useEffect } from 'react';
import { Check, X, Star, Sparkles, ArrowRight, Gift, Clock, Shield, TrendingUp, Code, Rocket, Crown, Award, DollarSign, Percent, CheckCircle } from 'lucide-react';

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false);
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const pricingPlans = [
    {
      name: "Starter",
      tagline: "Perfect for small businesses",
      icon: <Rocket className="w-8 h-8" />,
      monthlyPrice: 299,
      yearlyPrice: 2990,
      discount: "Save $598/year",
      gradient: "from-blue-500 to-cyan-500",
      popular: false,
      features: [
        { text: "5-Page Responsive Website", included: true },
        { text: "Mobile-Friendly Design", included: true },
        { text: "Basic SEO Optimization", included: true },
        { text: "Contact Form Integration", included: true },
        { text: "Social Media Integration", included: true },
        { text: "1 Month Free Support", included: true },
        { text: "SSL Certificate Setup", included: true },
        { text: "Google Analytics Setup", included: true },
        { text: "2 Rounds of Revisions", included: true },
        { text: "E-commerce Functionality", included: false },
        { text: "Advanced Animations", included: false },
        { text: "Database Integration", included: false }
      ],
      deliveryTime: "2 weeks",
      setupFee: 0
    },
    {
      name: "Professional",
      tagline: "Most popular for growing businesses",
      icon: <Crown className="w-8 h-8" />,
      monthlyPrice: 599,
      yearlyPrice: 5990,
      discount: "Save $1,198/year",
      gradient: "from-purple-500 to-pink-600",
      popular: true,
      features: [
        { text: "10-Page Responsive Website", included: true },
        { text: "Custom UI/UX Design", included: true },
        { text: "Advanced SEO Package", included: true },
        { text: "Blog/News Section", included: true },
        { text: "E-commerce (Up to 50 Products)", included: true },
        { text: "Payment Gateway Integration", included: true },
        { text: "Database Integration", included: true },
        { text: "Advanced Animations", included: true },
        { text: "3 Months Free Support", included: true },
        { text: "Email Setup (5 accounts)", included: true },
        { text: "5 Rounds of Revisions", included: true },
        { text: "Performance Optimization", included: true }
      ],
      deliveryTime: "3-4 weeks",
      setupFee: 0,
      bonus: "Free Logo Design Worth $150"
    },
    {
      name: "Enterprise",
      tagline: "For large-scale projects",
      icon: <Award className="w-8 h-8" />,
      monthlyPrice: 1299,
      yearlyPrice: 12990,
      discount: "Save $2,598/year",
      gradient: "from-blue-600 to-purple-600",
      popular: false,
      features: [
        { text: "Unlimited Pages", included: true },
        { text: "Premium Custom Design", included: true },
        { text: "Full E-commerce Solution", included: true },
        { text: "Advanced API Integrations", included: true },
        { text: "Multi-language Support", included: true },
        { text: "Customer Dashboard/Portal", included: true },
        { text: "Advanced Security Features", included: true },
        { text: "Cloud Deployment (AWS/Azure)", included: true },
        { text: "6 Months Premium Support", included: true },
        { text: "Dedicated Project Manager", included: true },
        { text: "Unlimited Revisions", included: true },
        { text: "Priority 24/7 Support", included: true }
      ],
      deliveryTime: "6-8 weeks",
      setupFee: 0,
      bonus: "Free Branding Package Worth $500"
    }
  ];

  const addons = [
    { 
      name: "Bug Fixing Service", 
      price: 49, 
      unit: "/hour",
      description: "Fix any website bugs or issues",
      icon: <Code className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-500"
    },
    { 
      name: "Monthly Maintenance", 
      price: 99, 
      unit: "/month",
      description: "Regular updates and maintenance",
      icon: <Shield className="w-6 h-6" />,
      gradient: "from-purple-500 to-pink-600"
    },
    { 
      name: "SEO Optimization", 
      price: 199, 
      unit: "/month",
      description: "Ongoing SEO and content strategy",
      icon: <TrendingUp className="w-6 h-6" />,
      gradient: "from-blue-600 to-purple-600"
    },
    { 
      name: "Custom Features", 
      price: 299, 
      unit: "/feature",
      description: "Add custom functionality",
      icon: <Sparkles className="w-6 h-6" />,
      gradient: "from-pink-500 to-red-500"
    }
  ];

  const limitedOffers = [
    {
      title: "Early Bird Special",
      discount: "30% OFF",
      description: "First 10 clients this month get 30% off any package",
      validUntil: "Jan 31, 2026",
      icon: <Clock className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      code: "EARLY30"
    },
    {
      title: "Referral Bonus",
      discount: "$200 Credit",
      description: "Refer a client and both of you get $200 credit",
      validUntil: "Ongoing",
      icon: <Gift className="w-8 h-8" />,
      gradient: "from-green-500 to-teal-600",
      code: "REFER200"
    },
    {
      title: "Bundle & Save",
      discount: "20% OFF",
      description: "Get any package + 6 months maintenance for 20% off",
      validUntil: "Feb 15, 2026",
      icon: <Percent className="w-8 h-8" />,
      gradient: "from-purple-500 to-indigo-600",
      code: "BUNDLE20"
    }
  ];

  const faqs = [
    {
      q: "What's included in the free support period?",
      a: "Free support includes bug fixes, minor content updates, technical assistance, and guidance on using your website. It doesn't include major feature additions or redesigns."
    },
    {
      q: "Do I own the website after completion?",
      a: "Absolutely! Upon final payment, you receive full ownership of the website including all source code, designs, and assets."
    },
    {
      q: "Can I upgrade my plan later?",
      a: "Yes! You can upgrade anytime. We'll credit your previous payment toward the upgrade cost."
    },
    {
      q: "What if I need more pages than included?",
      a: "Additional pages cost $50-$150 each depending on complexity. We can provide a custom quote based on your needs."
    },
    {
      q: "Is hosting included in the price?",
      a: "The initial setup includes hosting configuration. Ongoing hosting costs $15-$50/month depending on traffic and requirements."
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept credit/debit cards, PayPal, bank transfers, and cryptocurrency. Payment plans available for Enterprise packages."
    }
  ];

  const calculatePrice = (monthly: number, yearly: number) => {
    return billingCycle === 'monthly' ? monthly : yearly;
  };

  const calculateSavings = (monthly: number, yearly: number) => {
    const monthlyCost = monthly * 12;
    const savings = monthlyCost - yearly;
    return savings;
  };

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
            <span className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-green-500 to-teal-600 rounded-full text-white text-sm font-semibold shadow-lg mb-6 animate-pulse">
              <DollarSign className="w-4 h-4" />
              <span>Affordable Pricing • Premium Quality</span>
            </span>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
              Simple, <span className="bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-gradient">Transparent</span> Pricing
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Choose the perfect plan for your business. No hidden fees, no surprises. Just great websites at great prices.
            </p>

            {/* Billing Toggle */}
            <div className="inline-flex items-center bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('yearly')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all relative ${
                  billingCycle === 'yearly'
                    ? 'bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-bold">
                  Save 17%
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Limited Time Offers */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              🎉 <span className="bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">Limited Time Offers</span>
            </h2>
            <p className="text-gray-600">Don&apos;t miss these exclusive deals!</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {limitedOffers.map((offer, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`absolute inset-0 bg-linear-to-br ${offer.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
                
                <div className="relative z-10 p-6">
                  <div className={`inline-flex p-3 bg-linear-to-br ${offer.gradient} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {offer.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{offer.title}</h3>
                  <div className="text-3xl font-bold bg-linear-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-3">
                    {offer.discount}
                  </div>
                  <p className="text-gray-600 mb-4">{offer.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">Valid until:</span>
                      <div className="font-semibold text-gray-900">{offer.validUntil}</div>
                    </div>
                    <div className="px-3 py-1 bg-gray-100 rounded-lg text-sm font-mono font-bold text-purple-600">
                      {offer.code}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`group relative bg-white rounded-3xl shadow-xl transition-all duration-500 overflow-hidden ${
                  plan.popular ? 'lg:-mt-4 lg:scale-105 ring-4 ring-purple-500' : 'hover:-translate-y-2'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-linear-to-r from-purple-500 to-pink-600 text-white px-6 py-2 rounded-bl-2xl font-bold flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current" />
                    <span>MOST POPULAR</span>
                  </div>
                )}

                <div className="p-8">
                  {/* Header */}
                  <div className={`inline-flex p-4 bg-linear-to-br ${plan.gradient} rounded-2xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                    {plan.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-6">{plan.tagline}</p>

                  {/* Price */}
                  <div className="mb-6">
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        ${calculatePrice(plan.monthlyPrice, plan.yearlyPrice)}
                      </span>
                      <span className="text-gray-600 ml-2">
                        /{billingCycle === 'monthly' ? 'month' : 'year'}
                      </span>
                    </div>
                    {billingCycle === 'yearly' && (
                      <div className="mt-2 text-sm text-green-600 font-semibold">
                        💰 {plan.discount}
                      </div>
                    )}
                  </div>

                  {/* Delivery Time */}
                  <div className="flex items-center space-x-2 mb-6 text-sm">
                    <Clock className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-600">Delivery: <strong className="text-gray-900">{plan.deliveryTime}</strong></span>
                  </div>

                  {/* Bonus */}
                  {plan.bonus && (
                    <div className="mb-6 p-3 bg-linear-to-r from-green-50 to-teal-50 border-2 border-green-200 rounded-xl">
                      <div className="flex items-center space-x-2 text-green-700">
                        <Gift className="w-5 h-5" />
                        <span className="font-semibold text-sm">{plan.bonus}</span>
                      </div>
                    </div>
                  )}

                  {/* CTA Button */}
                  <button className={`w-full py-4 rounded-xl font-bold text-white mb-8 transition-all hover:scale-105 hover:shadow-xl ${
                    plan.popular
                      ? 'bg-linear-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700'
                      : 'bg-linear-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                  }`}>
                    Get Started
                    <ArrowRight className="inline-block ml-2 w-5 h-5" />
                  </button>

                  {/* Features */}
                  <div className="space-y-3">
                    <h4 className="font-bold text-gray-900 mb-4">What&apos;s Included:</h4>
                    {plan.features.map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-start space-x-3">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                        ) : (
                          <X className="w-5 h-5 text-gray-300 shrink-0 mt-0.5" />
                        )}
                        <span className={feature.included ? 'text-gray-700' : 'text-gray-400 line-through'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Additional <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-600">Enhance your website with these optional add-ons</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addons.map((addon, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-3 bg-linear-to-br ${addon.gradient} rounded-xl text-white mb-4 group-hover:scale-110 transition-transform`}>
                  {addon.icon}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2">{addon.name}</h3>
                <div className="text-3xl font-bold text-gray-900 mb-3">
                  ${addon.price}
                  <span className="text-base text-gray-600 font-normal">{addon.unit}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{addon.description}</p>
                
                <button className="w-full py-2 border-2 border-gray-200 rounded-lg text-gray-700 font-semibold hover:border-purple-600 hover:text-purple-600 transition-all">
                  Add to Package
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Money-Back Guarantee */}
      <section className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-linear-to-br from-green-500 to-teal-600 rounded-3xl p-12 shadow-2xl overflow-hidden text-center">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10">
              <Shield className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl font-bold text-white mb-4">
                30-Day Money-Back Guarantee
              </h2>
              <p className="text-xl text-white/90 mb-6 max-w-2xl mx-auto">
                Not satisfied with our work? Get a full refund within 30 days, no questions asked. We&apos;re confident you&apos;ll love what we build for you.
              </p>
              <div className="flex items-center justify-center space-x-2 text-white">
                <CheckCircle className="w-5 h-5" />
                <span className="font-semibold">100% Risk-Free</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-linear-to-br from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 shadow-2xl overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6bTAtMjBjMC0yLjIxIDEuNzktNCA0LTRzNCAxLjc5IDQgNC0xLjc5IDQtNCA0LTQtMS43OS00LTR6TTE2IDM0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wLTIwYzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
            
            <div className="relative z-10 text-center">
              <Sparkles className="w-16 h-16 text-white mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 mb-8">
                Join 200+ satisfied clients who chose Joy Web Solutions. Let&apos;s build something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="group px-8 py-4 bg-white text-purple-600 rounded-xl font-bold hover:scale-105 hover:shadow-2xl transition-all">
                  Start Your Project
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-bold hover:bg-white hover:text-purple-600 transition-all">
                  Schedule Consultation
                </button>
              </div>
              <p className="text-sm text-white/70 mt-6">
                💳 Flexible payment plans available • 🔒 Secure checkout
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}