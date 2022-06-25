const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const validateToken = async (req = request, res = response, next) => {
    const token = req.header('Authorization');
    if(!token){
        return res.status(401).json({
            msg: "Sin autenticación, el token es requerido"
        });
    }
    try {
        const {uid} = jwt.verify(token,process.env.SECRET_KEY);
        /*const usuario = await Usuario.findById(uid);
        if(!usuario){
            return res.status(401).json({
                msg: 'Token no valido - usuario no existe en BD'
            })
        }
        if(!usuario.estado){
            return res.status(401).json({
                msg: 'Token no valido - usuario con estado false'
            })
        }
        req.usuario = usuario;*/
        next();
    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido'
        })
    }
}

exports.module = {validateToken}