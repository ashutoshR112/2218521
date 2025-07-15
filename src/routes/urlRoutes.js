const express = require("express");
const router = express.Router();
const { createShortURL, redirectURL, getStats } = require("../services/urlService");

router.post("/shorturls", createShortURL);
router.get("/shorturls/:code", getStats);
router.get("/:code", redirectURL);

module.exports = router;