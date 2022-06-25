const jwt = require('jsonwebtoken');

const generateJWT = (payload = {},expires = '12h') => {
    return new Promise((resolve, reject) => {
        jwt.sign(payload,process.env.SECRET_KEY,{
            expiresIn: expires
        }, (err, token)=> {
            if(err){
                console.log(err);
                reject('No se pudo generar el token');
            }else{
                resolve(token);
            }
        });
    });
}

module.exports = {generateJWT}