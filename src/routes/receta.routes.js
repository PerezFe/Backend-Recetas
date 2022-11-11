import { Router } from "express";
import { borrarReceta, crearReceta, crearUsuario, editarReceta, listaReceta, listaUsuario, obtenerReceta } from "../controllers/receta.controllers";
import { check } from "express-validator";

const rutas = Router();

rutas.route("/receta")
.get(listaReceta)
.post([
    check("titulo")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:50})
    .withMessage("El nombre de la receta debe tener entre 5 y 50 caracteres"),
    check("pasos")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:5000})
    .withMessage("El nombre de la receta debe tener entre 5 y 50 caracteres"),
    check("ingredientes")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:500})
    .withMessage("El nombre de la receta debe tener entre 5 y 50 caracteres"),
    check("imagen")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Ingrese una URL valida")
],crearReceta)

rutas.route("/receta/:id")
.get(obtenerReceta)
.put([
    check("titulo")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .isLength({min:5, max:50})
    .withMessage("El nombre de la receta debe tener entre 5 y 50 caracteres"),
    check("pasos")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .isLength({min:5, max:5000})
    .withMessage("El nombre de la receta debe tener entre 5 y 50 caracteres"),
    check("ingredientes")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .isLength({min:5, max:500})
    .withMessage("El nombre de la receta debe tener entre 5 y 50 caracteres"),
    check("imagen")
    .notEmpty()
    .withMessage("Campo obligatorio")
    .matches(/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/)
    .withMessage("Ingrese una URL valida")
],editarReceta)
.delete(borrarReceta)

rutas.route("/usuario")
.get(listaUsuario)
.post([
    check("usuario")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .isLength({min:5, max:50}),
    check("mail")
    .notEmpty()
    .withMessage("Este campo es obligartorio")
    .isLength({min:10, max:50})
    .matches(/^[^@]+@[^@]+\.[a-zA-Z]{2,}$/)
    .withMessage("Ingresar un mail valido"),
    check("password")
    .notEmpty()
    .withMessage("Este campo es obligatorio")
    .isLength({min:10, max:50})
    .matches(/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/)
    .withMessage("Ingrese una clave valida")
],crearUsuario)

export default rutas;