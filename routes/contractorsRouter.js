const express = require("express");
const router = express.Router();
const { getContracorByNIP, getAllContractors, addContractor, delteContractorByID } = require("../controllers/contratorsController");

router.get("/getContracorByNIP/:nip/:limit/", getContracorByNIP);
router.get("/getAllContractors/:sortBy/:sortType/:limit", getAllContractors);
router.post("/addContractor", addContractor);
router.delete("/delteContractorByID/:id", delteContractorByID);

module.exports = router;
