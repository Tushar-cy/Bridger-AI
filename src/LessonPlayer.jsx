import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function LessonPlayer() {
  const { id } = useParams();
  
  return (
    <div className="flex-1">
      <Link to="/lessons" className="text-sm text-accent hover:underline">
        &larr; Back to Lessons
      </Link>
      <h1 className="text-3xl font-bold mt-2 capitalize">Lesson: {id}</h1>
      <div className="card mt-6 h-96 p-4 flex items-center justify-center">
        <p className="text-muted-foreground">Lesson player content for "{id}" goes here.</p>
      </div>
    </div>
  );
}