const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");
require("express-async-errors");
const { NotFoundMiddleware, ErrorMiddleware } = require("../middlewares");
module.exports = function ({ MoverTransaccionRoutes }) {
  const router = express.Router();
  const apiRoutes = express.Router();
  apiRoutes
    .use(cors())
    .use(helmet())
    .use(compression())
    .use(express.json())
    .use(express.urlencoded({ extended: true }));

  /// api routes de acurdo a cada services
  apiRoutes.use("/moverTransaccion", MoverTransaccionRoutes);

  ///route principal /v1/api/
  router.use("/v1/api", apiRoutes);
  router.use(NotFoundMiddleware);
  router.use(ErrorMiddleware);
  return router;
};
