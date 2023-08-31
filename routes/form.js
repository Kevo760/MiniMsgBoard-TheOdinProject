var express = require('express');
var router = express.Router();
const UserMsg = require('../server/models/message')


/* GET form page. */
router.get('/', function(req, res, next) {
  res.render('form', { title: 'Mini Msg Board | Add a Message' });
});

/* POST form page. Create new mini-message post */
router.post('/', async function(req, res, next) {
  try {
    // Create new message from form and send it to mongodb collection
    try {
      const newMsg = new UserMsg({
        user: req.body.user,
        userMsg: req.body.userMsg
      });

      await UserMsg.create(newMsg);
    } catch(err) {
      console.log(err);
    }


    res.redirect('/');
  } catch(err) {

  }
});



module.exports = router;