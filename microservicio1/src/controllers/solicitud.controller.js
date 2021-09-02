let _solicitudService = null;
class SolicitudController {
  constructor({ SolicitudService }) {
    _solicitudService = SolicitudService;
  }
  nuevaSolicitud(req, res) {
    return _solicitudService.crear(req, res);
  }

  solicitudesEntre(req, res){
    return _solicitudService.solicitudesEntre(req, res);
  }

  consultarSolicitud(req, res) {
    return _solicitudService.consultar(req, res);
  }
  editarSolicitud(req, res) {
    return _solicitudService.editar(req, res);
  }
  eliminarSolicitud(req, res) {
    return _solicitudService.eliminar(req, res);
  }
}

module.exports = SolicitudController;