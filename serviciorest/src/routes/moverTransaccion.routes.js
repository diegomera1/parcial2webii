const { Router } = require("express");

module.exports = function ({ MoverTransaccionController }) {
  const router = Router();
  router.get("/moverTransaccion/:inicio/:fin", MoverTransaccionController.moverTransaccion);
  return router;
};
