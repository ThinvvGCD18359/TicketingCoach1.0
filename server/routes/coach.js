const express = require('express');
const router = express.Router();
const coachController = require('../controllers/CoachController');
const authMiddleware = require('../middleware/auth-middleware');

router.get('/popular', coachController.getPopular);
router.post('/createcoach', coachController.createNewCoach);
router.post('/createroute', coachController.createNewRoute);
router.post('/addseat', coachController.addNewSeat);

router.get('/', coachController.getCoaches);

module.exports = router;