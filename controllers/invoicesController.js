const asyncHandler = require("express-async-handler");
const invoicesSchema = require("../models/invoiceModel");
const settingsSchema = require("../models/settingsModel");

// ADD INVOICE
const addInvoice = asyncHandler(async (req, res) => {
  const { selectedContractorId, totalValue, increasLastInvoiceNumber, company, contractor, invoiceSettings, paymentSettings, items } = req.body;
  const invoice = await invoicesSchema.create({
    selectedContractorId,
    totalValue,
    company: {
      ...company,
    },
    contractor: {
      ...contractor,
    },
    invoiceSettings: {
      ...invoiceSettings,
    },
    paymentSettings: { ...paymentSettings },
    items: [...items],
  });
  if (increasLastInvoiceNumber) await settingsSchema.findOneAndUpdate({}, { $inc: { "site.lastInvoiceNumber": 1 } });
  res.status(200).json(invoice);
});

const findInvoiceByInvoiceNumberAndInvoiceYear = asyncHandler(async (req, res) => {
  const { invoiceNumber, invoiceYear } = req.params;
  const invoice = await invoicesSchema.findOne({ "invoiceSettings.invoiceNumber": invoiceNumber, "invoiceSettings.invoiceYear": invoiceYear });

  res.status(200).json(invoice ? true : false);
});

module.exports = { addInvoice, findInvoiceByInvoiceNumberAndInvoiceYear };
