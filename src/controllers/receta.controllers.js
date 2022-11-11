import Receta from "../models/receta";
import Usuarios from "../models/usuarios";

export const listaReceta = async (req, res) => {
  try {
    const listaRecetas = await Receta.find();
    res.status(200).json(listaRecetas);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al buscar receta/s",
    });
  }
};

export const crearReceta = async (req, res) => {
  try {
    const recetaNueva = new Receta(req.body);
    await recetaNueva.save();
    res.status(201).json({
      message: "La receta fue añadida correctametne",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al añadir receta",
    });
  }
};

export const editarReceta = async (req, res) => {
  try {
    await Receta.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      message: "La receta fue actualizada",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al editar receta",
    });
  }
};

export const borrarReceta = async (req, res) => {
  try {
    await Receta.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message: "La receta fue eliminada correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al borrar la receta",
    });
  }
};

export const obtenerReceta = async (req, res) => {
  try {
    const recetaBuscada = await Receta.findById(req.params.id);
    res.status(200).json(recetaBuscada);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "La receta no fue encontrada",
    });
  }
};

export const crearUsuario = async(req, res) =>{
  try {
    const usuarioNuevo = await Usuarios(req.body);
    await usuarioNuevo.save();
    res.status(201).json({
      message: "El usuario fue creado"
    })
  } catch (error) {
    console.log(error)
    res.status(404).json({
      message: "Error al crear usuario"
    })
  }
}

export const listaUsuario = async (req, res) => {
  try {
    const listaUsuarios = await Usuarios.find();
    res.status(200).json(listaUsuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      message: "Error al buscar usuario/s",
    });
  }
};