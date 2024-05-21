import express from "express";
import router from "./routes/index.routes.js";

const PORT = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static",express.static("public"));


app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});