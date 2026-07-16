import React from 'react';
import SocialIcons from '../common/SocialIcons';

const Footer = () => (
  <div className="border-t border-white/10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
    <div className="text-2xl font-bold tracking-tighter text-white">
      MSP<span className="text-amber-500">Builder's</span>
    </div>

    <div className="text-zinc-500 text-sm">
      &copy; {new Date().getFullYear()} MSP Builder's. All rights reserved.
    </div>

    <SocialIcons />
  </div>
);

export default Footer;
