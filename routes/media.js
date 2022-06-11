const express = require('express');
const router = express.Router();
const mediaCtrl = require('../controllers/mediaCtrl');


router.get('/', mediaCtrl.index);
router.get('/:id', mediaCtrl.show);


module.exports = router;