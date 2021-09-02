const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const { RealizacionService } = require("../services");
//controladores
const { RealizacionController } = require("../controllers");
//rutas
const { RealizacionRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    RealizacionService: asClass(RealizacionService).singleton(),
  })
  .register({
    RealizacionController: asClass(RealizacionController.bind(RealizacionController)).singleton(),
  })
  .register({
    RealizacionRoutes: asFunction(RealizacionRoutes).singleton(),
  });
module.exports = container;
