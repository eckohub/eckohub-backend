const express = require('express');
const router = express.Router();
const adjustmentController = require('../controllers/adjustment.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), adjustmentController.createAdjustment);
router.get('/', adjustmentController.getAdjustments);
router.get('/:id', adjustmentController.getAdjustmentById);

module.exports = router;
