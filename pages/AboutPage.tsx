
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Our Mission</h1>
            <p className="mt-4 text-xl text-gray-600">
              To empower individuals to take control of their health and wellness through accessible, personalized, and data-driven technology.
            </p>
          </div>

          <div className="mt-16 text-lg text-gray-700 space-y-6">
            <p>
              Health First was founded on a simple yet powerful belief: everyone deserves to live their healthiest life. In today's fast-paced world, managing one's health can feel overwhelming. We saw a need for a unified platform that brings together all aspects of wellness—physical, nutritional, and medical—into a single, intuitive experience.
            </p>
            <p>
              Our team is composed of passionate doctors, nutritionists, fitness experts, and software engineers dedicated to building a product that makes a real difference. We are committed to using cutting-edge technology to provide you with the most accurate tracking, personalized recommendations, and reliable medical guidance.
            </p>
            <p>
              We believe that health is a journey, not a destination. Health First is designed to be your trusted partner every step of the way, celebrating your achievements, motivating you through challenges, and connecting you with the support you need to thrive.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-pastel-green rounded-lg">
                <h3 className="text-2xl font-bold text-dark-green">1M+</h3>
                <p className="mt-2 text-gray-700">Happy Users</p>
            </div>
            <div className="p-6 bg-pastel-blue rounded-lg">
                <h3 className="text-2xl font-bold text-dark-blue">500+</h3>
                <p className="mt-2 text-gray-700">Certified Professionals</p>
            </div>
            <div className="p-6 bg-pastel-green rounded-lg">
                <h3 className="text-2xl font-bold text-dark-green">4.9/5</h3>
                <p className="mt-2 text-gray-700">App Store Rating</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
