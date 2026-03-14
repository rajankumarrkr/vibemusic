const Song = require('../models/Song');

const getAllSongs = async (req, res) => {
    try {
        const songs = await Song.find().populate('uploadedBy', 'username');
        res.json(songs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getSongById = async (req, res) => {
    try {
        const song = await Song.findById(req.params.id);
        if (song) {
            res.json(song);
        } else {
            res.status(404).json({ message: 'Song not found' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const uploadSong = async (req, res) => {
    try {
        const { title, artist, album, genre, coverImage, audioUrl, duration } = req.body;
        const song = new Song({
            title, artist, album, genre, coverImage, audioUrl, duration,
            uploadedBy: req.user._id
        });
        await song.save();
        res.status(201).json(song);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getAllSongs, getSongById, uploadSong };
