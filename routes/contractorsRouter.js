const express = require("express");
const router = express.Router();
const { getContracorByNIP, getAllContractors, addContractor } = require("../controllers/contratorsController");

router.get("/getContracorByNIP/:nip/:limit/", getContracorByNIP);
router.get("/getAllContractors/:sortBy/:sortType/:limit", getAllContractors);
router.post("/addContractor", addContractor);

module.exports = router;
