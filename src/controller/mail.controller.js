const { badRequest, success } = require("../helper/response_helper");
const { sendEmail } = require("../service/mail")

exports.sendBirthdayMail = async (req, res) => {
    try {
        const recipient = { email: "nikitdwivedi1997@gmail.com", name: "nikit" }
        const subject = 'Test Email';
        const text = 'This is a test email sent from Node.js';
        sendEmail(recipient, subject, [], text)
        return success(res, 'mail send created')
    } catch (error) {
        return badRequest(res, error.message)
    }
}