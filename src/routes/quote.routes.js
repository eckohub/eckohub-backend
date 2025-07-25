const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quote.controller');
const auth = require('../middlewares/auth.middleware');
const role = require('../middlewares/role.middleware');

router.use(auth);
router.post('/', role(['admin']), quoteController.createQuote);
router.get('/', quoteController.getQuotes);
router.get('/:id', quoteController.getQuoteById);
router.patch('/:id/status', role(['admin']), quoteController.updateQuoteStatus);

module.exports = router;
