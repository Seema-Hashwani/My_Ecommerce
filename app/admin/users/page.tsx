'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

interface User {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  companyName?: string;
  streetAddress: string;
  townCity: string;
  postcodeZip: string;
  phoneNumber: string;
}

export default function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');

        const data = await response.json();
        setUsers(data);
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error fetching users:', error.message);
          alert('Error fetching users: ' + error.message);
        } else {
          console.error('Unexpected error:', error);
          alert('Error fetching users: An unexpected error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/users/${id}`, {
        method: 'DELETE',
      });
      
      // Check if response is JSON
      const contentType = response.headers.get('Content-Type');
      if (contentType && contentType.includes('application/json')) {
        const result = await response.json();

        if (!response.ok) throw new Error(result.error || 'Failed to delete user');

        alert(result.message || 'User deleted successfully');
        setUsers(users.filter(user => user._id !== id));
      } else {
        const text = await response.text();
        throw new Error('Unexpected response format: ' + text);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error('Error deleting user:', error.message);
        alert('Error deleting user: ' + error.message);
      } else {
        console.error('Unexpected error:', error);
        alert('Error deleting user: An unexpected error occurred');
      }
    }
  };

  return (
    <main className="flex min-h-screen w-screen flex-col items-center justify-start gap-y-10 px-24 bg-white text-black">
      <p className="text-black text-4xl font-bold underline mt-5">USERS PAGE</p>

      {loading ? (
        <p>Loading users...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
          {users.length > 0 ? (
            users.map(user => (
              <div key={user._id} className="border border-gray-300 shadow-lg p-4 rounded bg-white text-black">
                <p><strong>Email:</strong> {user.email}</p>
                <p><strong>Username:</strong> {user.username}</p>
                <p><strong>Full Name:</strong> {user.firstName} {user.lastName}</p>
                <p><strong>Company:</strong> {user.companyName || 'N/A'}</p>
                <p><strong>Address:</strong> {user.streetAddress || 'N/A'}, {user.townCity || 'N/A'}, {user.postcodeZip || 'N/A'}</p>
                <p><strong>Phone:</strong> {user.phoneNumber || 'N/A'}</p>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="bg-red-600 hover:bg-red-700 text-white p-2 mt-4 rounded"
                >
                  Delete
                </button>
              </div>
            ))
          ) : (
            <p>No users found.</p>
          )}
        </div>
      )}
    </main>
  );
}
