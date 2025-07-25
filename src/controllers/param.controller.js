const SystemParam = require('../models/param.model');

exports.getAllParams = async (req, res) => {
  try {
    const params = await SystemParam.find();
    res.json(params);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getParamByKey = async (req, res) => {
  try {
    const param = await SystemParam.findOne({ key: req.params.key });
    if (!param) return res.status(404).json({ error: 'Parameter not found' });
    res.json(param);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.setParam = async (req, res) => {
  try {
    const { key, value, description } = req.body;
    let param = await SystemParam.findOne({ key });
    if (!param) {
      param = new SystemParam({ key, value, description });
    } else {
      param.value = value;
      if (description) param.description = description;
    }
    await param.save();
    res.json(param);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
