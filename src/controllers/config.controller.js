const BusinessConfig = require('../models/config.model');

exports.getConfig = async (req, res) => {
  try {
    const config = await BusinessConfig.findOne();
    res.json(config);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateConfig = async (req, res) => {
  try {
    let config = await BusinessConfig.findOne();
    if (!config) {
      config = new BusinessConfig(req.body);
    } else {
      Object.assign(config, req.body);
    }
    await config.save();
    res.json(config);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
