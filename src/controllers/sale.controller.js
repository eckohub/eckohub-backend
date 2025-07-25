const Sale = require('../models/sale.model');

exports.createSale = async (req, res) => {
  try {
    const sale = new Sale({ ...req.body, createdBy: req.user.id });
    await sale.save();
    res.status(201).json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSales = async (req, res) => {
  try {
    const sales = await Sale.find()
      .populate('client')
      .populate('products.product')
      .populate('products.unit');
    res.json(sales);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getSaleById = async (req, res) => {
  try {
    const sale = await Sale.findById(req.params.id)
      .populate('client')
      .populate('products.product')
      .populate('products.unit');
    if (!sale) return res.status(404).json({ error: 'Sale not found' });
    res.json(sale);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
