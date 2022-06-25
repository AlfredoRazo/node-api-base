const { response, request } = require('express');

const create = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Ocurrió algo inesperado, contacta con el administrador'});
    }
}
const read = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Ocurrió algo inesperado, contacta con el administrador'});
    }

}
const update = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Ocurrió algo inesperado, contacta con el administrador'});
    }

}
const del = async (req = request, res = response) => {
    try {
        
    } catch (error) {
        console.log(error);
        res.status(500).json({msg: 'Ocurrió algo inesperado, contacta con el administrador'});
    }

}
module.exports = {create,read,update,del};
