
import React from 'react';
import type { HealthStat, Goal } from '../types';
import { useAuth } from '../context/AuthContext';
import { ArrowUpIcon, ArrowDownIcon } from '../components/icons/Icons';

const mockStats: HealthStat[] = [
  { label: 'Heart Rate', value: '72', unit: 'bpm', change: '2%', changeType: 'decrease' },
  { label: 'Steps Today', value: '8,452', unit: 'steps', change: '15%', changeType: 'increase' },
  { label: 'Sleep', value: '7.5', unit: 'hrs', change: '5%', changeType: 'increase' },
  { label: 'Calories Burned', value: '2,103', unit: 'kcal', change: '8%', changeType: 'increase' },
];

const mockGoals: Goal[] = [
    { id: 1, title: 'Weekly Running Distance', progress: 8.2, target: 10, unit: 'km' },
    { id: 2, title: 'Mindful Minutes', progress: 45, target: 60, unit: 'min' },
    { id: 3, title: 'Water Intake', progress: 1.5, target: 2, unit: 'L' },
]

const StatCard: React.FC<HealthStat> = ({ label, value, unit, change, changeType }) => {
  const isIncrease = changeType === 'increase';
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-1 text-3xl font-semibold text-gray-900">{value} <span className="text-lg font-normal text-gray-500">{unit}</span></p>
      <div className={`mt-2 flex items-center text-sm ${isIncrease ? 'text-green-600' : 'text-red-600'}`}>
        {isIncrease ? <ArrowUpIcon className="h-4 w-4" /> : <ArrowDownIcon className="h-4 w-4" />}
        <span className="ml-1">{change} vs last week</span>
      </div>
    </div>
  );
};

const GoalProgress: React.FC<Goal> = ({ title, progress, target, unit }) => {
    const percentage = Math.round((progress / target) * 100);
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-700">{title}</span>
                <span className="text-sm text-gray-500">{progress} / {target} {unit}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-dark-green h-2.5 rounded-full" style={{ width: `${percentage}%` }}></div>
            </div>
        </div>
    );
};


const DashboardPage: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="bg-gray-100 min-h-full py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
          <p className="mt-1 text-lg text-gray-600">Here's your health summary for today.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockStats.map(stat => <StatCard key={stat.label} {...stat} />)}
        </div>

        <div className="mt-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Goals</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {mockGoals.map(goal => <GoalProgress key={goal.id} {...goal} />)}
            </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
