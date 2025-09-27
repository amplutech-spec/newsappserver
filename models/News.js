const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  article: { type: String, required: true },
  channelName: { type: String, required: true },
  state: { type: String, required: true },
  category: { type: String, required: true },
  submittedBy: { type: String, required: true },
  designation: { type: String, required: true },
  newsLink: { type: String, required: true },
  coverPhoto: { type: String } // optional image URL
}, { timestamps: true });

module.exports = mongoose.model('News', newsSchema);
