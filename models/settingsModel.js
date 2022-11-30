const mongoose = require("mongoose");
const settingsSchema = mongoose.Schema(
  {
    company: {
      name: {
        type: String,
        required: true,
        trim: true,
      },
      address: {
        type: String,
        required: true,
        trim: true,
      },
      zipcode: {
        type: String,
        required: true,
        trim: true,
      },
      city: {
        type: String,
        required: true,
        trim: true,
      },
      email: {
        type: String,
        required: false,
        trim: true,
      },
      nip: {
        type: String,
        required: true,
        trim: true,
      },
      accountNumber: {
        type: String,
        required: true,
        trim: true,
      },
      bankName: {
        type: String,
        required: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        required: true,
        trim: true,
      },
      siteAddress: {
        type: String,
        required: true,
        trim: true,
      },
    },
    site: {
      accountantEmail: {
        type: String,
        required: true,
        trim: true,
      },
      lastInvoiceNumber: {
        type: Number,
        required: true,
        trim: true,
      },
      lastInvoiceYear: {
        type: Number,
        required: true,
        trim: true,
      },
      placeOfIssue: {
        type: String,
        required: false,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("settings", settingsSchema);
