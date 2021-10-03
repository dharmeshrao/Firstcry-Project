const express = require ("express");

const Product = require("../models/product.model.js");

const router = express.Router();

router.post("/", async (req, res) => {
    const product = await Product.create(req.body);
    console.log("create")
    res.send({product});
  });
 

  router.get("/", async (req, res) => {
    console.log("def");
   
    const products = await Product.find().lean().exec();
    // res.send({products});
    res.render("products.ejs", {products})
    // return res.render("ejs/proucts", {products});
  });

  // Routes for categories  61544567ad3539c189464228

  router.get("/type/:id", async (req, res) => {
    console.log("req:", req.params.id);
    const products = await Product.find({ category : {$eq:`${req.params.id}`}}).lean().exec();
    // console.log({products});
      // res.send({products});
      res.render("products.ejs", {products});
    
  });

  router.get("/brand/:id", async (req, res) => {
    console.log("req:", req.params.id);
    const products = await Product.find({ brandName : {$eq:`${req.params.id}`}}).lean().exec();
    // console.log({products});
      // res.send({products});
      res.render("products.ejs", {products});
    
  });

  router.get("/sorthtol/:category/", async (req, res) => {
    const products = await Product.find().lean().exec();

    products.sort(function (a, b) {
      return (b.price * (100 - b.discount) / 100) - (a.price * (100 - a.discount) / 100)
    })
    res.render("products.ejs",{products});
  });

  router.get("/sortltoh/:category/", async (req, res) => {
    const products = await Product.find().lean().exec();

    products.sort(function (a, b) {
      return (a.price * (100 - a.discount) / 100) - (b.price * (100 - b.discount) / 100)
    })
    res.render("products.ejs",{products});
  })

  router.get("/sort/:discount/", async (req, res) => {
    const Products = await Product.find().lean().exec();

    products.sort(function (a, b) {
      return (a.discount - b.discount)
    })
    res.render("products.ejs",{products});

  })
  router.get("/type/all/", async (req, res) => {
    const products = await Product.find().lean().exec();
    // res.send({products});
    
    res.render("products.ejs", {products})
    // return res.render("ejs/proucts", {products});
  })
  
  
  
  module.exports = router;