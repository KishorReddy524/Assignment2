const express = require('express');

const router = express.Router();

const crudController = require("./crudcontrollers");
const Product = require("../model/usermodel");
router.get("/",  async function(req, res) {
    const products = await Product.find().lean().exec();
    return res.send(products)
})
router.post("/", crudController.post(Product));
router.get("/:id", crudController.getOne(Product));
router.patch("/:id", crudController.updateOne(Product));
router.delete("/:id", crudController.deleteOne(Product));
module.exports = router;