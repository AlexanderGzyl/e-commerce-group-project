const express = require('express');
const router = express.Router();
const  Products = require('../models/products')
const  Company = require('../models/companies')


  // add new endpoints here 👇

  // @method GET
  // @route products/
  // @ query page, limit
  // @desc get all products
  // _____________________________________________
  // *********************************************
  router.get('/products', (req, res) => {
    const { page = 1, limit = 10} = req.query
    Products.find()
      .limit(limit*1)
      .skip((page -1) * limit)
      .then(products => {
        res.status(200).json(
          { 
            status: 200, 
            data: products, 
            message: "success" 
          });
      })
      .catch(err => {
        res.status(err).json(
          { 
            status: err,  
            message: "error" 
          });
      })
  })
  
  // @method GET
  // @route product/:id
  // @desc get product by id
  // _____________________________________________
  // *********************************************
  router.get('/product/:prodId', (req, res) => {  
    const id = req.params.prodId;
    Products.findById(id)
    .then(data => {
        res.status(200).json(
          { 
            status: 200, 
            data: data, 
            message: "success" 
          });
      })
      .catch(err => {
        res.status(err).json(
          { 
            status: err,  
            message: "error" 
          });
      })
  })

  // @method GET
  // @route /companies
  // @desc get all companies
  // _____________________________________________
  // *********************************************
  router.get('/companies', (req, res) => {

    Company.find()
      .then(company => {
        res.status(200).json(
          { 
            status: 200, 
            data: company, 
            message: "success" 
          });
      })
      .catch(err => {
        res.status(err).json(
          { 
            status: err,  
            message: "error" 
          });
      })
  })

    // @method GET
  // @route company/:id
  // @desc get company by id
  // _____________________________________________
  // *********************************************
  router.get('/company/:id', (req, res) => {
    
    const id = req.params.id;
    Company.findById(id)
    .then(data => {
        res.status(200).json(
          { 
            status: 200, 
            data: data, 
            message: "success" 
          });
      })
      .catch(err => {
        res.status(err).json(
          { 
            status: err,  
            message: "error" 
          });
      })
  })
  

  // @method POST
  // @route purchase/
  // @desc save purchase
  // _____________________________________________
  // *********************************************
  
  // to be added


  // *******************************************************************************************************
  // add new endpoints here ☝️
  // ---------------------------------
  // Nothing to modify below this line

  // this is our catch all endpoint.
  router.get("*", (req, res) => {
    res.status(404).json({
      status: 404,
      message: "This is obviously not what you are looking for."
    });
  })


module.exports = router