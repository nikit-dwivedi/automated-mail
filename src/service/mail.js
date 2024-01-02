const nodemailer = require('nodemailer');
const fs = require('fs')
const emailTemplate = fs.readFileSync('./template/birthday/index.html', 'utf8');
// Create a transporter object using your email service provider's SMTP settings
const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
        user: '', // Your email address
        pass: '', // Your email password or an app-specific password
    },
});


// Function to send an email
exports.sendEmail = (recipient, subject, ccList, text) => {
    const mailOptions = {
        from: '', // Sender's email address
        to: recipient.email,
        cc: ccList,
        subject: subject,
        text: text,
        html: emailTemplate.replace('{{name}}', recipient.name),
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
        } else {
            console.log('Email sent:', info.response);
        }
    });
};

// // Example usage:
// const recipient = process.argv[2]; // Get recipient email from command line argument
// const subject = 'Test Email';
// const text = 'This is a test email sent from Node.js';

// if (!recipient) {
//     console.error('Recipient email address is required.');
// } else {
//     sendEmail(recipient, subject, text);
// }
