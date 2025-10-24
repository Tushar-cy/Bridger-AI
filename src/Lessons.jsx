import React from 'react';
import { Link } from 'react-router-dom';
import { sampleLessons } from './sampleData';

export default function Lessons() {
  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold">Lessons</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {sampleLessons.map(l => (
          <Link
            to={`/lessons/${l.id}`}
            key={l.id}
            className="card p-4 transition-all hover:shadow-lg hover:border-accent"
          >
            <div className="font-semibold text-primary">{l.title}</div>
            <div className="mt-2 text-sm text-muted-foreground">{l.summary}</div>
          </Link>
        ))}
      </div>
    </div>
  );
}