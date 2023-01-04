const express = require("express");
const router = express.Router();

const { getCompany, getInvoiceSettings, getPaymentSettings } = require("../controllers/companyController");

router.get("/getCompany", getCompany);
router.get("/getInvoiceSettings", getInvoiceSettings);
router.get("/getPaymentSettings", getPaymentSettings);

module.exports = router;
