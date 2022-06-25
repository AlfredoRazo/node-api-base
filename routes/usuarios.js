const express = require('express');
const router = express.Router();
const {validateRequest, existEmail} = require('../src/middlewares/validator');
const { check } = require('express-validator');
const {read,create,update,del} = require('../src/controllers/usuarios');

/* GET users listing. */
router.get('/', read);
router.post('/',[
  check('email','El correo es requerido').isEmail().normalizeEmail(),
  check('email','El correo ya se encuentra registrado').custom(existEmail), 
  check('nombre','El nombre es requerido').not().isEmpty(),
  check('primer_apellido','El primer apellido es requerido').not().isEmpty(),
  validateRequest
], create);
router.put('/', update);
router.delete('/', del);

module.exports = router;
