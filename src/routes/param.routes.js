const express = require('express');
const router = express.Router();
const paramController = require('../controllers/param.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.get('/', paramController.getAllParams);
router.get('/:key', paramController.getParamByKey);
router.post('/', role(['admin']), paramController.setParam);

module.exports = router;
