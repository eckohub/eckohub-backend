const express = require('express');
const router = express.Router();
const typeController = require('../controllers/type.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), typeController.createType);
router.get('/', typeController.getTypes);
router.get('/:id', typeController.getTypeById);
router.put('/:id', role(['admin']), typeController.updateType);
router.delete('/:id', role(['admin']), typeController.deleteType);

module.exports = router;
