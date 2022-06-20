const express = require('express');
const router = express.Router();
const reviewCtrl = require('../controllers/reviewCtrl')


router.post('/details/:base64', reviewCtrl.create);
router.delete('/details/:base64', reviewCtrl.deleteReview)
// router.patch('/details/:base64', reviewCtrl.updateReview)

module.exports = router;