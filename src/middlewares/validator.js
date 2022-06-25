const { validationResult } = require('express-validator');
const Usuario = require('../models/usuario');

const validateRequest = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json(errors);
    }
    next();
}

const existEmail = async (email = '') => {
    const existeEmail = await Usuario.findOne({email});
    if (existeEmail) {
        throw new Error(`El correo ${email} ya está registrado'`);
    }
}

module.exports = {
    existEmail,
    validateRequest
}