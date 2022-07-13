const userSchema = new mongoose.Schema({
  firstname: { type: String, default: null },
  lastname: { type: String, default: null },
  email: { type: String, unique: true },
  bein: { type: String, default: null },
  billing_method: { type: String, default: null },
  password: { type: String },
  token: { type: String },
  profile: { type: String, default: null },
  role: { type: String, default: 'VENDOR' }, //SUPERADMIN, VENDOR, STAFF
  is_verify: { type: Boolean, default: false },
  reset_password_token:{ type:String,default: null},
  token_expire_at: {type: Date,default: null}
  
}, {timestamps:true});

module.exports = mongoose.model("user", userSchema);