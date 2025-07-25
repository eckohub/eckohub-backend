const express = require('express');
const router = express.Router();
const logController = require('../controllers/log.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.get('/', role(['admin']), logController.getLogs);

module.exports = router;
