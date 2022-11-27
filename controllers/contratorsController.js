const asyncHandler = require("express-async-handler");
const contractorsSchema = require("../models/contractorsModel");

// GET CONTRACTOR BY ID
const getContracorByNIP = asyncHandler(async (req, res) => {
  if (!req.params.nip) {
    res.status(400);
    throw new Error("Must specify a NIP number");
  }
  const { nip, limit } = req.params;
  const contractor = await contractorsSchema.find({ nip }, null, { limit });
  res.status(200).json(contractor);
});

// GET ALL CONTRACTORS
const getAllContractors = asyncHandler(async (req, res) => {
  if (!req.params.sortBy || !req.params.sortType || !req.params.limit) {
    res.status(400);
    throw new Error("Must specift sortyBy, sortType and limit");
  }
  const { sortBy, sortType, limit } = req.params;
  const allContractors = await contractorsSchema.find({}, null, { sort: { [sortBy]: `${sortType}` }, limit });
  res.status(200).json(allContractors);
});

// ADD CONTRACTOR
const addContractor = asyncHandler(async (req, res) => {
  if (!req.body.name || !req.body.zipcode || !req.body.address || !req.body.city || !req.body.nip) {
    res.status(400);
    throw new Error("Invalid data to () => addContracotr.");
  }
  const { name, address, zipcode, city, email, nip } = req.body;
  const contractor = await contractorsSchema.create({
    name,
    address,
    zipcode,
    city,
    email,
    nip,
  });
  res.status(200).json(contractor);
});

const delteContractorByID = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Must specify a NIP number");
  }

  const { id } = req.params;
  const deleteByID = await contractorsSchema.deleteOne({ _id: id });
  res.status(200).json(deleteByID);
});

module.exports = { getContracorByNIP, getAllContractors, addContractor, delteContractorByID };
