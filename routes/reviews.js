const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl')


router.post('/media/:id/reviews', reviewCtrl.create);
router.delete('/media/:id/', reviewCtrl.deleteReview)


module.exports = router;