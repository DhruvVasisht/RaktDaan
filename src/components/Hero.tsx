import { Heart, Search, Bell, Activity } from "lucide-react";
import { motion } from "framer-motion";
import { Counter } from "./Counter";

export function Hero() {
  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Decorative background elements - keeping the same background */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNFRjQ0NDQiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-8 hover:bg-red-200 transition-colors duration-300"
              >
                <Activity className="h-4 w-4 mr-2 animate-pulse" />
                <span className="text-sm font-medium">Every Drop Counts</span>
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
              >
                Give the Gift of
                <span className="relative">
                  <span className="relative z-10 text-red-600 ml-4 inline-block hover:transform hover:scale-105 transition-transform duration-300">Life</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-red-200"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 }}
                      d="M0,0 Q50,12 100,0"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-xl text-gray-600 leading-relaxed"
              >
                Join our community of heroes making a difference. One donation
                can save up to three lives. Be part of something bigger than
                yourself.
              </motion.p>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://frontendraktdaan.vercel.app/login"
                  className="group relative px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    <Heart className="h-5 w-5 mr-2 group-hover:animate-pulse" />
                    Become a Donor
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a 
                  href="https://frontendraktdaan.vercel.app/hospitals" 
                  className="group relative px-8 py-4 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-50 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    <Search className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Nearby Blood Banks
                  </span>
                </a>
              </motion.div>

              {/* Stats */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-12 grid grid-cols-3 gap-8"
              >
                {[
                  { label: "Active Donors", value: 10000 },
                  { label: "Lives Saved", value: 30000 },
                  { label: "Cities", value: 50 }
                ].map((stat, index) => (
                  <motion.div 
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + index * 0.1 }}
                    className="flex flex-col hover:transform hover:scale-105 transition-transform duration-300"
                  >
                    <dt className="text-sm text-gray-600">{stat.label}</dt>
                    <dd className="text-3xl font-bold text-gray-900">
                      <Counter from={0} to={stat.value} />+
                    </dd>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative lg:ml-4"
            >
              <div className="relative">
                <motion.img
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800"
                  alt="Blood Donation"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500"
                />

                {/* Floating Cards */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-600 animate-pulse" />
                    <span className="font-semibold">10,000+ Lives Saved</span>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 }}
                  className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-red-600" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}