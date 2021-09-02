const { createContainer, asClass, asValue, asFunction } = require("awilix");
//config
const config = require("../config");
const app = require(".");
//servicios
const { MoverTransaccionService } = require("../services");
//controladores
const { MoverTransaccionController } = require("../controllers");
//rutas
const { MoverTransaccionRoutes } = require("../routes/index.routes");
const Routes = require("../routes");
const container = createContainer();
container
  .register({
    app: asClass(app).singleton(),
    router: asFunction(Routes).singleton(),
    config: asValue(config),
  })
  .register({
    MoverTransaccionService: asClass(MoverTransaccionService).singleton(),
  })
  .register({
    MoverTransaccionController: asClass(MoverTransaccionController.bind(MoverTransaccionController)).singleton(),
  })
  .register({
    MoverTransaccionRoutes: asFunction(MoverTransaccionRoutes).singleton(),
  });
module.exports = container;
