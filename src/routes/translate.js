const express = require('express');
const router = express.Router();
const controller = require('../controllers/translateController');
const authMiddleware = require('../middleware/auth');

router.post('/', authMiddleware, controller.translate);

module.exports = router;
