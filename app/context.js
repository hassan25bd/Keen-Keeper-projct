'use client';

import { createContext, useContext, useState, useEffect } from 'react';

const TimelineContext = createContext();

export function TimelineProvider({ children }) {
  const [timeline, setTimeline] = useState([]);

  // Load timeline from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('timeline');
      if (saved) {
        setTimeline(JSON.parse(saved));
      }
    }
  }, []);

  // Save to localStorage whenever timeline changes
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('timeline', JSON.stringify(timeline));
    }
  }, [timeline]);

  const addTimelineEntry = (entry) => {
    setTimeline([entry, ...timeline]);
  };

  return (
    <TimelineContext.Provider value={{ timeline, addTimelineEntry }}>
      {children}
    </TimelineContext.Provider>
  );
}

export function useTimeline() {
  const context = useContext(TimelineContext);
  if (!context) {
    throw new Error('useTimeline must be used within TimelineProvider');
  }
  return context;
}
