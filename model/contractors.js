const mongoose = require("mongoose");
const defaultType = { type: String, required: true, trim: true };
const contractorsSchema = mongoose.Schema(
  {
    name: {
      ...defaultType,
    },
    address: {
      ...defaultType,
    },
    zipcode: {
      ...defaultType,
    },
    city: {
      ...defaultType,
    },
    email: {
      type: String,
      trim: true,
    },
    nip: {
      ...defaultType,
    },
  },
  {
    timestamps: true,
  }
);
