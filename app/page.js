'use client';

import { useState, useEffect } from 'react';
import Banner from '@/components/Banner';
import FriendCard from '@/components/FriendCard';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function Home() {
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    total: 0,
    onTrack: 0,
    needAttention: 0,
    interactions: 0,
  });

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        // Simulate network delay for loading animation demo
        await new Promise((resolve) => setTimeout(resolve, 800));
        
        const response = await fetch('/friends.json');
        const data = await response.json();
        setFriends(data);

        // Calculate stats
        const onTrack = data.filter((f) => f.status === 'on-track').length;
        const needAttention = data.filter(
          (f) => f.status === 'overdue' || f.status === 'almost-due'
        ).length;

        setStats({
          total: data.length,
          onTrack,
          needAttention,
          interactions: 12, // This would be calculated from timeline
        });
      } catch (error) {
        console.error('Error fetching friends:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, []);

  return (
    <div className="min-h-screen">
      <Banner stats={stats} />

      {/* Friends Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">Your Friends</h2>
          <p className="text-gray-600 text-lg">Click on any friend to view details and manage interactions</p>
        </div>

        {loading ? (
          <LoadingSpinner />
        ) : friends.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <div className="text-5xl mb-4">👥</div>
            <p className="text-gray-600 text-lg font-medium">No friends yet</p>
            <p className="text-gray-500">Add one to get started!</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-max">
            {friends.map((friend) => (
              <FriendCard key={friend.id} friend={friend} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
