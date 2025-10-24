import React from 'react';

export default function SubscriptionBanner({ onSubscribe }) {
  return (
    <div className="mt-2 flex-shrink-0 rounded-lg bg-gradient-to-r from-purple-500 to-cyan-500 p-4 shadow-lg">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <div className="font-bold text-white">Unlock Smart Study Mode</div>
          <div className="text-sm text-purple-100">Structured lessons, visualisations & adaptive practice.</div>
        </div>
        <button 
          onClick={onSubscribe} 
          className="btn bg-white text-accent hover:bg-gray-100 flex-shrink-0"
        >
          Subscribe Now
        </button>
      </div>
    </div>
  );
}