const Adjustment = require('../models/adjustment.model');

exports.createAdjustment = async (req, res) => {
  try {
    const adjustment = new Adjustment({ ...req.body, createdBy: req.user.id });
    await adjustment.save();
    res.status(201).json(adjustment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAdjustments = async (req, res) => {
  try {
    const adjustments = await Adjustment.find()
      .populate('warehouse')
      .populate('product');
    res.json(adjustments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAdjustmentById = async (req, res) => {
  try {
    const adjustment = await Adjustment.findById(req.params.id)
      .populate('warehouse')
      .populate('product');
    if (!adjustment) return res.status(404).json({ error: 'Adjustment not found' });
    res.json(adjustment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
