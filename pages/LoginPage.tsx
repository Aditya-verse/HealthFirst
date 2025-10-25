
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { HeartIcon } from '../components/icons/Icons';

const LoginPage: React.FC = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (userType: 'user' | 'admin') => {
    login(userType);
    if (userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-lg">
        <div>
          <HeartIcon className="mx-auto h-12 w-auto text-dark-green" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Sign in to your account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            Or{' '}
            <Link to="/signup" className="font-medium text-dark-green hover:text-green-700">
              start your 14-day free trial
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-dark-green focus:border-dark-green focus:z-10 sm:text-sm" placeholder="Email address" defaultValue="jane.doe@example.com" />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <input id="password" name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-dark-green focus:border-dark-green focus:z-10 sm:text-sm" placeholder="Password" defaultValue="password123" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-dark-green focus:ring-medium-green border-gray-300 rounded" />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>
            <div className="text-sm">
              <a href="#" className="font-medium text-dark-green hover:text-green-700">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm text-center text-gray-500 mb-4">(This is a simulated login)</p>
            <button
              type="button"
              onClick={() => handleLogin('user')}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-dark-green hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-green"
            >
              Sign in as User
            </button>
             <button
              type="button"
              onClick={() => handleLogin('admin')}
              className="mt-3 group relative w-full flex justify-center py-2 px-4 border border-dark-blue text-sm font-medium rounded-md text-dark-blue bg-white hover:bg-pastel-blue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-dark-blue"
            >
              Sign in as Admin
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
