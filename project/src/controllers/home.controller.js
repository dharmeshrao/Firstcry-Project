const express = require("express");

const router = express.Router();

router.get("/", async (req, res) => {
  return res.render("home.ejs", {});
});

router.get("/user/:id", async (req, res) => {
  let user = await User.findById(req.params.id);
  let name = user.name;
  return res.render("ejs/home", { name });
});

module.exports = router;
