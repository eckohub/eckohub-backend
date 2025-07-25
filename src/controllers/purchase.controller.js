const Purchase = require('../models/purchase.model');

exports.createPurchase = async (req, res) => {
  try {
    const purchase = new Purchase({ ...req.body, createdBy: req.user.id });
    await purchase.save();
    res.status(201).json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPurchases = async (req, res) => {
  try {
    const purchases = await Purchase.find()
      .populate('supplier')
      .populate('products.product')
      .populate('products.unit');
    res.json(purchases);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getPurchaseById = async (req, res) => {
  try {
    const purchase = await Purchase.findById(req.params.id)
      .populate('supplier')
      .populate('products.product')
      .populate('products.unit');
    if (!purchase) return res.status(404).json({ error: 'Purchase not found' });
    res.json(purchase);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
