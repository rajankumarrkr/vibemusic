const Playlist = require('../models/Playlist');

const createPlaylist = async (req, res) => {
    try {
        const { name, description, coverImage } = req.body;
        const playlist = new Playlist({
            name, description, coverImage,
            owner: req.user._id
        });
        await playlist.save();
        res.status(201).json(playlist);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const getUserPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.find({ owner: req.user._id }).populate('songs');
        res.json(playlists);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addSongToPlaylist = async (req, res) => {
    try {
        const { playlistId, songId } = req.body;
        const playlist = await Playlist.findById(playlistId);
        if (!playlist || playlist.owner.toString() !== req.user._id.toString()) {
            return res.status(403).json({ message: 'Unauthorized' });
        }
        if (!playlist.songs.includes(songId)) {
            playlist.songs.push(songId);
            await playlist.save();
        }
        res.json(playlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createPlaylist, getUserPlaylists, addSongToPlaylist };
