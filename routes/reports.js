const express = require('express');
const router=express.Router();
// getting user controller
const reportsController = require('../controllers/reports_controller');
router.get('/',reportsController.reports);
// update route for habits
router.post('/update-habit/',reportsController.updateHabit);
module.exports=router;