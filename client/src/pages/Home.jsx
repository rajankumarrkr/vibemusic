import { Play, Heart, MoreHorizontal, Clock, TrendingUp, Download, X } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';
import { usePWA } from '../hooks/usePWA';
import { useState } from 'react';

const SongCard = ({ song }) => {
  const { playSong } = usePlayer();
  
  return (
    <div className="group relative glass-morphism p-4 rounded-2xl hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border-white/5">
      <div className="relative aspect-square overflow-hidden rounded-xl mb-4 shadow-2xl">
        <img 
            src={song.coverImage} 
            alt={song.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
                onClick={(e) => { e.stopPropagation(); playSong(song); }}
                className="w-12 h-12 premium-gradient rounded-full flex items-center justify-center text-white shadow-xl scale-90 group-hover:scale-100 transition-transform active:scale-90"
            >
                <Play className="w-6 h-6 fill-current ml-1" />
            </button>
        </div>
      </div>
      <h3 className="font-bold text-white truncate mb-1">{song.title}</h3>
      <p className="text-xs text-gray-500 truncate">{song.artist}</p>
    </div>
  );
};

const Home = () => {
  const { isInstallable, installPWA } = usePWA();
  const [showBanner, setShowBanner] = useState(true);

  const dummySongs = [
    { id: 1, title: 'Midnight City', artist: 'M83', coverImage: 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=300&h=300&fit=crop', audioUrl: '' },
    { id: 2, title: 'Blinding Lights', artist: 'The Weeknd', coverImage: 'https://images.unsplash.com/photo-1619983081563-430f63602796?w=300&h=300&fit=crop', audioUrl: '' },
    { id: 3, title: 'Starboy', artist: 'The Weeknd', coverImage: 'https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=300&h=300&fit=crop', audioUrl: '' },
    { id: 4, title: 'Levitating', artist: 'Dua Lipa', coverImage: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop', audioUrl: '' },
    { id: 5, title: 'Save Your Tears', artist: 'The Weeknd', coverImage: 'https://images.unsplash.com/photo-1459749411177-042180ce673c?w=300&h=300&fit=crop', audioUrl: '' },
  ];

  return (
    <div className="animate-in fade-in duration-700">
      {isInstallable && showBanner && (
        <div className="mb-8 glass-morphism p-4 rounded-3xl border-accent-purple/20 flex items-center justify-between relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent-purple/10 blur-3xl rounded-full"></div>
          <div className="flex items-center gap-4 relative z-10">
            <div className="w-12 h-12 premium-gradient rounded-xl flex items-center justify-center shadow-lg">
              <Download className="text-white w-6 h-6" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Install VIBE App</h3>
              <p className="text-sm text-gray-500">Get the full premium experience on your home screen.</p>
            </div>
          </div>
          <div className="flex items-center gap-3 relative z-10">
            <button 
                onClick={installPWA}
                className="px-6 py-2 premium-gradient text-white text-xs font-bold rounded-full shadow-lg shadow-accent-purple/20 hover:shadow-accent-purple/40 active:scale-95 transition-all"
            >
                INSTALL NOW
            </button>
            <button 
                onClick={() => setShowBanner(false)}
                className="p-2 text-gray-500 hover:text-white transition-colors"
            >
                <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      <section className="mb-10 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-accent-purple/10 blur-[100px] rounded-full -z-10"></div>
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-accent-purple/20 rounded-lg text-accent-purple">
                <TrendingUp className="w-5 h-5" />
             </div>
             <h2 className="text-2xl font-bold text-white tracking-tight">Trending Now</h2>
          </div>
          <button className="text-xs font-bold text-gray-500 hover:text-accent-purple uppercase tracking-widest transition-colors">See All</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
          {dummySongs.map(song => <SongCard key={song.id} song={song} />)}
        </div>
      </section>

      <section className="mb-10 overflow-x-auto">
        <div className="flex items-center justify-between mb-6">
           <div className="flex items-center gap-3">
             <div className="p-2 bg-accent-gold/20 rounded-lg text-accent-gold">
                <Clock className="w-5 h-5" />
             </div>
             <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight">Recently Played</h2>
          </div>
          <button className="text-xs font-bold text-gray-500 hover:text-accent-gold uppercase tracking-widest transition-colors">See All</button>
        </div>
        <div className="glass-morphism rounded-3xl overflow-hidden border-white/5 min-w-[600px] md:min-w-0">
          <table className="w-full text-left">
            <thead className="bg-white/5 text-gray-400 text-xs font-bold uppercase tracking-wider">
              <tr>
                <th className="px-6 py-4">Title</th>
                <th className="px-6 py-4">Album</th>
                <th className="px-6 py-4">Date Added</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {dummySongs.slice(0, 3).map((song, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors group cursor-pointer">
                  <td className="px-6 py-4 flex items-center gap-4">
                    <img src={song.coverImage} className="w-10 h-10 rounded-lg object-cover" />
                    <div>
                      <p className="font-bold text-white text-sm">{song.title}</p>
                      <p className="text-xs text-gray-500">{song.artist}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-400 italic">Vibe Essentials</td>
                  <td className="px-6 py-4 text-sm text-gray-500">2 days ago</td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-3 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <button className="p-2 hover:text-accent-purple"><Heart className="w-4 h-4" /></button>
                      <button className="p-2 hover:text-white"><MoreHorizontal className="w-4 h-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default Home;
