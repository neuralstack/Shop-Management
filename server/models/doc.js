const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const   DocSchema = new Schema({
  shop_id: { type: 'String', required: false },
  title: { type: 'String', required: true },
  path: { type: 'String', required: false }, 
  date: { type: 'String', required: false },  
 
 flag:{type:'String' ,required:false} 
 
           


});

module.exports = mongoose.model('docs', DocSchema);
