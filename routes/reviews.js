const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl')


router.post('/details/:id/', reviewCtrl.create);
router.delete('/:id/', reviewCtrl.deleteReview)
// router.patch('/anime/:id/reviews', reviewCtrl.updateReview)

module.exports = router;