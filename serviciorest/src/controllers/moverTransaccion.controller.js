let _moverTransaccionesService = null;
class MoverTransaccionController {
  constructor({ MoverTransaccionService }) {
    _moverTransaccionesService = MoverTransaccionService;
  }
  moverTransaccion(req, res) {
    return _moverTransaccionesService.mover(req, res);
  }

}

module.exports = MoverTransaccionController;