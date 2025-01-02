import { UserPlus, Search, MessageCircle, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

export function HowItWorks() {
  const steps = [
    {
      icon: <UserPlus className="h-8 w-8 text-red-600" />,
      title: 'Create Account',
      description: 'Sign up as a donor or recipient in minutes.',
      gradient: 'from-red-500/10 to-orange-500/10'
    },
    {
      icon: <Search className="h-8 w-8 text-red-600" />,
      title: 'Find Matches',
      description: 'Search for compatible donors in your area.',
      gradient: 'from-red-500/10 to-pink-500/10'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-red-600" />,
      title: 'Connect',
      description: 'Communicate directly with donors or recipients.',
      gradient: 'from-red-500/10 to-purple-500/10'
    },
    {
      icon: <Heart className="h-8 w-8 text-red-600" />,
      title: 'Save Lives',
      description: 'Complete the donation and help save lives.',
      gradient: 'from-red-500/10 to-rose-500/10'
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 tracking-tight">
            How It Works
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Follow these simple steps to start saving lives through blood donation.
          </p>
        </div>
        
        <div className="mt-20">
          <div className="grid md:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="flex flex-col items-center">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.gradient} rounded-2xl shadow-lg flex items-center justify-center mb-6 transform transition-transform group-hover:scale-110 duration-300`}>
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-center text-gray-600 leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-10 left-[calc(100%_-_1rem)] w-full h-0.5 bg-gradient-to-r from-red-200 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 