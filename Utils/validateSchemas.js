import Joi from "joi";

export const schemaEmail = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .empty()
    .messages({
      "string.empty": "El campo email no puede estar vacio",
      "string.email": "El campo email no es un email valido",
    }),
});

export const schemaPassword = Joi.object({
  password: Joi.string().empty().min(6).max(100).alphanum().messages({
    "string.empty": "El campo password no puede estar vacio",
    "string.min": "El campo password debe tener al menos 6 caracteres",
    "string.max": "El campo password debe tener como maximo 100 caracteres",
  }),
});
