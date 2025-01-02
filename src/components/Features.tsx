import { Search, Bell, Building2, Users, Clock, Shield, Map, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function Features() {
  const features = [
    {
      icon: <Search className="h-7 w-7 text-red-600" />,
      title: 'Smart Search',
      description: 'Find compatible donors instantly with our AI-powered matching system.',
      gradient: 'from-red-100 to-orange-50'
    },
    {
      icon: <Bell className="h-7 w-7 text-red-600" />,
      title: 'Real-time Alerts',
      description: 'Get immediate notifications for urgent blood requirements in your area.',
      gradient: 'from-red-100 to-pink-50'
    },
    {
      icon: <Building2 className="h-7 w-7 text-red-600" />,
      title: 'Hospital Network',
      description: 'Connected with 100+ verified hospitals for seamless coordination.',
      gradient: 'from-red-100 to-rose-50'
    },
    {
      icon: <Users className="h-7 w-7 text-red-600" />,
      title: 'Community Support',
      description: 'Join a network of committed donors making a difference together.',
      gradient: 'from-red-50 to-orange-100'
    },
    {
      icon: <Clock className="h-7 w-7 text-red-600" />,
      title: 'Quick Response',
      description: 'Emergency blood requests fulfilled within 30 minutes.',
      gradient: 'from-rose-50 to-red-100'
    },
    {
      icon: <Shield className="h-7 w-7 text-red-600" />,
      title: 'Verified Donors',
      description: 'All donors are screened and verified for safety.',
      gradient: 'from-orange-50 to-red-100'
    },
    {
      icon: <Map className="h-7 w-7 text-red-600" />,
      title: 'Location Tracking',
      description: 'Real-time tracking of blood units during transportation.',
      gradient: 'from-pink-50 to-red-100'
    },
    {
      icon: <Heart className="h-7 w-7 text-red-600" />,
      title: 'Donor Rewards',
      description: 'Earn points and recognition for your life-saving contributions.',
      gradient: 'from-rose-50 to-red-100'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="features" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-red-50/80 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-red-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-100 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Why Choose RaktDaan
          </h2>
          <p className="text-xl text-gray-600">
            Experience a revolutionary approach to blood donation with features designed for speed, safety, and efficiency.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-20 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
              <div className="relative">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <button className="inline-flex items-center px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            <Heart className="h-5 w-5 mr-2" />
            Start Saving Lives Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}