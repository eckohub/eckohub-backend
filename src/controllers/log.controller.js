const Log = require('../models/log.model');

exports.getLogs = async (req, res) => {
  try {
    const logs = await Log.find().populate('user', 'name email');
    res.json(logs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLog = async (action, details, userId, ip) => {
  try {
    const log = new Log({
      action,
      details,
      user: userId,
      ip
    });
    await log.save();
  } catch (error) {
    console.error('Error creating log:', error.message);
  }
};
