const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const employeeSchema = new Schema({
//     employeeId: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     dateOfBirth: {
//         type: String,
//         required: true
//     },
//     dateOfJoining: {
//         type: String,
//         required: true
//     },
//     dateOfLeaving: {
//         type: String,
//         default: ""
//     },
//     email: {
//         type: String,
//         required: true
//     },
//     basicSalary: {
//         type: Number,
//         required: true
//     },
//     inTime: {
//         type: Number,
//         required: true
//     },
//     outTime: {
//         type: Number,
//         required: true
//     },
//     totalLeaveAllowed: {
//         type: Number,
//         default: 0
//     },
//     totalHalfDayAllowed: {
//         type: Number,
//         default: 0
//     },
//     department: {
//         type: String,
//         required: true
//     },
//     designation: {
//         type: String,
//         required: true
//     },
//     isWorking: {
//         type: Boolean,
//         default: true
//     }
// })
const employeeSchema = new Schema({
    employeeId: {
        type: String,
        required: true,
        unique: true
    },
    dateOfBirth: {
        type: String,
        required: true
    },
    dateOfJoining: {
        type: String,
        required: true
    },
    dateOfLeaving: {
        type: String,
        default: ""
    },
    email: {
        type: String,
        required: true
    },
})
const employeeModel = mongoose.model('employee', employeeSchema);
module.exports = employeeModel;

