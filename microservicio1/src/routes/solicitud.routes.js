const { Router } = require("express");

module.exports = function ({ SolicitudController }) {
  const router = Router();
  router.post("/nuevaSolicitud", SolicitudController.nuevaSolicitud);
  router.get("/consultarSolicitud/:NumeroTicket", SolicitudController.consultarSolicitud);
  router.get("/solicitudesEntre/:inicio/:fin", SolicitudController.solicitudesEntre);
  router.patch("/editarSolicitud", SolicitudController.editarSolicitud);
  router.delete("/eliminarSolicitud", SolicitudController.eliminarSolicitud);
  return router;
};
