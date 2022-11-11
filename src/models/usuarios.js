import mongoose, { Schema } from "mongoose";

const usuariosSchema = new Schema({
  usuario: {
    type: String,
    required: true,
    unique: true,
    minLength: 5,
    maxLength: 30,
  },
  mail: {
    type: String,
    required: true,
    unique: true,
    minLength: 10,
    maxLength: 50,
  },
  password: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 30,
  },
});

const Usuarios = mongoose.model("usuario", usuariosSchema);

export default Usuarios;