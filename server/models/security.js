const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SecuritySchema = new Schema({
  shop_id: { type: 'String', required: false },
  cnic:{type: 'String', required: false},
  address: { type: 'String', required: false },
  name: { type: 'String', required: false }

           


});

module.exports = mongoose.model('security_forms', SecuritySchema);
