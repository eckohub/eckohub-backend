const Quote = require('../models/quote.model');

exports.createQuote = async (req, res) => {
  try {
    const quote = new Quote({ ...req.body, createdBy: req.user.id });
    await quote.save();
    res.status(201).json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuotes = async (req, res) => {
  try {
    const quotes = await Quote.find()
      .populate('client')
      .populate('products.product')
      .populate('products.unit');
    res.json(quotes);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getQuoteById = async (req, res) => {
  try {
    const quote = await Quote.findById(req.params.id)
      .populate('client')
      .populate('products.product')
      .populate('products.unit');
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    res.json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateQuoteStatus = async (req, res) => {
  try {
    const quote = await Quote.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    if (!quote) return res.status(404).json({ error: 'Quote not found' });
    res.json(quote);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
