import React from 'react';
import { UserPlus, Search, MessageCircle, Heart } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-6 w-6 text-red-600" />,
      title: 'Create Account',
      description: 'Sign up as a donor or recipient in minutes.'
    },
    {
      icon: <Search className="h-6 w-6 text-red-600" />,
      title: 'Find Matches',
      description: 'Search for compatible donors in your area.'
    },
    {
      icon: <MessageCircle className="h-6 w-6 text-red-600" />,
      title: 'Connect',
      description: 'Communicate directly with donors or recipients.'
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: 'Save Lives',
      description: 'Complete the donation and help save lives.'
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">
            Follow these simple steps to start saving lives through blood donation.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-center text-gray-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/4 left-full w-full h-0.5 bg-red-200" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}