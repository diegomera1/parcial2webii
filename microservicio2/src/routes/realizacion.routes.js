const { Router } = require("express");

module.exports = function ({ RealizacionController }) {
  const router = Router();
  router.post("/nuevaRealizacion", RealizacionController.nuevaRealizacion);
  router.get("/consultarRealizacion/:NumeroTicket", RealizacionController.consultarRealizacion);
  router.patch("/editarRealizacion", RealizacionController.editarRealizacion);
  router.delete("/eliminarRealizacion", RealizacionController.eliminarRealizacion);
  return router;
};
