'use client';

import { useState, useMemo } from 'react';
import { useTimeline } from '@/app/context';
import { Phone, MessageCircle, Video } from 'lucide-react';

export default function TimelinePage() {
  const { timeline } = useTimeline();
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredTimeline = useMemo(() => {
    if (selectedFilter === 'all') {
      return timeline;
    }
    return timeline.filter((entry) => entry.type === selectedFilter);
  }, [timeline, selectedFilter]);

  const getCounts = () => ({
    all: timeline.length,
    call: timeline.filter((e) => e.type === 'call').length,
    text: timeline.filter((e) => e.type === 'text').length,
    video: timeline.filter((e) => e.type === 'video').length,
  });

  const counts = getCounts();

  const getTypeIcon = (type) => {
    switch (type) {
      case 'call':
        return <Phone size={28} className="text-blue-600" />;
      case 'text':
        return <MessageCircle size={28} className="text-green-600" />;
      case 'video':
        return <Video size={28} className="text-purple-600" />;
      default:
        return null;
    }
  };

  const getTypeBadgeColor = (type) => {
    switch (type) {
      case 'call':
        return 'bg-blue-100 text-blue-700';
      case 'text':
        return 'bg-green-100 text-green-700';
      case 'video':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getIconBgColor = (type) => {
    switch (type) {
      case 'call':
        return 'bg-blue-50';
      case 'text':
        return 'bg-green-50';
      case 'video':
        return 'bg-purple-50';
      default:
        return 'bg-gray-50';
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Timeline</h1>
          <p className="text-gray-600 text-lg">Your interaction history with friends</p>
        </div>

        {/* Filter Options */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-10 sticky top-20 z-40">
          <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">Filter by type</p>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedFilter === 'all'
                  ? 'bg-primary text-white shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              All
              <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">
                {counts.all}
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter('call')}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedFilter === 'call'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <Phone size={18} /> Call
              <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">
                {counts.call}
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter('text')}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedFilter === 'text'
                  ? 'bg-green-600 text-white shadow-lg scale-105'
                  : 'bg-green-50 text-green-700 hover:bg-green-100'
              }`}
            >
              <MessageCircle size={18} /> Text
              <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">
                {counts.text}
              </span>
            </button>
            <button
              onClick={() => setSelectedFilter('video')}
              className={`px-4 py-2.5 rounded-lg font-semibold transition-all duration-200 flex items-center gap-2 ${
                selectedFilter === 'video'
                  ? 'bg-purple-600 text-white shadow-lg scale-105'
                  : 'bg-purple-50 text-purple-700 hover:bg-purple-100'
              }`}
            >
              <Video size={18} /> Video
              <span className="text-xs bg-white/30 px-2 py-0.5 rounded-full font-bold">
                {counts.video}
              </span>
            </button>
          </div>
        </div>

        {/* Timeline Entries */}
        <div className="space-y-4">
          {filteredTimeline.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md p-12 text-center">
              <div className="text-5xl mb-4">📭</div>
              <p className="text-gray-700 text-lg font-semibold mb-2">
                {selectedFilter === 'all'
                  ? 'No interactions yet'
                  : `No ${selectedFilter}s yet`}
              </p>
              <p className="text-gray-500">
                {selectedFilter === 'all'
                  ? 'Visit a friend and use the Quick Check-In buttons to log interactions!'
                  : `Start logging ${selectedFilter}s to see them here.`}
              </p>
            </div>
          ) : (
            filteredTimeline.map((entry) => (
              <div
                key={entry.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-200 p-6 flex gap-5 group cursor-default"
              >
                {/* Icon Container */}
                <div className={`flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-lg ${getIconBgColor(entry.type)} group-hover:scale-110 transition-transform`}>
                  {getTypeIcon(entry.type)}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-bold text-lg text-gray-900 group-hover:text-primary transition-colors">
                        {entry.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-2">
                        📅 {new Date(entry.date).toLocaleDateString('en-US', {
                          weekday: 'short',
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric',
                        })}
                      </p>
                    </div>
                    <span className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap ${getTypeBadgeColor(entry.type)}`}>
                      {entry.type.charAt(0).toUpperCase() + entry.type.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
