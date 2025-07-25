const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), clientController.createClient);
router.get('/', clientController.getClients);
router.get('/:id', clientController.getClientById);
router.put('/:id', role(['admin']), clientController.updateClient);
router.delete('/:id', role(['admin']), clientController.deleteClient);

module.exports = router;
