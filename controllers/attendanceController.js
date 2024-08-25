const Attendance = require('../models/attendance');

// getAttendances -- get All Attendances
exports.getAttendances = async (req, res) => {
    try {
        const attendances = await Attendance.find();
        res.status(200).json(attendances);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// getAttendance -- get Specific Attendance By Id
exports.getAttendance = async (req, res) => {
    try {
        const { id } = req.params; // เปลี่ยนจาก req.param เป็น req.params
        const attendance = await Attendance.findById(id);
        if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
        res.status(200).json(attendance);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// createAttendance -- create New Attendance
exports.createAttendance = async (req, res) => {
    const { sequence, full_name, type, branch_or_course, required_days, work_days, no_time_explanation, total_work_days, no_time_count, no_time_dates_without_explanation } = req.body;

    const attendance = new Attendance({
        sequence,
        full_name,
        type,
        branch_or_course,
        required_days,
        work_days,
        no_time_explanation,
        total_work_days,
        no_time_count,
        no_time_dates_without_explanation
    });

    try {
        const newAttendance = await attendance.save();
        res.status(201).json(newAttendance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// updateAttendance -- update Attendance by specific Id
exports.updateAttendance = async (req, res) => {
    try {
        const { id } = req.params; // เปลี่ยนจาก req.param เป็น req.params
        const data = { $set: req.body };
        const attendance = await Attendance.findByIdAndUpdate(id, data, { new: true });
        if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
        res.status(200).json(attendance);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// deleteAttendance -- delete Attendance by specific Id
exports.deleteAttendance = async (req, res) => {
    try {
        const { id } = req.params; // เปลี่ยนจาก req.param เป็น req.params
        const attendance = await Attendance.findByIdAndDelete(id);
        if (!attendance) return res.status(404).json({ message: 'Attendance not found' });
        res.status(204).json(); // ส่งสถานะ 204 No Content แทนการส่งข้อมูล
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};
