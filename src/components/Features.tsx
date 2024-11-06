import React from 'react';
import { Search, Bell, Building2, Users, Clock, Shield, Map, Heart } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <Search className="h-6 w-6 text-red-600" />,
      title: 'Smart Search',
      description: 'Find compatible donors instantly with our AI-powered matching system.'
    },
    {
      icon: <Bell className="h-6 w-6 text-red-600" />,
      title: 'Real-time Alerts',
      description: 'Get immediate notifications for urgent blood requirements in your area.'
    },
    {
      icon: <Building2 className="h-6 w-6 text-red-600" />,
      title: 'Hospital Network',
      description: 'Connected with 100+ verified hospitals for seamless coordination.'
    },
    {
      icon: <Users className="h-6 w-6 text-red-600" />,
      title: 'Community Support',
      description: 'Join a network of committed donors making a difference together.'
    },
    {
      icon: <Clock className="h-6 w-6 text-red-600" />,
      title: 'Quick Response',
      description: 'Emergency blood requests fulfilled within 30 minutes.'
    },
    {
      icon: <Shield className="h-6 w-6 text-red-600" />,
      title: 'Verified Donors',
      description: 'All donors are screened and verified for safety.'
    },
    {
      icon: <Map className="h-6 w-6 text-red-600" />,
      title: 'Location Tracking',
      description: 'Real-time tracking of blood units during transportation.'
    },
    {
      icon: <Heart className="h-6 w-6 text-red-600" />,
      title: 'Donor Rewards',
      description: 'Earn points and recognition for your life-saving contributions.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-red-50 to-transparent"></div>
      <div className="absolute bottom-0 right-0 w-40 h-40 bg-red-100 rounded-full blur-3xl opacity-30 transform translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose RaktDaan</h2>
          <p className="text-xl text-gray-600">
            Experience a revolutionary approach to blood donation with features designed for speed, safety, and efficiency.
          </p>
        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors">
            <Heart className="h-5 w-5 mr-2" />
            Start Saving Lives Today
          </button>
        </div>
      </div>
    </section>
  );
}