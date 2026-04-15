'use client';

import { useMemo } from 'react';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import { useTimeline } from '@/app/context';

export default function StatsPage() {
  const { timeline } = useTimeline();

  const chartData = useMemo(() => {
    const counts = {
      call: timeline.filter((e) => e.type === 'call').length,
      text: timeline.filter((e) => e.type === 'text').length,
      video: timeline.filter((e) => e.type === 'video').length,
    };

    return [
      { name: 'Call', value: counts.call, color: '#3b82f6' },
      { name: 'Text', value: counts.text, color: '#22c55e' },
      { name: 'Video', value: counts.video, color: '#a855f7' },
    ];
  }, [timeline]);

  const totalInteractions = timeline.length;

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Friendship Analytics</h1>
          <p className="text-gray-600">Analyze your interactions with friends</p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-gradient-to-br from-primary to-accent rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-primary-lightest text-sm mb-2 opacity-90">Total Interactions</p>
                <p className="text-5xl font-bold">{totalInteractions}</p>
              </div>
              <div className="text-4xl opacity-30">📊</div>
            </div>
            <p className="text-sm opacity-75 mt-4">All interactions tracked</p>
          </div>

          <div className="bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-blue-100 text-sm mb-2">Calls</p>
                <p className="text-5xl font-bold">{timeline.filter((e) => e.type === 'call').length}</p>
              </div>
              <div className="text-4xl">☎️</div>
            </div>
            <p className="text-sm opacity-75 mt-4">Voice interactions</p>
          </div>

          <div className="bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-green-100 text-sm mb-2">Texts</p>
                <p className="text-5xl font-bold">{timeline.filter((e) => e.type === 'text').length}</p>
              </div>
              <div className="text-4xl">💬</div>
            </div>
            <p className="text-sm opacity-75 mt-4">Message interactions</p>
          </div>

          <div className="bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg p-6 text-white">
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-purple-100 text-sm mb-2">Videos</p>
                <p className="text-5xl font-bold">{timeline.filter((e) => e.type === 'video').length}</p>
              </div>
              <div className="text-4xl">🎥</div>
            </div>
            <p className="text-sm opacity-75 mt-4">Video calls</p>
          </div>
        </div>

        {/* Chart */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">By Interaction Type</h2>
          <p className="text-gray-600 mb-8">Visual breakdown of your communication preferences</p>

          {totalInteractions === 0 ? (
            <div className="flex flex-col items-center justify-center py-16">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-gray-600 text-lg font-medium text-center mb-2">
                No interactions yet
              </p>
              <p className="text-gray-500 text-center max-w-md">
                Start logging calls, texts, and videos with your friends to see your interaction patterns here!
              </p>
            </div>
          ) : (
            <div className="w-full flex justify-center">
              <ResponsiveContainer width="100%" height={400}>
                <PieChart margin={{ top: 20, right: 80, left: 80, bottom: 20 }}>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    labelLine={true}
                    label={({ name, value, percent }) =>
                      `${name}: ${value} (${(percent * 100).toFixed(0)}%)`
                    }
                    outerRadius={130}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                    paddingAngle={2}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value) => `${value} interaction${value !== 1 ? 's' : ''}`}
                    contentStyle={{
                      backgroundColor: '#fff',
                      border: '1px solid #ccc',
                      borderRadius: '8px',
                      padding: '8px 12px'
                    }}
                  />
                  <Legend 
                    verticalAlign="bottom" 
                    height={36}
                    formatter={(value, entry) => `${entry.payload.name}: ${entry.payload.value}`}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
