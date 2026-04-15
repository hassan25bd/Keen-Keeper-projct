'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function FriendCard({ friend }) {
  const getStatusColor = (status) => {
    switch (status) {
      case 'overdue':
        return 'bg-red-500 hover:bg-red-600';
      case 'almost-due':
        return 'bg-yellow-500 hover:bg-yellow-600';
      case 'on-track':
        return 'bg-green-500 hover:bg-green-600';
      default:
        return 'bg-gray-500 hover:bg-gray-600';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'overdue':
        return 'Overdue';
      case 'almost-due':
        return 'Almost Due';
      case 'on-track':
        return 'On Track';
      default:
        return status;
    }
  };

  return (
    <Link href={`/friend/${friend.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 h-full flex flex-col cursor-pointer group">
        {/* Profile Picture Container */}
        <div className="flex justify-center mb-4">
          <div className="relative w-28 h-28 rounded-full overflow-hidden ring-4 ring-gray-100 group-hover:ring-primary/20 transition-all">
            <Image
              src={friend.picture}
              alt={friend.name}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-center text-gray-900 mb-1 group-hover:text-primary transition-colors">
          {friend.name}
        </h3>

        {/* Days since contact */}
        <p className="text-sm text-gray-500 text-center mb-4">
          {friend.days_since_contact}d ago
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {friend.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium badge bg-blue-100 text-blue-700 px-2.5 py-1 rounded-full capitalize hover:bg-blue-200 transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Status Badge */}
        <div className="mt-auto flex justify-center pt-2 border-t border-gray-100">
          <span
            className={`${getStatusColor(
              friend.status
            )} text-white px-4 py-1.5 rounded-full text-xs font-bold transition-colors mt-3`}
          >
            {getStatusText(friend.status)}
          </span>
        </div>
      </div>
    </Link>
  );
}
