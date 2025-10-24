import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import ChatPage from './ChatPage';
import DashboardView from './DashboardView';
import ResourceHub from './ResourceHub';
import PeerSupport from './PeerSupport';
import PsychSupport from './PsychSupport';
import Lessons from './Lessons';
import LessonPlayer from './LessonPlayer'; // <-- Added placeholder
import { Routes, Route } from 'react-router-dom';

export default function App() {
  // Lift 'mode' state up so Header and ChatPage can share it
  const [mode, setMode] = useState('normal'); // 'normal' | 'smart'

  return (
    // Main layout container
    <div className="flex h-screen w-full bg-background text-foreground">
      {/* Sidebar */}
      <aside className="w-64 flex-shrink-0 border-r border-border bg-secondary/40">
        <Sidebar />
      </aside>

      {/* Main Content Area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Global Header */}
        <Header mode={mode} setMode={setMode} />

        {/* Page Content (scrollable) */}
        <main className="flex-1 overflow-y-auto p-4 md:p-6">
          <Routes>
            <Route path="/" element={<ChatPage mode={mode} />} />
            <Route path="/dashboard" element={<DashboardView />} />
            <Route path="/resource" element={<ResourceHub />} />
            <Route path="/peer" element={<PeerSupport />} />
            <Route path="/psych" element={<PsychSupport />} />
            <Route path="/lessons" element={<Lessons />} />
            <Route path="/lessons/:id" element={<LessonPlayer />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}