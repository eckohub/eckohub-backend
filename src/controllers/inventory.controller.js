const Inventory = require('../models/inventory.model');

exports.addInventory = async (req, res) => {
  try {
    const { product, warehouse, quantity, unit } = req.body;
    const inventory = new Inventory({ product, warehouse, quantity, unit, createdBy: req.user.id });
    await inventory.save();
    res.status(201).json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getInventories = async (req, res) => {
  try {
    const inventories = await Inventory.find()
      .populate('product')
      .populate('warehouse')
      .populate('unit');
    res.json(inventories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!inventory) return res.status(404).json({ error: 'Inventory not found' });
    res.json(inventory);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteInventory = async (req, res) => {
  try {
    const inventory = await Inventory.findByIdAndDelete(req.params.id);
    if (!inventory) return res.status(404).json({ error: 'Inventory not found' });
    res.json({ message: 'Inventory deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
