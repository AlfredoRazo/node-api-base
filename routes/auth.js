const express = require('express');
const router = express.Router();
const {login} = require('../src/controllers/auth');
const {validateRequest} = require('../src/middlewares/validator');
const { check } = require('express-validator');

router.post('/login',[
    check('email','El correo es requerido').isEmail().normalizeEmail(),
    check('password','El password es requerido y minimo de 8 caracteres').isLength({min: 8}),
    validateRequest
], login);

module.exports = router;
