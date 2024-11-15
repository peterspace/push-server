const mongoose = require('mongoose');

const recoverySchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      // required: true,
      ref: 'user',
    },
    //======={for verification}=============
    token: {
      type: String,
      required: true,
    },
    authId: String,
    createdAt: {
      type: Date,
      required: true,
    },
    expiresAt: {
      type: Date,
      required: true,
    },
    //======={for registration and social login}=============
    accountId: String,
    email: String,
    name: String,
    provider: String,
    // role:String,
  },
  { timestamps: true }
);

const Recovery = mongoose.model('Recovery', recoverySchema);
module.exports = Recovery;
