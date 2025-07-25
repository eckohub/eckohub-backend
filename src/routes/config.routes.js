const express = require('express');
const router = express.Router();
const configController = require('../controllers/config.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.get('/', configController.getConfig);
router.put('/', role(['admin']), configController.updateConfig);

module.exports = router;
