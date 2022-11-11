import mongoose, { Schema } from "mongoose";

const recetaSchema = new Schema({
  titulo: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 30,
  },
  pasos: {
    type: String,
    required: true,
    minLength: 30,
    maxLength: 5000,
  },
  ingredientes: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 500,
  },
  imagen: {
    type: String,
    required: true,
  },
});

const Receta = mongoose.model("receta", recetaSchema);

export default Receta;