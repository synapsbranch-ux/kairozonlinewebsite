import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SignupModal from '../components/SignupModal';
import { Check, Zap, Crown, Building2 } from 'lucide-react';

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const plans = [
    {
      name: 'Free',
      icon: Zap,
      price: 0,
      description: 'Perfect for personal projects',
      badge: 'Start here',
      features: [
        '5 GB storage',
        '10 GB bandwidth/month',
        'Basic transformations',
        'Community support',
        '1 user',
        'Basic analytics'
      ],
      cta: 'Get Started Free',
      highlighted: false
    },
    {
      name: 'Pro',
      icon: Crown,
      price: isAnnual ? 24 : 29,
      originalPrice: isAnnual ? 29 : null,
      description: 'For growing teams and businesses',
      badge: 'Most popular',
      features: [
        '100 GB storage',
        'Unlimited bandwidth',
        'Advanced transformations',
        'Priority support',
        'Up to 5 users',
        'Advanced analytics',
        'Custom domains',
        'Webhooks & API access'
      ],
      cta: 'Start Pro Trial',
      highlighted: true
    },
    {
      name: 'Business',
      icon: Building2,
      price: isAnnual ? 82 : 99,
      originalPrice: isAnnual ? 99 : null,
      description: 'For large organizations',
      badge: 'Enterprise',
      features: [
        '500 GB storage',
        'Unlimited bandwidth',
        'All transformations',
        'Dedicated support',
        'Unlimited users',
        'Enterprise analytics',
        'Custom SLA',
        'Advanced security',
        'Team training'
      ],
      cta: 'Contact Sales',
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F8FAFB] to-white">
      <Navbar onGetStarted={() => setIsModalOpen(true)} />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6">
            Simple, transparent
            <span className="text-[#0A4D68]"> pricing</span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Start free, upgrade as you grow. No hidden fees, no surprises.
          </p>

          {/* Billing Toggle */}
          <div className="inline-flex items-center gap-4 bg-white rounded-full p-2 shadow-lg mb-16">
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-smooth ${
                !isAnnual ? 'bg-[#0A4D68] text-white' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(false)}
              data-testid="monthly-toggle"
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full font-semibold transition-smooth relative ${
                isAnnual ? 'bg-[#0A4D68] text-white' : 'text-gray-600'
              }`}
              onClick={() => setIsAnnual(true)}
              data-testid="annual-toggle"
            >
              Annual
              {!isAnnual && (
                <span className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#10B981] text-white text-xs px-2 py-1 rounded-full whitespace-nowrap">
                  Save 20%
                </span>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => {
              const Icon = plan.icon;
              return (
                <div
                  key={plan.name}
                  className={`relative rounded-2xl p-8 transition-smooth hover:scale-105 ${
                    plan.highlighted
                      ? 'bg-white shadow-2xl border-2 border-[#00D9FF] transform scale-105'
                      : 'bg-white shadow-lg'
                  }`}
                  data-testid={`pricing-card-${plan.name.toLowerCase()}`}
                >
                  {plan.badge && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className={`px-4 py-1 rounded-full text-sm font-semibold ${
                        plan.highlighted
                          ? 'bg-[#00D9FF] text-[#0F1419]'
                          : 'bg-gray-200 text-gray-700'
                      }`}>
                        {plan.badge}
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0A4D68]/10 mb-4">
                      <Icon className="w-8 h-8 text-[#0A4D68]" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                    
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-5xl font-bold text-[#0A4D68]">€{plan.price}</span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {plan.originalPrice && (
                      <div className="text-gray-400 line-through text-sm mt-1">
                        €{plan.originalPrice}/month
                      </div>
                    )}
                  </div>

                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-[#10B981] flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    className={`w-full py-3 rounded-full font-semibold transition-smooth ${
                      plan.highlighted
                        ? 'bg-[#00D9FF] text-[#0F1419] hover:scale-105'
                        : 'bg-gray-100 text-[#0A4D68] hover:bg-gray-200'
                    }`}
                    onClick={() => plan.name === 'Business' ? null : setIsModalOpen(true)}
                    data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">Pricing FAQs</h2>
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Can I change my plan later?</h3>
              <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any differences.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">What happens if I exceed my limits?</h3>
              <p className="text-gray-600">We'll notify you before you hit your limits. You can upgrade your plan or purchase additional storage and bandwidth as needed.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Do you offer refunds?</h3>
              <p className="text-gray-600">Yes, we offer a 14-day money-back guarantee on all paid plans. No questions asked.</p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Is there a setup fee?</h3>
              <p className="text-gray-600">No, there are no setup fees or hidden costs. You only pay for your chosen plan.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-[#0A4D68] to-[#084a5e] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Still have questions?
          </h2>
          <p className="text-xl mb-8 text-gray-200">
            Our team is here to help you choose the right plan.
          </p>
          <button className="bg-[#00D9FF] text-[#0F1419] px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-smooth">
            Contact Sales
          </button>
        </div>
      </section>

      <Footer />
      <SignupModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
};

export default Pricing;
