const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  title: { type: 'String', required: true },
  detail: { type: 'String', required: false },
  date: { type: 'String', required: false },
  from:{type: 'String', required: false},  
  to:{type: 'String', required: false},  
 flag:{type:'String' ,required:false} 
 
           


});

module.exports = mongoose.model('notifications', NotificationSchema);
