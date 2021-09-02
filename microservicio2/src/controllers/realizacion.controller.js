let _realizacionService = null;
class RealizacionController {
  constructor({ RealizacionService }) {
    _realizacionService = RealizacionService;
  }
  nuevaRealizacion(req, res) {
    return _realizacionService.crear(req, res);
  }
  consultarRealizacion(req, res) {
    return _realizacionService.consultar(req, res);
  }
  editarRealizacion(req, res) {
    return _realizacionService.editar(req, res);
  }
  eliminarRealizacion(req, res) {
    return _realizacionService.eliminar(req, res);
  }
}

module.exports = RealizacionController;