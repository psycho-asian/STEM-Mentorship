import React from 'react';
import { BookOpen, Users, Trophy, Rocket, Search, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">STEMConnect</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-700 hover:text-indigo-600">Find Mentors</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Learning Paths</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Projects</a>
              <a href="#" className="text-gray-700 hover:text-indigo-600">Community</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block">Connect with STEM</span>
                  <span className="block text-indigo-600">Professionals Worldwide</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Join a global community of students and professionals. Get mentorship, career guidance, and build valuable skills through interactive learning.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                      Get Started
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                      Browse Mentors
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt="Students collaborating"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to succeed
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Users className="h-12 w-12 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Expert Mentorship</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Connect with experienced professionals in your field of interest for personalized guidance.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <BookOpen className="h-12 w-12 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Interactive Learning</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Access gamified learning modules and hands-on projects to build practical skills.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <Trophy className="h-12 w-12 text-indigo-600" />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Achievement System</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Earn badges and certificates as you complete courses and projects.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Find Your Perfect Mentor</h2>
            <p className="mt-4 text-lg text-gray-500">Search by expertise, industry, or location</p>
          </div>
          <div className="mt-8 max-w-xl mx-auto">
            <div className="mt-1 relative rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="text"
                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 pr-12 sm:text-sm border-gray-300 rounded-md h-12"
                placeholder="Search mentors..."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Global Impact Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Global Impact</h2>
            <div className="mt-10 flex flex-col sm:flex-row justify-around items-center text-center">
              <div className="mb-8 sm:mb-0">
                <Globe2 className="mx-auto h-12 w-12 text-indigo-600" />
                <p className="mt-2 text-3xl font-extrabold text-indigo-600">50+</p>
                <p className="text-gray-500">Countries</p>
              </div>
              <div className="mb-8 sm:mb-0">
                <Users className="mx-auto h-12 w-12 text-indigo-600" />
                <p className="mt-2 text-3xl font-extrabold text-indigo-600">10,000+</p>
                <p className="text-gray-500">Students</p>
              </div>
              <div>
                <Rocket className="mx-auto h-12 w-12 text-indigo-600" />
                <p className="mt-2 text-3xl font-extrabold text-indigo-600">1,000+</p>
                <p className="text-gray-500">Mentors</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-white text-sm font-semibold">Platform</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">About</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Features</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Resources</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Blog</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Documentation</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Guides</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Careers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Privacy</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Terms</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white text-sm">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 border-t border-gray-700 pt-8 flex items-center justify-between">
            <div className="flex items-center">
              <Rocket className="h-8 w-8 text-indigo-500" />
              <span className="ml-2 text-white font-bold">STEMConnect</span>
            </div>
            <p className="text-gray-400 text-sm">&copy; 2025 STEMConnect. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;