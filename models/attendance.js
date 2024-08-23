const mongoose = require('mongoose');

const attendanceSchema = new mongoose.Schema({

    sequence: { type: Number }, // ลำดับ
    full_name: { type: String }, // ชื่อ - สกุล
    type: { type: String }, // ประเภท
    branch_or_course: { type: String }, // สาขา/หลักสูตร
    required_days: { type: Number }, // จำนวนวันที่ต้องปฏิบัติงาน
    work_days: {
        worked: { type: Number }, // ลงเวลาปฏิบัติงาน
        sick_leave: { type: Number }, // ลาป่วย
        personal_leave: { type: Number }, // ลากิจ
        vacation: { type: Number }, // ลาพักผ่อน
        other_leave: { type: Number }, // ลาอื่นๆ/วันหยุดพิเศษ
        offsite_work: { type: Number }, // ปฏิบัติงานนอกพื้นที่
    },
    no_time_explanation: { type: String }, // ชี้แจงไม่ลงเวลา
    total_work_days: { type: Number }, // รวมมาทำงาน
    no_time_count: { type: Number }, // จำนวนครั้งที่ไม่ลงเวลา
    no_time_dates_without_explanation: { type: [Date] }, // วันที่ไม่ลงเวลา (ไม่มีชี้แจง)

}, { timestamps: true, versionKey: false });

module.exports = mongoose.model('attendance', attendanceSchema);
