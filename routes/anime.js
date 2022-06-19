const express = require('express');
const router = express.Router();
const animeCtrl = require('../controllers/animeCtrl');


router.get('/', animeCtrl.index);
router.get('/details/:id', animeCtrl.show);


module.exports = router;