const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");
const cors = require("cors");
const bodyParser = require("body-parser");


const connect = require("./configs/db")
const bagController = require("./controllers/bag.controllers.js");
const signupController = require('./controllers/signup')
const loginController = require('./controllers/login')
const productController = require("./controllers/product.controller");
const productDetailsController = require("./controllers/productDetails.controller");
const homeController = require("./controllers/home.controller");

const wishlistController = require("./controllers/wishlist.controller");



app.use(express.json());
app.use(cors()); // to unblock CORS
app.use(bodyParser.json());
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(path.join(__dirname, "/public")))
app.use("/cart", bagController);
app.use("/bag", bagController);
app.use("/products", productController);
app.use("/home", homeController);
app.use('/signups',signupController)
app.use('/logins', loginController)
app.set("view engine", 'ejs');
app.use("/products2", productDetailsController);

app.listen(2345, async () => {
    await connect();
    console.log("baggg")
    console.log("server is running on port 2345")
});