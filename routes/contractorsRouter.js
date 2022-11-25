const express = require("express");
const router = express.Router();
const { getContracorByNIP, getAllContractors, addContractor } = require("../controllers/contratorsController");

router.get("/getContracorByNIP/:nip/:limit/", getContracorByNIP);
router.get("/getAllContractors", getAllContractors);
router.post("/addContractor", addContractor);

module.exports = router;
