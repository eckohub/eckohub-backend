const express = require('express');
const router = express.Router();
const inventoryController = require('../controllers/inventory.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), inventoryController.addInventory);
router.get('/', inventoryController.getInventories);
router.put('/:id', role(['admin']), inventoryController.updateInventory);
router.delete('/:id', role(['admin']), inventoryController.deleteInventory);

module.exports = router;
