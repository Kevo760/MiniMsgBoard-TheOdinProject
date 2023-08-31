var express = require('express');
var router = express.Router();
const UserMsg = require('../server/models/message')


/* GET home page. */
router.get('/', async function(req, res, next) {
  try {
    // Find userMsg data and sort createdAt by accending order
    const data = await UserMsg.find().sort({createdAt: 1})
    res.render('index', { title: 'Mini Msg Board | Home', data});
  } catch(err) {
    console.log(err)
  }
});



module.exports = router;
