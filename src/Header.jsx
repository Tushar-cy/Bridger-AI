import React from 'react';
import { useTheme } from './ThemeContext';
import { LuSun, LuMoon } from 'react-icons/lu';

// Custom Segmented Control for Mode
function ModeToggle({ mode, setMode }) {
  const baseStyle = "relative px-4 py-1.5 text-sm font-medium transition-colors focus:outline-none";
  const activeStyle = "text-accent-foreground";
  const inactiveStyle = "text-muted-foreground hover:text-primary";

  return (
    <div className="flex items-center rounded-full bg-secondary p-1">
      <button
        onClick={() => setMode('normal')}
        className={`${baseStyle} ${mode === 'normal' ? activeStyle : inactiveStyle}`}
      >
        {mode === 'normal' && <span className="absolute inset-0 z-0 rounded-full bg-accent mix-blend-multiply"></span>}
        <span className="relative z-10">Normal Chat</span>
      </button>
      <button
        onClick={() => setMode('smart')}
        className={`${baseStyle} ${mode === 'smart' ? activeStyle : inactiveStyle}`}
      >
        {mode === 'smart' && <span className="absolute inset-0 z-0 rounded-full bg-accent mix-blend-multiply"></span>}
        <span className="relative z-10">Smart Study</span>
      </button>
    </div>
  );
}

// Custom Theme Toggle Button
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="btn btn-ghost btn-icon flex-shrink-0"
      aria-label="Toggle theme"
    >
      {/* This is the fix: We use CSS 'dark:...' classes 
        to hide/show the correct icon based on the theme.
      */}
      <LuSun size={20} className="block dark:hidden" />
      <LuMoon size={20} className="hidden dark:block" />
    </button>
  );
}

export default function Header({ mode, setMode }) {
  return (
    <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-border px-4 md:px-6">
      {/* Title (can be dynamic based on route) */}
      <div className="font-semibold text-lg text-primary">
        Academic Study Session
      </div>
      
      {/* Controls */}
      <div className="flex items-center gap-2">
        <ModeToggle mode={mode} setMode={setMode} />
        <ThemeToggle />
      </div>
    </header>
  );
}