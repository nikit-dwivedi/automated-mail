const { formatEmployeeDataForCreate, formatEmployeeDataForUpdate } = require("../formatter/employee.formatter");
const Employee = require("../model/employee.model")

exports.createEmployee = async (employeeData) => {
    try {
        const formattedData = formatEmployeeDataForCreate(employeeData)
        const employee = new Employee(formattedData);
        const savedEmployee = await employee.save();
        console.log('Employee created:', savedEmployee);
        return savedEmployee;
    } catch (error) {
        console.error('Error creating employee:', error);
        throw error;
    }
}

exports.getEmployeeById = async (employeeId) => {
    try {
        const employee = await Employee.findOne({ employeeId });
        if (!employee) {
            console.log('Employee not found');
            return null;
        }
        console.log('Employee found:', employee);
        return employee;
    } catch (error) {
        console.error('Error getting employee:', error);
        throw error;
    }
}

exports.getAllEmployees = async () => {
    try {
        const employees = await Employee.find();
        console.log('All employees:', employees);
        return employees;
    } catch (error) {
        console.error('Error getting all employees:', error);
        throw error;
    }
}
exports.updateEmployee = async (employeeId, updatedData) => {
    try {
        const formattedData = formatEmployeeDataForUpdate(updatedData)

        const employee = await Employee.findOneAndUpdate(
            { employeeId },
            formattedData,
            { new: true }
        );
        if (!employee) {
            console.log('Employee not found');
            return null;
        }
        console.log('Employee updated:', employee);
        return employee;
    } catch (error) {
        console.error('Error updating employee:', error);
        throw error;
    }
}
exports.deleteEmployee = async (employeeId) => {
    try {
        const employee = await Employee.findOneAndDelete({ employeeId });
        if (!employee) {
            console.log('Employee not found');
            return null;
        }
        console.log('Employee deleted:', employee);
        return employee;
    } catch (error) {
        console.error('Error deleting employee:', error);
        throw error;
    }
}
