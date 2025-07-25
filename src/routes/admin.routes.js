const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const roleMiddleware = require('../middlewares/role.middleware');

router.get('/admin-data', authMiddleware, roleMiddleware(['admin']), (req, res) => {
  res.json({ message: 'Welcome, admin user' });
});

module.exports = router;
