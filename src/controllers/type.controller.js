const Type = require('../models/type.model');

exports.createType = async (req, res) => {
  try {
    const type = new Type({ ...req.body, createdBy: req.user.id });
    await type.save();
    res.status(201).json(type);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTypes = async (req, res) => {
  try {
    const types = await Type.find();
    res.json(types);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getTypeById = async (req, res) => {
  try {
    const type = await Type.findById(req.params.id);
    if (!type) return res.status(404).json({ error: 'Type not found' });
    res.json(type);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateType = async (req, res) => {
  try {
    const type = await Type.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!type) return res.status(404).json({ error: 'Type not found' });
    res.json(type);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteType = async (req, res) => {
  try {
    const type = await Type.findByIdAndDelete(req.params.id);
    if (!type) return res.status(404).json({ error: 'Type not found' });
    res.json({ message: 'Type deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
