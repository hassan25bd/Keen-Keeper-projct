'use client';

import Link from 'next/link';
import { AlertCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="text-center">
        {/* Icon */}
        <div className="flex justify-center mb-6">
          <AlertCircle size={64} className="text-red-500" />
        </div>

        {/* 404 Text */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>

        {/* Message */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you're looking for doesn't exist or has been moved. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/" className="btn-primary">
            Back to Home
          </Link>
          <Link href="/timeline" className="btn-secondary">
            View Timeline
          </Link>
        </div>

        {/* Illustration */}
        <div className="mt-12 text-6xl opacity-50">👥</div>
      </div>
    </div>
  );
}
