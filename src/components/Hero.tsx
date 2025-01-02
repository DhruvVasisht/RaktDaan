import { Heart, Search, Bell, Activity } from "lucide-react";

export function Hero() {
  return (
    <div className="relative pt-16 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-red-100">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtNi42MjcgMC0xMiA1LjM3My0xMiAxMnM1LjM3MyAxMiAxMiAxMiAxMi01LjM3MyAxMi0xMi01LjM3My0xMi0xMi0xMnptMCAxOGMtMy4zMTQgMC02LTIuNjg2LTYtNnMyLjY4Ni02IDYtNiA2IDIuNjg2IDYgNi0yLjY4NiA2LTYgNnoiIGZpbGw9IiNFRjQ0NDQiIG9wYWNpdHk9IjAuMSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative pt-10 pb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <div className="relative z-10">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-100 text-red-600 mb-8">
                <Activity className="h-4 w-4 mr-2" />
                <span className="text-sm font-medium">Every Drop Counts</span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Give the Gift of
                <span className="relative">
                  <span className="relative z-10 text-red-600 ml-4">Life</span>
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-red-200"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0,0 Q50,12 100,0"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                  </svg>
                </span>
              </h1>

              <p className="mt-8 text-xl text-gray-600 leading-relaxed">
                Join our community of heroes making a difference. One donation
                can save up to three lives. Be part of something bigger than
                yourself.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://frontendraktdaan.vercel.app/login"
                  className="group relative px-8 py-4 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-200 transform hover:-translate-y-1"
                >
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    <Heart className="h-5 w-5 mr-2" />
                    Become a Donor
                  </span>
                  <div className="absolute inset-0 h-full w-full bg-white/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </a>

                <button className="group relative px-8 py-4 border-2 border-red-600 text-red-600 rounded-xl hover:bg-red-50 transition-all duration-200 transform hover:-translate-y-1">
                  <span className="relative z-10 flex items-center justify-center font-semibold">
                    <Search className="h-5 w-5 mr-2" />
                    Nearby Blood Banks
                  </span>
                </button>
              </div>

              {/* Stats */}
              <div className="mt-12 grid grid-cols-3 gap-8">
                <div className="flex flex-col">
                  <dt className="text-sm text-gray-600">Active Donors</dt>
                  <dd className="text-3xl font-bold text-gray-900">10,000+</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm text-gray-600">Lives Saved</dt>
                  <dd className="text-3xl font-bold text-gray-900">30,000+</dd>
                </div>
                <div className="flex flex-col">
                  <dt className="text-sm text-gray-600">Cities</dt>
                  <dd className="text-3xl font-bold text-gray-900">50+</dd>
                </div>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="relative lg:ml-4">
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&q=80&w=800"
                  alt="Blood Donation"
                  className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />

                {/* Floating Cards */}
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-xl animate-bounce">
                  <div className="flex items-center space-x-2">
                    <Heart className="h-5 w-5 text-red-600" />
                    <span className="font-semibold">10,000+ Lives Saved</span>
                  </div>
                </div>

                <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-xl">
                  <div className="flex items-center space-x-2">
                    <Bell className="h-5 w-5 text-red-600" />
                    <span className="font-semibold">24/7 Support</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
