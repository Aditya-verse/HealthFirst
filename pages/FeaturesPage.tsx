import React from 'react';
import { ActivityIcon, NutritionIcon, DumbbellIcon, StethoscopeIcon, HeartIcon } from '../components/icons/Icons';

interface FeatureDetailProps {
  // FIX: Changed icon type from React.ReactElement to React.ReactElement<any> to allow passing a className prop via React.cloneElement, resolving a TypeScript error.
  icon: React.ReactElement<any>;
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const FeatureDetail: React.FC<FeatureDetailProps> = ({ icon, title, description, image, reverse }) => {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
      <div className="md:w-1/2">
        <img src={image} alt={title} className="rounded-lg shadow-xl" />
      </div>
      <div className="md:w-1/2">
        <div className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-pastel-green mb-4">
          {React.cloneElement(icon, { className: 'h-6 w-6 text-dark-green' })}
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="mt-4 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const FeaturesPage: React.FC = () => {
  const features = [
    {
      icon: <ActivityIcon />,
      title: 'Advanced Health Tracking',
      description: 'Go beyond simple step counting. Our app integrates with your favorite wearables to track heart rate, sleep cycles, blood oxygen, and more. Visualize your progress with detailed graphs and get actionable insights to improve your health metrics over time.',
      image: 'https://picsum.photos/seed/tracking/800/600'
    },
    {
      icon: <NutritionIcon />,
      title: 'Personalized Diet Plans',
      description: 'Say goodbye to generic meal plans. Our certified nutritionists create custom diet strategies based on your body type, fitness goals, dietary restrictions, and food preferences. Log your meals with our extensive food database and track your macros effortlessly.',
      image: 'https://picsum.photos/seed/diet/800/600',
      reverse: true
    },
    {
      icon: <DumbbellIcon />,
      title: 'Intelligent Workout Monitoring',
      description: 'Whether you\'re a beginner or a pro, our workout library has you covered. Choose from hundreds of guided workouts, create your own routines, and track your sets, reps, and weights. Our AI-powered analysis helps you optimize your form and prevent injuries.',
      image: 'https://picsum.photos/seed/workout/800/600'
    },
    {
      icon: <StethoscopeIcon />,
      title: '24/7 Doctor Consultation',
      description: 'Get peace of mind with on-demand access to certified medical professionals. Schedule secure video consultations, get prescriptions, and ask health-related questions anytime, anywhere. Your health records are stored securely and are easily accessible.',
      image: 'https://picsum.photos/seed/doctor/800/600',
      reverse: true
    }
  ];

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Transform Your Health with Powerful Features</h1>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Health First is more than an app; it's your personal wellness companion.
          </p>
        </div>
        
        <div className="space-y-24">
          {features.map((feature, index) => (
            <FeatureDetail key={index} {...feature} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesPage;
