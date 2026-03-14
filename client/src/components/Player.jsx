import React, { useState, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Volume2, Maximize2, ListMusic } from 'lucide-react';
import { usePlayer } from '../context/PlayerContext';

const Player = () => {
  const { currentSong, isPlaying, togglePlay, volume, setVolume, audioRef } = usePlayer();
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    
    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration || 0);
    
    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    
    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
    };
  }, [audioRef]);

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    audioRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (time) => {
    const min = Math.floor(time / 60);
    const sec = Math.floor(time % 60);
    return `${min}:${sec < 10 ? '0' : ''}${sec}`;
  };

  return (
    <div className="fixed bottom-16 md:bottom-0 left-0 right-0 h-20 md:h-24 bg-secondary/95 backdrop-blur-xl border-t border-white/5 px-4 md:px-6 flex items-center justify-between z-50">
      {/* Song Info */}
      <div className="flex items-center gap-3 md:gap-4 w-1/2 md:w-1/3">
        <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white/5 border border-white/10 overflow-hidden shadow-lg group relative">
          {currentSong?.coverImage ? (
            <img src={currentSong.coverImage} alt="Album Art" className="w-full h-full object-cover transition-transform group-hover:scale-110" />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <ListMusic className="text-gray-600 w-5 h-5 md:w-6 md:h-6" />
            </div>
          )}
        </div>
        <div className="overflow-hidden">
          <h4 className="text-xs md:text-sm font-semibold text-white truncate max-w-[120px] md:max-w-[180px]">
            {currentSong?.title || 'No song selected'}
          </h4>
          <p className="text-[10px] md:text-xs text-gray-500 truncate max-w-[120px] md:max-w-[180px]">
            {currentSong?.artist || 'Unknown Artist'}
          </p>
        </div>
      </div>

      {/* Main Controls - Center */}
      <div className="flex flex-col items-center gap-1 md:gap-2 absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 w-auto md:w-1/3">
        <div className="flex items-center gap-4 md:gap-6">
          <button className="hidden md:block text-gray-500 hover:text-white transition-colors">
            <Shuffle className="w-4 h-4" />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <SkipBack className="w-5 h-5 fill-current" />
          </button>
          <button 
            onClick={togglePlay}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full premium-gradient flex items-center justify-center text-white shadow-lg shadow-accent-purple/30 hover:scale-105 active:scale-95 transition-all"
          >
            {isPlaying ? <Pause className="w-5 h-5 md:w-6 md:h-6 fill-current" /> : <Play className="w-5 h-5 md:w-6 md:h-6 ml-1 fill-current" />}
          </button>
          <button className="text-gray-300 hover:text-white transition-colors">
            <SkipForward className="w-5 h-5 fill-current" />
          </button>
          <button className="hidden md:block text-gray-500 hover:text-white transition-colors">
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        <div className="hidden md:flex items-center gap-3 w-full max-w-md">
          <span className="text-[10px] font-medium text-gray-500 min-w-[30px]">{formatTime(currentTime)}</span>
          <div className="flex-1 h-1 relative group cursor-pointer">
            <input 
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={currentTime}
              onChange={handleSeek}
              className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
            />
            <div className="absolute inset-0 bg-white/10 rounded-full overflow-hidden">
                <div 
                    className="h-full premium-gradient shadow-[0_0_10px_#9d4edd]" 
                    style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                ></div>
            </div>
          </div>
          <span className="text-[10px] font-medium text-gray-500 min-w-[30px]">{formatTime(duration)}</span>
        </div>
      </div>

      {/* Extra Controls - Desktop only */}
      <div className="hidden md:flex items-center justify-end gap-4 w-1/3">
        <div className="flex items-center gap-2 group w-32">
          <Volume2 className="w-4 h-4 text-gray-400" />
          <div className="flex-1 h-1 bg-white/10 rounded-full relative overflow-hidden group-hover:h-1.5 transition-all">
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.01" 
              value={volume}
              onChange={(e) => setVolume(parseFloat(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 z-10 cursor-pointer"
            />
            <div 
                className="h-full bg-white/60 group-hover:bg-accent-purple" 
                style={{ width: `${volume * 100}%` }}
            ></div>
          </div>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <Maximize2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default Player;
