const express = require('express');
const router = express.Router();
const animeCtrl = require('../controllers/animeCtrl');


router.get('/', animeCtrl.index);
router.get('/details/:base64', animeCtrl.show);


module.exports = router;