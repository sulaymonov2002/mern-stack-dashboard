import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    min: 2,
    max: 100,
  },
  email: {
    type: String,
    required: true,
    min: 50,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 5,
  },
  cit: String,
  state: String,
  country: String,
  occupation: String,
  phoneNumber: String,
  transactions: Array,
});
