const asyncHandler = require("express-async-handler");
const settingsSchema = require("../models/settingsModel");

//GET COMPANY
const getCompany = asyncHandler(async (req, res) => {
  const company = await settingsSchema.findOne({}).select({
    "company.name": 1,
    "company.address": 1,
    "company.zipcode": 1,
    "company.city": 1,
    "company.email": 1,
    "company.nip": 1,
    "company.phoneNumber": 1,
    "company.siteAddress": 1,
  });
  res.status(200).json(company);
});

// GET INVOICE SETTINGS
const getInvoiceSettings = asyncHandler(async (req, res) => {
  const invoiceSettings = await settingsSchema.findOne({}).select({ "site.lastInvoiceNumber": 1, "site.lastInvoiceYear": 1, "site.placeOfIssue": 1 });
  res.status(200).json(invoiceSettings);
});

const getPaymentSettings = asyncHandler(async (req, res) => {
  const paymentSettings = await settingsSchema.findOne({}).select({ "company.accountNumber": 1, "company.bankName": 1 });
  res.status(200).json(paymentSettings);
});

module.exports = { getCompany, getInvoiceSettings, getPaymentSettings };
