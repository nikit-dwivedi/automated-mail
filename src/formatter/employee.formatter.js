const { randomBytes } = require('node:crypto')

exports.formatEmployeeDataForCreate = (employeeData) => {
    // Add any necessary formatting logic here
    const employeeId = randomBytes(4).toString('hex')
    return {
        employeeId: employeeId,
        dateOfBirth: employeeData.dateOfBirth,
        dateOfJoining: employeeData.dateOfJoining,
        dateOfLeaving: employeeData.dateOfLeaving || "",
        email: employeeData.email,
    };
}

exports.formatEmployeeDataForUpdate = (updatedData) => {
    // Add any necessary formatting logic here
    const formattedData = {};
    if (updatedData.dateOfBirth) {
        formattedData.dateOfBirth = updatedData.dateOfBirth;
    }
    if (updatedData.dateOfJoining) {
        formattedData.dateOfJoining = updatedData.dateOfJoining;
    }
    if (updatedData.dateOfLeaving !== undefined) {
        formattedData.dateOfLeaving = updatedData.dateOfLeaving;
    }
    if (updatedData.email) {
        formattedData.email = updatedData.email;
    }
    return formattedData;
}