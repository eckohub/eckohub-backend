const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brand.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), brandController.createBrand);
router.get('/', brandController.getBrands);
router.get('/:id', brandController.getBrandById);
router.put('/:id', role(['admin']), brandController.updateBrand);
router.delete('/:id', role(['admin']), brandController.deleteBrand);

module.exports = router;
