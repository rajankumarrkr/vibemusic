import React, { createContext, useState, useContext, useRef, useEffect } from 'react';

const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [queue, setQueue] = useState([]);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const audioRef = useRef(new Audio());

    useEffect(() => {
        if (currentSong) {
            audioRef.current.src = currentSong.audioUrl;
            if (isPlaying) audioRef.current.play();
        }
    }, [currentSong]);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const playSong = (song) => {
        setCurrentSong(song);
        setIsPlaying(true);
    };

    return (
        <PlayerContext.Provider value={{
            currentSong, isPlaying, togglePlay, playSong,
            progress, setProgress, volume, setVolume,
            queue, setQueue, audioRef
        }}>
            {children}
        </PlayerContext.Provider>
    );
};

export const usePlayer = () => useContext(PlayerContext);
