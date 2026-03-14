const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    title: { type: String, required: true },
    artist: { type: String, required: true },
    album: { type: String, default: 'Unknown Album' },
    genre: { type: String, default: 'Unknown Genre' },
    coverImage: { type: String, required: true },
    audioUrl: { type: String, required: true },
    duration: { type: Number, default: 0 },
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
}, { timestamps: true });

module.exports = mongoose.model('Song', songSchema);
