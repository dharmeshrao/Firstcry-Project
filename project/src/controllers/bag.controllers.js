const express = require("express");
const router = express.Router();
const app =express()
app.set('view engine', 'ejs');
const Bag = require("../models/bag.model");

const User = require("../models/signup.js");

const Product = require("../models/product.model");

const {LocalStorage} = require("node-localstorage"); 

// constructor function to retrieve localStorage Items from the previously declared directory.
var localStorage = new LocalStorage('./scratch');
var userid=localStorage.getItem('Name')
//console.log localStorage item with the key Name
//console.log(userid)


router.get("/d/:userId", async (req, res) => {
  try {
    let user = await User.findById(req.params.userId);

    let bag = user.bagItems;
    if (bag.length == 0) {
     // console.log("abbae")
      return res.render("ejs/emptyBag");
    }
   
    let prodArr = [];

    let total = 0;
    let quantity = 0;
    let actualPrice = 0;

    for (let i = 0; i < bag.length; i++) {

      let product = await Product.findById(bag[i].productId);
//console.log( "a",product)
      prodArr.push([product, bag[i].quantity]);

     //console.log("ae",prodArr)
      total +=
        Math.ceil((product.price * (100 - product.discount)) / 100) *
        bag[i].quantity;
      quantity += bag[i].quantity;

      actualPrice += product.price * bag[i].quantity;
    }
//console.log("abc")
    let dis = actualPrice - total;
    //res.sendFile('home2.ejs',{root:__dirname})
return res.json( {  total, quantity, dis , "prodArr":prodArr});
  } catch (err) {
    res.send(err.message);
  }
});
router.get("/", (req, res) => {
  return res.render("cart1.ejs");
});
router.get("/userId/d", async (req, res) => {
  res.send({userid});
});
router.post('/deleteItem/', async (req, res) => {
  let { userId, prodId } = req.body;
  let user = await User.findById(userId).lean().exec();


  let bag = user.bagItems

  let newBag = bag.filter(item => {
    return item.productId != prodId
  })

  user = await User.findByIdAndUpdate(userId, { bagItems: newBag }, { new: true }).lean().exec();
  return res.json(user)

})

router.post('/removeitems/', async (req, res) => {
  let { userId } = req.body;
  let user = await User.findById(userId).lean().exec();


  user = await User.findByIdAndUpdate(userId, { bagItems: [] }, { new: true }).lean().exec();
  return res.json(user)

})

router.post("/addtoCart", async (req, res) => {
  let { userId, prodId } = req.body;
  console.log(userId)
  let user = await User.findById(userId).lean().exec();

  let bag = user.bagItems;

  for (let i = 0; i < bag.length; i++) {
    if (bag[i].productId == prodId) {
      bag[i].quantity++;
      user = await User.findByIdAndUpdate(
        userId,
        { bagItems: bag },
        { new: true }
      )
        .lean()
        .exec();

      return res.json(user);
    }
  }

  user = await User.findByIdAndUpdate(
    userId,
    { bagItems: [...bag, { productId: prodId }] },
    { new: true }
  )
    .lean()
    .exec();
  return res.json(user);
});

module.exports = router;
