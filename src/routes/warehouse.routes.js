const express = require('express');
const router = express.Router();
const warehouseController = require('../controllers/warehouse.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), warehouseController.createWarehouse);
router.get('/', warehouseController.getWarehouses);
router.get('/:id', warehouseController.getWarehouseById);
router.put('/:id', role(['admin']), warehouseController.updateWarehouse);
router.delete('/:id', role(['admin']), warehouseController.deleteWarehouse);

module.exports = router;
