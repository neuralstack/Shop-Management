const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ShopSchema = new Schema({
  email: { type: 'String', required: false },
  username: { type: 'String', required: false },
  password: { type: 'String', required: false },
  phone: { type: 'String', required: false },
  name: { type: 'String', required: false },
  shop_number:{ type: 'String', required: false},
  owner_name : {type: 'String' , required :false},
  cnic:{type: 'String' , required :false},
 employee_list:{type:'String' ,required:false},
 manager_ref:{type:'String' ,required:false},
 manager_ref_id:{type:'String' ,required:false},
 approved_flag:{type:'String',required:false} ,
 last_paid:{type:'String',required:false}
 
           


});

module.exports = mongoose.model('shops', ShopSchema);
