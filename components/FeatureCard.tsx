import React from 'react';

interface FeatureCardProps {
  // FIX: Changed icon type from React.ReactElement to React.ReactElement<any> to allow passing a className prop via React.cloneElement, resolving a TypeScript error.
  icon: React.ReactElement<any>;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-pastel-green mb-4">
        {React.cloneElement(icon, { className: 'h-6 w-6 text-dark-green' })}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default FeatureCard;
