import React from 'react';
import { Search as SearchIcon, Compass } from 'lucide-react';

const Search = () => {
    const genres = [
        { name: 'Pop', color: 'from-pink-500 to-rose-500' },
        { name: 'Hip Hop', color: 'from-blue-500 to-indigo-500' },
        { name: 'Rock', color: 'from-red-500 to-orange-500' },
        { name: 'Jazz', color: 'from-emerald-500 to-teal-500' },
        { name: 'Classical', color: 'from-amber-500 to-yellow-500' },
        { name: 'Electronic', color: 'from-purple-500 to-violet-500' },
    ];

  return (
    <div className="animate-in fade-in zoom-in-95 duration-500">
      <div className="relative mb-8 md:mb-12">
        <h1 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-2 md:mb-4">Explore</h1>
        <p className="text-sm md:text-base text-gray-500">Discover your next favorite track.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
        {genres.map((genre, i) => (
            <div 
                key={i} 
                className={`aspect-square rounded-3xl bg-gradient-to-br ${genre.color} p-6 relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1`}
            >
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-white/20 blur-2xl rounded-full group-hover:scale-150 transition-transform"></div>
                <h3 className="text-xl font-black text-white relative z-10">{genre.name}</h3>
                <Compass className="absolute bottom-4 right-4 text-white/20 w-16 h-16 transform rotate-12 group-hover:rotate-45 transition-transform" />
            </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
