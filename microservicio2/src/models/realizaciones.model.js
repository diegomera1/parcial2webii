const mongoose = require("mongoose");
const { Schema } = mongoose;

const RealizacionSchema = new Schema({
  DetallePiezas: { type: String },
  DescripcionProblema: { type: String },
  TipoProblema: { type: String },
  NumeroTicket: { type: String },
  FechaSolicitud: { type: Date },
  HoraSolicitud: { type: String },
  ResultadoMantenimiento: { type: String },
  FechaCulminacion: { type: Date },
  CostoMantenimiento: { type: String },
  CambioEntregar: {type:String},
});

module.exports = mongoose.model("Realizaciones", RealizacionSchema);
