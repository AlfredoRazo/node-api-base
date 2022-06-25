const nodemailer = require("nodemailer");
const getTransporter = async () => {
    //let testAccount = await nodemailer.createTestAccount();

    return nodemailer.createTransport({
        service: 'Mailgun',
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASSWORD
        }
        /*host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
            user: testAccount.user,
            pass: testAccount.pass,
        },*/
    });
}


module.exports = { getTransporter }