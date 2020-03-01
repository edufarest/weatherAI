var express = require('express');
var router = express.Router();

let clothes = require('../models/Clothing');


router.post('/', (req, res) => {

  if (req.body) {

    const name = req.body.name;
    const isJacket = req.body.isJacket;
    const tempFactor = req.body.tempFactor;

    clothes.create(name, isJacket, tempFactor).then((clothes) => {
      res.json(clothes);
    })
  }

  // TODO Res with failure code if no body

});

router.get('/', (req, res) => {
  res.send("")
});

module.exports = router;
