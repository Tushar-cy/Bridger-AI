import React from 'react';
import { LuEye, LuPencil } from 'react-icons/lu';

export default function SmartStudyResponse({ response }) {
  if (!response) return null;
  return (
    // This is the "smart" AI message
    <div className="rounded-lg bg-gradient-to-r from-blue-600 to-cyan-500 p-5 text-white shadow-lg">
      <h3 className="text-xl font-bold">{response.headline}</h3>
      <div className="mt-4 space-y-3 border-t border-blue-400/50 pt-3">
        {response.structuredContent.map((s, i) => (
          <div key={i}>
            <div className="text-sm font-semibold uppercase tracking-wide opacity-80">{s.title}</div>
            <div className="mt-1 text-blue-50">{s.content}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex gap-2 border-t border-blue-400/50 pt-3">
        <button className="btn bg-white/20 text-white hover:bg-white/30 text-sm py-1.5 px-3 gap-2">
          <LuEye size={16} />
          Visualisation
        </button>
        <button className="btn bg-white/20 text-white hover:bg-white/30 text-sm py-1.5 px-3 gap-2">
          <LuPencil size={16} />
          Practice Qs
        </button>
      </div>
    </div>
  );
}