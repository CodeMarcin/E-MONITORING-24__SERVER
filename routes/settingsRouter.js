const express = require("express");
const router = express.Router();

const { getSettings, editSettings } = require("../controllers/settingsController");

router.get("/getSettings", getSettings);
router.put("/editSettings", editSettings);

module.exports = router;
