const Joi = require('joi');


const loginSchema = Joi.object({
  nama: Joi.string().required(),
  nim: Joi.string().required(),
  NIK: Joi.number().required(),
  email: Joi.string().email().required(),
  gender: Joi.string().required(),
  tempat_lahir: Joi.string().required(),
  tanggal_lahir: Joi.date().required(),
  angkatan: Joi.number().required(),
});

module.exports = loginSchema;


