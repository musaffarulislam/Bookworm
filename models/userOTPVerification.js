const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserOTPVerificationSchema = new Schema({
    email : String,
    otp : String,
    expiresAt : Date,
})

const UserOTPVerification = mongoose.model(
    "UserOTPVerification",
    UserOTPVerificationSchema
)

module.exports = UserOTPVerification;
