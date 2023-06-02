const express = require("express");
const routerWeb = express.Router();

routerWeb.post("/", async (req, res) => {
  res.status(200).json("Working...");
});
module.exports = {
  routerWeb,
};
