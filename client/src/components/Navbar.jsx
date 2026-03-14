import React from 'react';
import { Search, Bell, User, ChevronLeft, ChevronRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { user } = useAuth();

  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-primary/80 backdrop-blur-md sticky top-0 z-40 border-b border-white/5">
      <div className="flex items-center gap-4">
        <div className="hidden sm:flex gap-2">
          <button className="p-1.5 rounded-full bg-black/40 text-gray-400 hover:text-white transition-colors">
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button className="p-1.5 rounded-full bg-black/40 text-gray-400 hover:text-white transition-colors">
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="relative group w-full sm:w-80 lg:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-4 h-4 group-focus-within:text-accent-purple transition-colors" />
          <input 
            type="text" 
            placeholder="Search..."
            className="w-full bg-secondary/50 border border-white/5 rounded-full py-1.5 md:py-2 pl-9 md:pl-10 pr-4 text-xs md:text-sm focus:outline-none focus:border-accent-purple/50 focus:bg-secondary transition-all"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
          <Bell className="w-5 h-5 text-gray-400 hover:text-white transition-colors" />
          <span className="absolute top-2 right-2 w-2 h-2 bg-accent-pink rounded-full border-2 border-primary"></span>
        </button>
        
        <div className="h-8 w-[1px] bg-white/10 mx-1"></div>
        
        <button className="flex items-center gap-2 p-1.5 rounded-full hover:bg-white/5 transition-all group">
          <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/10 overflow-hidden group-hover:border-accent-purple/50">
            {user?.profilePic ? (
                <img src={user.profilePic} alt="Profile" className="w-full h-full object-cover" />
            ) : (
                <User className="text-gray-400 w-5 h-5 group-hover:text-accent-purple transition-colors" />
            )}
          </div>
          <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors hidden sm:block">
            {user?.username || 'Profile'}
          </span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
