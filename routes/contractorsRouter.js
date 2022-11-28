const express = require("express");
const router = express.Router();
const { getContracorByNIP, getContracorByID, getAllContractors, addContractor, delteContractorByID, editContractorByID } = require("../controllers/contratorsController");

router.get("/getContracorByNIP/:nip/:limit/", getContracorByNIP);
router.get("/getContracorByID/:id/", getContracorByID);
router.get("/getAllContractors/:sortBy/:sortType/:limit", getAllContractors);
router.post("/addContractor", addContractor);
router.put("/editContractorByID", editContractorByID);
router.delete("/delteContractorByID/:id", delteContractorByID);

module.exports = router;
