const { Router } = require("express");

module.exports = function ({ RealizacionController }) {
  const router = Router();
  router.post("/nuevaRealizacion", RealizacionController.nuevaRealizacion);
  router.get("/consultarRealizacion/:NumeroTicket", RealizacionController.consultarRealizacion);
  router.patch("-=", RealizacionController.editarRealizacion);
  router.delete("/eliminarRealizacion", RealizacionController.eliminarRealizacion);
  return router;
};
