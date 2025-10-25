
import React from 'react';
import { Link } from 'react-router-dom';
import FeatureCard from '../components/FeatureCard';
import { ActivityIcon, NutritionIcon, DumbbellIcon, StethoscopeIcon } from '../components/icons/Icons';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-white pt-16 pb-20 md:pt-24 md:pb-28">
         <div className="absolute inset-0 bg-pastel-green opacity-20 transform -skew-y-3"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight">
                <span className="block">Your Health,</span>
                <span className="block text-dark-green">Our Priority.</span>
              </h1>
              <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-lg mx-auto md:mx-0">
                Take control of your well-being with personalized tracking, expert plans, and professional guidance, all in one app.
              </p>
              <div className="mt-8 flex justify-center md:justify-start gap-4">
                <Link to="/signup" className="inline-block bg-dark-green text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
                  Get Started
                </Link>
                <Link to="/features" className="inline-block bg-white text-dark-green font-semibold py-3 px-8 rounded-full shadow-lg ring-1 ring-inset ring-gray-300 hover:bg-gray-100 transition-transform transform hover:scale-105">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="mt-12 md:mt-0">
              <img src="https://picsum.photos/seed/healthapp/600/500" alt="App Mockup" className="rounded-lg shadow-2xl mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need for a Healthier Life</h2>
            <p className="mt-4 text-lg text-gray-600">Discover the core features that make Health First your perfect wellness partner.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<ActivityIcon />}
              title="Health Tracking"
              description="Monitor your vitals, sleep patterns, and daily activity levels with intuitive charts and insights."
            />
            <FeatureCard
              icon={<NutritionIcon />}
              title="Diet Plans"
              description="Get personalized meal plans from certified nutritionists tailored to your goals and preferences."
            />
            <FeatureCard
              icon={<DumbbellIcon />}
              title="Workout Monitoring"
              description="Track your exercises, set goals, and follow guided workout routines for all fitness levels."
            />
            <FeatureCard
              icon={<StethoscopeIcon />}
              title="Doctor Consultation"
              description="Connect with certified doctors for virtual consultations and get expert medical advice."
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-pastel-blue">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">Ready to Start Your Journey?</h2>
            <p className="mt-4 text-lg text-gray-700">Download Health First today and take the first step towards a better you.</p>
            <div className="mt-8">
                <Link to="/signup" className="inline-block bg-dark-green text-white font-semibold py-3 px-10 rounded-full shadow-lg hover:bg-green-700 transition-transform transform hover:scale-105">
                    Sign Up for Free
                </Link>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
