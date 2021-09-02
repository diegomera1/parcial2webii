const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const { SolicitudService } = require("../services");
//controladores
const { SolicitudController } = require("../controllers");
//rutas
const { SolicitudRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    SolicitudService: asClass(SolicitudService).singleton(),
  })
  .register({
    SolicitudController: asClass(SolicitudController.bind(SolicitudController)).singleton(),
  })
  .register({
    SolicitudRoutes: asFunction(SolicitudRoutes).singleton(),
  });
module.exports = container;
