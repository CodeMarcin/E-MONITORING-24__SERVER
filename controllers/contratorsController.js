const asyncHandler = require("express-async-handler");
const contractorsSchema = require("../models/contractorsModel");

// GET CONTRACTOR BY NIP
const getContracorByNIP = asyncHandler(async (req, res) => {
  if (!req.params.nip) {
    res.status(400);
    throw new Error("Must specify a NIP number");
  }
  const { nip, limit } = req.params;
  const contractors = await contractorsSchema.find({ nip }, null, { limit });
  res.status(200).json(contractors);
});

// GET CONTRACTOR BY ID
const getContracorByID = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Must specify a ID number and limit");
  }
  const { id } = req.params;
  const contractor = await contractorsSchema.findById(id);
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

// DELETE CONTRACTOR BY ID
const delteContractorByID = asyncHandler(async (req, res) => {
  if (!req.params.id) {
    res.status(400);
    throw new Error("Must specify a NIP number");
  }
  const { id } = req.params;
  const deleteByID = await contractorsSchema.deleteOne({ _id: id });
  res.status(200).json(deleteByID);
});

// EDIT CONTRACTOR BY ID
const editContractorByID = asyncHandler(async (req, res) => {
  if (!req.body._id | !req.body.name || !req.body.zipcode || !req.body.address || !req.body.city || !req.body.nip) {
    res.status(400);
    throw new Error("Invalid data to () => addContracotr.");
  }
  const { _id, name, address, zipcode, city, email, nip } = req.body;
  const editedContractor = await contractorsSchema.findOneAndUpdate(
    { _id },
    {
      name,
      address,
      zipcode,
      city,
      email,
      nip,
    },
    { new: true }
  );
   res.status(200).json(editedContractor);
});
module.exports = { getContracorByNIP, getContracorByID, getAllContractors, addContractor, delteContractorByID, editContractorByID };
