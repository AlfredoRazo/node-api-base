const {getTransporter} = require('../../config/mail');

const sendMailAccount = async (usuario,password) => {
    let transporter = await getTransporter();
    let info = await transporter.sendMail({
        from: '"Fred Foo 👻" <foo@example.com>',
        to: usuario.email,
        subject: "Hello ✔",
        html: `
        <h2>Hola ${usuario.nombre} ${usuario.primer_apellido}</h2><br>
        <p>Usuario:<b>${usuario.email}</b></p>
        <p>Password:<b>${password}</b></p>
        `,
    });
}

module.exports = { sendMailAccount };