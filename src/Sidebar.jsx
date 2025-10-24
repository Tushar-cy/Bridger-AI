import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  LuSearch, LuPlus, LuLayoutDashboard, LuBrain, 
  LuBookOpen, LuUsers, LuMessageSquare, LuHeartPulse, LuSparkles
} from 'react-icons/lu'; // Using react-icons

// Single Nav Item Component
function NavItem({ to, icon, label }) {
  const location = useLocation();
  const isActive = location.pathname === to;
  
  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all 
        hover:text-primary hover:bg-secondary
        ${isActive ? 'bg-secondary text-primary font-medium' : ''}
      `}
    >
      {icon}
      {label}
    </Link>
  );
}

export default function Sidebar() {
  const navigate = useNavigate();

  const nav = [
    { to: '/dashboard', label: 'Dashboard', icon: <LuLayoutDashboard size={18} /> },
    { to: '/psych', label: 'Well-being', icon: <LuHeartPulse size={18} /> },
    { to: '/resource', label: 'Resource Hub', icon: <LuBookOpen size={18} /> },
    { to: '/peer', label: 'Peer Support', icon: <LuUsers size={18} /> },
    { to: '/lessons', label: 'Lessons', icon: <LuBrain size={18} /> },
  ];

  return (
    <div className="flex h-full flex-col p-4 gap-4">
      {/* Brand/Logo */}
      <div className="flex items-center gap-2 px-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground font-bold">
          BR
        </div>
        <div>
          <div className="font-bold text-primary">Bridge AI</div>
          <div className="text-xs text-muted-foreground">Adaptive Tutor</div>
        </div>
      </div>

      {/* New Chat Button (Your Request) */}
      <button
        onClick={() => navigate('/')}
        className="btn btn-primary w-full gap-2"
      >
        <LuPlus size={18} />
        New Study Session
      </button>

      {/* Search */}
      <div className="relative">
        <LuSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
        <input
          placeholder="Search chats..."
          className="w-full rounded-lg border bg-background py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent"
        />
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1">
        {/* Main "Chat" link, often separated */}
        <NavItem to="/" icon={<LuMessageSquare size={18} />} label="Chat" />
        <hr className="my-2 border-border" />
        {nav.map(item => <NavItem key={item.to} {...item} />)}
      </nav>

      {/* Footer / Subscription */}
      <div className="mt-auto flex flex-col gap-3">
         <div className="card p-3 text-center">
            <LuSparkles className="mx-auto mb-2 text-accent" size={24} />
            <div className="text-sm font-semibold">Smart Study Mode</div>
            <div className="text-xs text-muted-foreground mb-3">Visuals, quizzes & more.</div>
            <button className="btn btn-primary btn-sm w-full text-xs">
              Subscribe • Unlock
            </button>
         </div>
      </div>
    </div>
  );
}