const express = require('express');
const router = express.Router();
const productController = require('../controllers/product.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), productController.createProduct);
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);
router.put('/:id', role(['admin']), productController.updateProduct);
router.delete('/:id', role(['admin']), productController.deleteProduct);

module.exports = router;
