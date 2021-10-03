const express = require ("express");

const Product = require("../models/product.model.js");

const router = express.Router();
console.log("random");

router.get("/:id", async (req, res) => {
    try {
      const el = await Product.findById(req.params.id).lean().exec();
      console.log(el);
      return res.render("../views/productDetails", {
        el
      });
    } catch (error) {
      res.send(error.message);
    }
  });

  module.exports = router;