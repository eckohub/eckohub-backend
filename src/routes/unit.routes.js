const express = require('express');
const router = express.Router();
const unitController = require('../controllers/unit.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), unitController.createUnit);
router.get('/', unitController.getUnits);
router.get('/:id', unitController.getUnitById);
router.put('/:id', role(['admin']), unitController.updateUnit);
router.delete('/:id', role(['admin']), unitController.deleteUnit);

module.exports = router;
