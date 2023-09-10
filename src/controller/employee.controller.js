const { success, badRequest } = require('../helper/response_helper');
const {
    createEmployee,
    getEmployeeById,
    getAllEmployees,
    updateEmployee,
    deleteEmployee,
} = require('../helper/employee.helper'); // Import your CRUD functions

exports.createEmployeeRoute = async (req, res) => {
    try {
        const newEmployee = await createEmployee(req.body);
        return success(res, 'employee created')
    } catch (error) {
        return badRequest(res, error.message)
    }
}

exports.getEmployeeByIdRoute = async (req, res) => {
    try {
        const employee = await getEmployeeById(req.params.employeeId);
        if (!employee) {
            return badRequest(res, 'Employee not found')
        }
        return success(res, 'employee details', employee)

    } catch (error) {
        return badRequest(res, error.message)
    }
}

exports.getAllEmployeesRoute = async (req, res) => {
    try {
        const employees = await getAllEmployees();
        return success(res, 'employee details', employees)

    } catch (error) {
        return badRequest(res, error.message)

    }
}

exports.updateEmployeeRoute = async (req, res) => {
    try {
        const updatedEmployee = await updateEmployee(
            req.params.employeeId,
            req.body
        );
        if (!updatedEmployee) {
            return res.status(404).json({ error: 'Employee not found' });
        }
        res.json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ error: 'Error updating employee' });
    }
}

exports.deleteEmployeeRoute = async (req, res) => {
    try {
        const deletedEmployee = await deleteEmployee(req.params.employeeId);
        if (!deletedEmployee) {
            return badRequest(res, 'Employee not found')
        }
        return success(res, 'employee details', deletedEmployee)
    } catch (error) {
        return badRequest(res, error.message)
    }
}

