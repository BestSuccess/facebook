
const mongoose=require('mongoose');
const plm= require('passport-local-mongoose')

mongoose.connect("mongodb://localhost:27017/stwt", {
useUnifiedTopology: true,
useNewUrlParser: true
});

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  tweets:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'tweet'
  }]
});
 userSchema.plugin(plm);
 





//applying the schema called userSchema on "user" collection
module.exports = mongoose.model('user', userSchema);
