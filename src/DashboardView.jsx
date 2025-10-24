import React from 'react';
import { sampleStats as fallbackStats } from './sampleData';

// Reusable Stat Card Component
function StatCard({ title, value, subtitle, accent = false }) {
  return (
    <div className="card p-4">
      <div className={`font-semibold ${accent ? 'text-accent' : 'text-primary'}`}>
        {title}
      </div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      {subtitle && <div className="mt-1 text-sm text-muted-foreground">{subtitle}</div>}
    </div>
  );
}

export default function DashboardView({ stats }) {
  const s = stats || fallbackStats || {
    progress: '0%',
    next: 'Get started',
    activeDays: 0,
    mood: 'neutral',
    risk: 'Low',
    action: 'Begin a lesson'
  };

  return (
    <div className="flex-1">
      <h1 className="text-3xl font-bold">Progress Dashboard</h1>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard 
          title="Total Study Time" 
          value={`${s.activeDays} days`} 
          subtitle={`${s.progress} complete`} 
        />
        <StatCard 
          title="Recommended Next" 
          value={s.next} 
          subtitle="Based on your progress" 
        />
        <StatCard 
          title="Well-being" 
          value={`${s.mood} (Risk: ${s.risk})`} 
          subtitle={`Action: ${s.action}`}
          accent 
        />
      </div>
    </div>
  );
}