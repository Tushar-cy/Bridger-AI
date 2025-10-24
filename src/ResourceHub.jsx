import React from 'react';
import { LuBook, LuMic, LuFilm, LuLanguages } from 'react-icons/lu';

function ResourceCard({ title, icon }) {
  return (
    <div className="card flex items-center gap-4 p-4">
      <div className="text-accent">{icon}</div>
      <div className="font-semibold">{title}</div>
    </div>
  );
}

export default function ResourceHub() {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold">Resource Hub</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <ResourceCard title="Science Articles" icon={<LuBook size={24} />} />
        <ResourceCard title="Wellness Audios" icon={<LuMic size={24} />} />
        <ResourceCard title="Short Visualizations" icon={<LuFilm size={24} />} />
        <ResourceCard title="Language Packs" icon={<LuLanguages size={24} />} />
      </div>
    </div>
  );
}