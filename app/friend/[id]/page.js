'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, MessageCircle, Video, Clock, Calendar, Pause, Archive, Trash2 } from 'lucide-react';
import { useTimeline } from '@/app/context';
import toast from 'react-hot-toast';
import LoadingSpinner from '@/components/LoadingSpinner';

export default function FriendDetail() {
  const params = useParams();
  const [friend, setFriend] = useState(null);
  const [friends, setFriends] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addTimelineEntry } = useTimeline();

  useEffect(() => {
    const fetchFriends = async () => {
      try {
        const response = await fetch('/friends.json');
        const data = await response.json();
        setFriends(data);

        const found = data.find((f) => f.id === parseInt(params.id));
        setFriend(found);
      } catch (error) {
        console.error('Error fetching friend:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFriends();
  }, [params.id]);

  const handleQuickCheckIn = (type) => {
    if (!friend) return;

    const typeLabels = {
      call: 'Call',
      text: 'Text',
      video: 'Video',
    };

    const entry = {
      id: Date.now(),
      type,
      title: `${typeLabels[type]} with ${friend.name}`,
      date: new Date().toISOString().split('T')[0],
      friendId: friend.id,
      friendName: friend.name,
    };

    addTimelineEntry(entry);
    toast.success(`${typeLabels[type]} logged! 🎉`);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-100 text-red-700';
      case 'almost-due':
        return 'bg-yellow-100 text-yellow-700';
      case 'on-track':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  if (loading) return <LoadingSpinner />;
  if (!friend)
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-gray-600">Friend not found</p>
        <Link href="/" className="btn-primary mt-4 inline-block">
          Back to Home
        </Link>
      </div>
    );

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Back Button */}
        <Link href="/" className="text-primary hover:underline mb-6 inline-block">
          ← Back to Friends
        </Link>

        {/* Layout */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Left Column - Friend Info */}
          <div className="md:col-span-1">
            <div className="card">
              {/* Profile Picture */}
              <div className="relative w-32 h-32 rounded-full mx-auto mb-4 overflow-hidden">
                <Image
                  src={friend.picture}
                  alt={friend.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Name */}
              <h1 className="text-2xl font-bold text-center mb-2">{friend.name}</h1>

              {/* Status */}
              <div className="flex justify-center mb-4">
                <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(friend.status)}`}>
                  {friend.status === 'overdue'
                    ? 'Overdue'
                    : friend.status === 'almost-due'
                    ? 'Almost Due'
                    : 'On Track'}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 justify-center mb-4">
                {friend.tags.map((tag) => (
                  <span key={tag} className="badge bg-blue-100 text-blue-700 capitalize">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-gray-600 text-center mb-4 text-sm">{friend.bio}</p>

              {/* Email */}
              <p className="text-center text-sm text-gray-500 mb-6">
                📧 {friend.email}
              </p>

              {/* Action Buttons */}
              <div className="space-y-2">
                <button className="w-full btn-secondary flex items-center justify-center gap-2 text-sm">
                  <Pause size={16} /> Snooze 2 Weeks
                </button>
                <button className="w-full btn-secondary flex items-center justify-center gap-2 text-sm">
                  <Archive size={16} /> Archive
                </button>
                <button className="w-full text-red-600 hover:bg-red-50 px-4 py-2 rounded transition-colors flex items-center justify-center gap-2 text-sm border border-red-200">
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Stats & Quick Check-In */}
          <div className="md:col-span-2 space-y-6">
            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Days Since Contact</p>
                <p className="text-3xl font-bold text-primary">{friend.days_since_contact}</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Goal (Days)</p>
                <p className="text-3xl font-bold text-primary">{friend.goal}</p>
              </div>
              <div className="card">
                <p className="text-sm text-gray-600 mb-1">Next Due</p>
                <p className="text-lg font-bold text-primary">
                  {new Date(friend.next_due_date).toLocaleDateString('en-US', {
                    month: 'short',
                    day: 'numeric',
                  })}
                </p>
              </div>
            </div>

            {/* Relationship Goal Card */}
            <div className="card">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-bold">Relationship Goal</h3>
                <button className="text-primary hover:underline text-sm font-semibold">
                  Edit
                </button>
              </div>
              <p className="text-gray-600 mb-3">Connect every <span className="font-bold">{friend.goal} days</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-primary h-2 rounded-full transition-all"
                  style={{
                    width: `${Math.min((friend.goal - friend.days_since_contact) / friend.goal * 100, 100)}%`,
                  }}
                ></div>
              </div>
            </div>

            {/* Quick Check-In Card */}
            <div className="card">
              <h3 className="text-lg font-bold mb-4">Quick Check-In</h3>
              <div className="grid grid-cols-3 gap-4">
                <button
                  onClick={() => handleQuickCheckIn('call')}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-blue-50 rounded-lg transition-colors border border-gray-200"
                >
                  <Phone className="text-blue-600" size={28} />
                  <span className="text-sm font-semibold">Call</span>
                </button>
                <button
                  onClick={() => handleQuickCheckIn('text')}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-green-50 rounded-lg transition-colors border border-gray-200"
                >
                  <MessageCircle className="text-green-600" size={28} />
                  <span className="text-sm font-semibold">Text</span>
                </button>
                <button
                  onClick={() => handleQuickCheckIn('video')}
                  className="flex flex-col items-center justify-center gap-2 p-4 bg-gray-50 hover:bg-purple-50 rounded-lg transition-colors border border-gray-200"
                >
                  <Video className="text-purple-600" size={28} />
                  <span className="text-sm font-semibold">Video</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
