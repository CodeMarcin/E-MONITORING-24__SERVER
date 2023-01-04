const mongoose = require("mongoose");
const invoicesSchema = mongoose.Schema(
  {
    selectedContractorId: {
      type: String,
      trim: true,
    },
    totalValue: {
      type: Number,
      require: true,
      trim: true,
    },
    company: {
      address: {
        type: String,
        require: true,
        trim: true,
      },
      city: {
        type: String,
        require: true,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        require: true,
        trim: true,
      },
      nip: {
        type: String,
        require: true,
        trim: true,
      },
      phoneNumber: {
        type: String,
        trim: true,
      },
      siteAddress: {
        type: String,
        trim: true,
      },
      zipcode: {
        type: String,
        trim: true,
      },
    },
    contractor: {
      address: {
        type: String,
        require: true,
        trim: true,
      },
      city: {
        type: String,
        require: true,
        trim: true,
      },
      email: {
        type: String,
        trim: true,
      },
      name: {
        type: String,
        require: true,
        trim: true,
      },
      nip: {
        type: String,
        require: true,
        trim: true,
      },
      zipcode: {
        type: String,
        require: true,
        trim: true,
      },
    },
    invoiceSettings: {
      dateOfIssue: {
        type: String,
        require: true,
        trim: true,
      },
      invoiceNumber: {
        type: Number,
        require: true,
        trim: true,
      },
      invoiceYear: {
        type: Number,
        require: true,
        trim: true,
      },
      placeOfIssue: {
        type: String,
        require: true,
        trim: true,
      },
    },
    items: [
      {
        name: {
          type: String,
          require: true,
          trim: true,
        },
        price: {
          type: String,
          require: true,
          trim: true,
        },
        quantity: {
          type: String,
          require: true,
          trim: true,
        },
        standard: {
          type: String,
          require: true,
          trim: true,
        },
        totalPrice: {
          type: Number,
          require: true,
          trim: true,
        },
      },
    ],
    paymentSettings: {
      accountNumber: {
        type: String,
        require: true,
        trim: true,
      },
      bankName: {
        type: String,
        require: true,
        trim: true,
      },
      dateOfPayment: {
        type: String,
        require: true,
        trim: true,
      },
      daysOfPayment: {
        type: String,
        require: true,
        trim: true,
      },
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("invoices", invoicesSchema);
