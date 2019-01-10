const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ManagerSchema = new Schema({
  email: { type: 'String', required: false },
  name:{type: 'String', required: false},
  username: { type: 'String', required: true },
  password: { type: 'String', required: true },
  phone: { type: 'String', required: false }

           


});

module.exports = mongoose.model('managers', ManagerSchema);
