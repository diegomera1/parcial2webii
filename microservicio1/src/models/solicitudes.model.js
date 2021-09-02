const mongoose = require("mongoose");
const { Schema } = mongoose;

const SolicitudesSchema = new Schema({
  DetallePiezas: { type: String },
  DescripcionProblema: { type: String },
  TipoProblema: { type: String },
  NumeroTicket: { type: String },
  FechaSolicitud: { type: Date },
  HoraSolicitud: { type: String },
  Estado: { type: String },
});

module.exports = mongoose.model("Solicitudes", SolicitudesSchema);
