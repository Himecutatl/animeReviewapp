const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl')


router.post('/anime/:id/reviews', reviewCtrl.create);
router.delete('/anime/:id/', reviewCtrl.deleteReview)
// router.patch('/anime/:id/reviews', reviewCtrl.updateReview)

module.exports = router;