const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl')


router.post('/:mal_id', reviewCtrl.create);
router.delete('/:mal_id', reviewCtrl.deleteReview)
// router.patch('/details/:base64', reviewCtrl.updateReview)

module.exports = router;