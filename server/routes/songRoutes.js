const express = require('express');
const { getAllSongs, getSongById, uploadSong } = require('../controllers/songController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/', getAllSongs);
router.get('/:id', getSongById);
router.post('/upload', protect, uploadSong);

module.exports = router;
