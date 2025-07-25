const express = require('express');
const router = express.Router();
const modelController = require('../controllers/model.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), modelController.createModel);
router.get('/', modelController.getModels);
router.get('/:id', modelController.getModelById);
router.put('/:id', role(['admin']), modelController.updateModel);
router.delete('/:id', role(['admin']), modelController.deleteModel);

module.exports = router;
