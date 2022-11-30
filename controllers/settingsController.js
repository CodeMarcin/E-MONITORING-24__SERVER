const asyncHandler = require("express-async-handler");
const settingsSchema = require("../models/settingsModel");

// GET SETTINGS
const getSettings = asyncHandler(async (req, res) => {
  const settings = await settingsSchema.findOne({});
  res.status(200).json(settings);
});

// EDIT SETTINGS
const editSettings = asyncHandler(async (req, res) => {
  if (
    !req.body._id ||
    !req.body.company.name ||
    !req.body.company.address ||
    !req.body.company.zipcode ||
    !req.body.company.city ||
    !req.body.company.email ||
    !req.body.company.nip ||
    !req.body.company.phoneNumber ||
    !req.body.company.siteAddress ||
    !req.body.company.accountNumber ||
    !req.body.company.bankName ||
    !req.body.site.accountantEmail ||
    !req.body.site.lastInvoiceNumber ||
    !req.body.site.lastInvoiceYear ||
    !req.body.site.placeOfIssue
  ) {
    res.status(400);
    throw new Error("Invalid data to () => editSettings.");
  }

  const { _id } = req.body;
  const { name, address, zipcode, city, email, nip, phoneNumber, siteAddress, accountNumber, bankName } = req.body.company;
  const { accountantEmail, lastInvoiceNumber, lastInvoiceYear, placeOfIssue } = req.body.site;

  const editedSettingsData = await settingsSchema.findByIdAndUpdate(
    { _id },
    {
      company: {
        name,
        address,
        zipcode,
        city,
        email,
        nip,
        phoneNumber,
        siteAddress,
        accountNumber,
        bankName,
      },
      site: {
        accountantEmail,
        lastInvoiceNumber,
        lastInvoiceYear,
        placeOfIssue,
      },
    },
    { new: true }
  );
  res.status(200).json(editedSettingsData);
});

module.exports = { getSettings, editSettings };
