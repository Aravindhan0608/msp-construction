import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

/**
 * Shared by AboutPage and PortfolioPage. `theme` only tweaks the
 * background/text tone so it matches each page's existing palette
 * (zinc vs neutral) without needing two near-identical components.
 */
const PageNavbar = ({ theme = 'zinc' }) => {
  const bg = theme === 'neutral' ? 'bg-neutral-950/80' : 'bg-zinc-950/80';
  const textColor = theme === 'neutral' ? 'text-neutral-400' : 'text-zinc-400';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b border-white/5 ${bg} backdrop-blur-xl`}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className={`flex items-center gap-2 ${textColor} hover:text-amber-500 transition-colors font-medium group`}>
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>
        <div className="text-2xl font-bold tracking-tighter text-white">
          MSP<span className="text-amber-500">Builder's</span>
        </div>
      </div>
    </nav>
  );
};

export default PageNavbar;
