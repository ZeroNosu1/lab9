const express = require('express');

const {
    getAttendances,
    getAttendance,
    createAttendance,
    updateAttendance,
    deleteAttendance
} = require("../controllers/attendanceController");

const authenticateToken = require("../middlewares/auth");

const router = express.Router();

router.get('/attendances', authenticateToken, getAttendances);
router.get('/attendance/:id', authenticateToken, getAttendance);
router.post('/attendance', authenticateToken, createAttendance);
router.put('/attendance/:id', authenticateToken, updateAttendance);
router.delete('/attendance/:id', authenticateToken, deleteAttendance);

module.exports = router;
