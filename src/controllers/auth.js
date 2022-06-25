const { response, request } = require('express');
const Usuario = require('../models/usuario');
const bcryptjs = require('bcryptjs');
const {generateJWT} = require('../helpers/jwt');
const login = async (req = request, res = response) =>{
    const { correo, password } = req.body;
    try {
        const usuario = await Usuario.findOne({ correo });
        if (!usuario) {
            return res.status(400).json({
                msg: 'El usuario / password no es correcto'
            });
        }
        if (!usuario.status) {
            return res.status(400).json({
                msg: 'El usuario / password no es correcto'
            });
        }
        const validPassword = bcryptjs.compareSync(password, usuario.password);
        if (!validPassword) {
            return res.status(400).json({
                msg: 'El usuario / password no es correcto'
            });
        }
        const token = await generateJWT({uid: usuario.id});
        res.json({
            token,
            usuario
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            msg: 'Ocurrio algo inesperado, contacte con su administrador'
        });
    }
}
const changePassword = async (req = request, res = response) =>{
}
const rememberPassword = async (req = request, res = response) =>{
}
module.exports = {login,changePassword,rememberPassword}