import express from "express";
import morgan from "morgan";
import cors from "cors";
import path from "path";
import rutas from "./routes/receta.routes";
import "./database.js";

const app = express();

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log("Estoy en el puerto " + app.get("port"));
});

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));


//http://localhost:4000
app.use("/apireceta", rutas);