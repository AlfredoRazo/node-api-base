const { response, request } = require('express');
const generator = require('generate-password');
const bcryptjs = require('bcryptjs');
const Usuario = require('../models/usuario');
const { sendMailAccount } = require('../helpers/mailer');


const read = async (req = request, res = response) => {
    try {
        const { page = 1, limit = 10 } = req.query;
        const options = {
            page,
            limit,
            collation: {
                locale: 'es',
            },
        };
        const usuario = await Usuario.paginate({}, options);
        res.json(usuario);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió algo inesperado, contacta con el administrador' });
    }
}

const create = async (req = request, res = response) => {
    try {
        const { nombre, primer_apellido, segundo_apellido, rol = 'Operador', email } = req.body;
        const password = generator.generate({
            length: 12,
            numbers: true
        });
        const usuario = new Usuario({
            nombre, primer_apellido, segundo_apellido, email, password, rol
        });
        const salt = bcryptjs.genSaltSync();
        usuario.password = bcryptjs.hashSync(password, salt);
        await usuario.save();
        try {
            await sendMailAccount(usuario, password);
        } catch (error) {
            console.log(error);
        }
        res.status(201).json({ msg: 'Se creó el usuario exitosamente' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió algo inesperado, contacta con el administrador' });
    }
}

const update = async (req = request, res = response) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió algo inesperado, contacta con el administrador' });
    }
}

const del = async (req = request, res = response) => {
    try {

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: 'Ocurrió algo inesperado, contacta con el administrador' });
    }
}

module.exports = { create, read, update, del };
