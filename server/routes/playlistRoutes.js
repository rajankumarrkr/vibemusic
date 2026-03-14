const express = require('express');
const { createPlaylist, getUserPlaylists, addSongToPlaylist } = require('../controllers/playlistController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createPlaylist);
router.get('/user', protect, getUserPlaylists);
router.post('/add-song', protect, addSongToPlaylist);

module.exports = router;
