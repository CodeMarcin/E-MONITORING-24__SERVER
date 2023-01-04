const express = require("express");
const router = express.Router();

const { addInvoice, findInvoiceByInvoiceNumberAndInvoiceYear } = require("../controllers/invoicesController");

router.post("/addInvoice", addInvoice);
router.get("/findInvoiceByInvoiceNumberAndInvoiceYear/:invoiceNumber/:invoiceYear", findInvoiceByInvoiceNumberAndInvoiceYear);

module.exports = router;
