'use client';

import { Users, TrendingUp, AlertCircle, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function Banner({ stats }) {
  const statCards = [
    {
      label: 'Total Friends',
      value: stats.total,
      icon: Users,
      color: 'bg-blue-50',
      iconColor: 'text-blue-600',
    },
    {
      label: 'On Track',
      value: stats.onTrack,
      icon: CheckCircle,
      color: 'bg-green-50',
      iconColor: 'text-green-600',
    },
    {
      label: 'Need Attention',
      value: stats.needAttention,
      icon: AlertCircle,
      color: 'bg-red-50',
      iconColor: 'text-red-600',
    },
    {
      label: 'Interactions This Month',
      value: stats.interactions,
      icon: TrendingUp,
      color: 'bg-purple-50',
      iconColor: 'text-purple-600',
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4">
        {/* Hero */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Friends to keep close in your life
          </h1>
          <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
            Your personal shelf of meaningful connections. Browse, tend, and nurture the
            relationships that matter most.
          </p>
          <Link href="/friend/new" className="btn-primary inline-block">
            <span className="flex items-center gap-2">
              <span>+</span> Add a Friend
            </span>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-4 md:gap-6">
          {statCards.map((stat) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className={`${stat.color} rounded-lg p-6 text-center`}
              >
                <div className={`${stat.iconColor} mb-3 flex justify-center`}>
                  <Icon size={32} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <p className="text-gray-600 text-sm">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
