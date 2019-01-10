const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MicrochipSchema = new Schema({
  email: { type: 'String', required: false },
  name:{type: 'String', required: false},
  father_name: { type: 'String', required: false },
  cnic: { type: 'String', required: false },
  address: { type: 'String', required: false },
  role: { type: 'String', required: false },
  phone: { type: 'String', required: false },
  pic: { type: 'String', required: false }

           


});

module.exports = mongoose.model('microchip_employees', MicrochipSchema);
