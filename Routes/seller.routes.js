const express = require("express");
const routerSeller = express.Router();

routerSeller.post("/", async (req, res) => {
  res.status(200).json("Working...");
});
module.exports = {
  routerSeller,
};
