const express = require('express');
const router = express.Router();
const {
    createEmployeeRoute,
    getEmployeeByIdRoute,
    getAllEmployeesRoute,
    updateEmployeeRoute,
    deleteEmployeeRoute,
} = require('../controller/employee.controller'); // Import your controller functions

// Create an employee
router.post('/employees', createEmployeeRoute);

// Get an employee by ID
router.get('/employees/:employeeId', getEmployeeByIdRoute);

// Get all employees
router.get('/employees', getAllEmployeesRoute);

// Update an employee
router.put('/employees/:employeeId', updateEmployeeRoute);

// Delete an employee
router.delete('/employees/:employeeId', deleteEmployeeRoute);

module.exports = router;
