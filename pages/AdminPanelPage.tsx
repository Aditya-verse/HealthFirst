
import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface MockUser {
    id: number;
    name: string;
    email: string;
    joinDate: string;
    status: 'Active' | 'Inactive';
}

const mockUsersData: MockUser[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', joinDate: '2023-01-15', status: 'Active' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', joinDate: '2023-02-20', status: 'Active' },
    { id: 3, name: 'Mike Johnson', email: 'mike@example.com', joinDate: '2023-03-10', status: 'Inactive' },
    { id: 4, name: 'Emily Brown', email: 'emily@example.com', joinDate: '2023-04-05', status: 'Active' },
    { id: 5, name: 'Chris Lee', email: 'chris@example.com', joinDate: '2023-05-12', status: 'Active' },
];


const AdminPanelPage: React.FC = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState<MockUser[]>(mockUsersData);
  
  const toggleUserStatus = (id: number) => {
    setUsers(users.map(u => u.id === id ? { ...u, status: u.status === 'Active' ? 'Inactive' : 'Active' } : u));
  };
  
  const deleteUser = (id: number) => {
    if(window.confirm('Are you sure you want to delete this user?')) {
        setUsers(users.filter(u => u.id !== id));
    }
  };


  return (
    <div className="bg-gray-100 min-h-full py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Admin Panel</h1>
          <p className="mt-1 text-lg text-gray-600">Welcome, {user?.name}. Manage your application here.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-500">Total Users</h3>
                <p className="mt-2 text-4xl font-bold text-dark-blue">{users.length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-500">Active Users</h3>
                <p className="mt-2 text-4xl font-bold text-dark-green">{users.filter(u => u.status === 'Active').length}</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-medium text-gray-500">Health Plans</h3>
                <p className="mt-2 text-4xl font-bold text-gray-800">12</p>
            </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">User Management</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Join Date</th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            <th scope="col" className="relative px-6 py-3"><span className="sr-only">Actions</span></th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {users.map((u) => (
                            <tr key={u.id}>
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{u.name}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{u.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{u.joinDate}</td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${u.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                        {u.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-2">
                                    <button onClick={() => toggleUserStatus(u.id)} className="text-indigo-600 hover:text-indigo-900">
                                        {u.status === 'Active' ? 'Deactivate' : 'Activate'}
                                    </button>
                                    <button onClick={() => deleteUser(u.id)} className="text-red-600 hover:text-red-900">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanelPage;
