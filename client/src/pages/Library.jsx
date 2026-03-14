import React from 'react';
import { Music2, Play, Grid, List as ListIcon } from 'lucide-react';

const Library = () => {
  return (
    <div className="animate-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-black text-white tracking-tighter">Your Library</h1>
        <div className="flex items-center gap-2 bg-secondary p-1 rounded-xl border border-white/5">
          <button className="p-2 bg-white/10 rounded-lg text-white shadow-lg"><Grid className="w-4 h-4" /></button>
          <button className="p-2 text-gray-500 hover:text-white"><ListIcon className="w-4 h-4" /></button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="glass-morphism p-8 rounded-3xl border-dashed border-white/10 flex flex-col items-center justify-center gap-4 group cursor-pointer hover:border-accent-purple/40 transition-all">
          <div className="w-16 h-16 rounded-full bg-accent-purple/10 flex items-center justify-center text-accent-purple group-hover:scale-110 transition-transform">
            <Music2 className="w-8 h-8" />
          </div>
          <div className="text-center">
            <h3 className="font-bold text-white mb-1">Add New Track</h3>
            <p className="text-xs text-gray-500">Upload your favorite music</p>
          </div>
          <button className="mt-2 px-6 py-2 premium-gradient text-white text-xs font-bold rounded-full opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
            UPLOAD NOW
          </button>
        </div>
        
        {/* Placeholder for real library content */}
        <div className="col-span-1 md:col-span-2 flex flex-col items-center justify-center p-20 glass-morphism rounded-3xl border-white/5">
           <img src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-illustration-download-in-svg-png-gif-formats--state-no-items-zero-user-interface-pack-business-illustrations-4010636.png" className="w-48 mb-6 grayscale opacity-20" />
           <h3 className="text-xl font-bold text-gray-400 mb-2">No Music Found</h3>
           <p className="text-gray-600 text-sm max-w-sm text-center">Your library is currently empty. Start by adding songs or creating playlists.</p>
        </div>
      </div>
    </div>
  );
};

export default Library;
