import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Library, Search, Heart, PlusSquare, Music2 } from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `flex items-center gap-4 px-4 py-3 rounded-lg transition-all duration-300 group ${
        isActive 
          ? 'bg-white/10 text-accent-purple shadow-[0_0_15px_rgba(157,78,221,0.3)]' 
          : 'text-gray-400 hover:text-white hover:bg-white/5'
      }`
    }
  >
    <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
    <span className="font-medium">{label}</span>
  </NavLink>
);

const Sidebar = () => {
  return (
    <>
      {/* Desktop Sidebar */}
      <div className="hidden md:flex w-64 bg-secondary border-r border-white/5 flex-col h-full p-4">
        <div className="flex items-center gap-3 px-4 mb-10">
          <div className="w-10 h-10 premium-gradient rounded-xl flex items-center justify-center shadow-lg shadow-accent-purple/20">
            <Music2 className="text-white w-6 h-6" />
          </div>
          <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            VIBE
          </h1>
        </div>

        <nav className="flex-1 flex flex-col gap-2">
          <SidebarItem icon={Home} label="Home" to="/" />
          <SidebarItem icon={Search} label="Search" to="/search" />
          <SidebarItem icon={Library} label="Library" to="/library" />
          
          <div className="mt-8 mb-4 px-4">
            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">Your Collection</p>
          </div>
          
          <SidebarItem icon={Heart} label="Favorites" to="/favorites" />
          <SidebarItem icon={PlusSquare} label="Create Playlist" to="/create-playlist" />
        </nav>

        <div className="mt-auto p-4 glass-morphism rounded-2xl border-accent-purple/20">
          <p className="text-sm font-medium text-gray-300">Upgrade to Pro</p>
          <p className="text-xs text-gray-500 mb-3">Get unlimited skips and offline mode.</p>
          <button className="w-full py-2 premium-gradient text-white text-xs font-bold rounded-lg shadow-lg hover:shadow-accent-purple/40 transition-all active:scale-95">
            GO PREMIUM
          </button>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 h-16 bg-secondary/90 backdrop-blur-xl border-t border-white/5 flex justify-around items-center px-4 z-[60]">
        <NavLink to="/" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-accent-purple' : 'text-gray-500'}`}>
          <Home className="w-6 h-6" />
          <span className="text-[10px] font-medium">Home</span>
        </NavLink>
        <NavLink to="/search" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-accent-purple' : 'text-gray-500'}`}>
          <Search className="w-6 h-6" />
          <span className="text-[10px] font-medium">Search</span>
        </NavLink>
        <NavLink to="/library" className={({ isActive }) => `flex flex-col items-center gap-1 ${isActive ? 'text-accent-purple' : 'text-gray-500'}`}>
          <Library className="w-6 h-6" />
          <span className="text-[10px] font-medium">Library</span>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
