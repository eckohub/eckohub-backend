const Model = require('../models/model.model');

exports.createModel = async (req, res) => {
  try {
    const model = new Model({ ...req.body, createdBy: req.user.id });
    await model.save();
    res.status(201).json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getModels = async (req, res) => {
  try {
    const models = await Model.find().populate('brand');
    res.json(models);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getModelById = async (req, res) => {
  try {
    const model = await Model.findById(req.params.id).populate('brand');
    if (!model) return res.status(404).json({ error: 'Model not found' });
    res.json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.updateModel = async (req, res) => {
  try {
    const model = await Model.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!model) return res.status(404).json({ error: 'Model not found' });
    res.json(model);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.deleteModel = async (req, res) => {
  try {
    const model = await Model.findByIdAndDelete(req.params.id);
    if (!model) return res.status(404).json({ error: 'Model not found' });
    res.json({ message: 'Model deleted' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
