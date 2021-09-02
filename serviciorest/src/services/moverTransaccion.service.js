const axios = require("axios").default;
class RealizacionService {
	mover(req, res) {
		let inicio = req.params.inicio
		let fin = req.params.fin

		axios.get(`http://localhost:3131/v1/api/solicitud/solicitudesEntre/${inicio}/${fin}`).then(
			response => {
				if (response.statusCode == 400) {
					return res.status(400).json({ mensaje: 'No se encontraron solicitudes entre esas fechas' })
				}
				const solicitudes =response.data.solicitudes; 
				solicitudes.forEach(solicitud => {
					const realizacion = {
						DetallePiezas: solicitud.DetallePiezas,
						DescripcionProblema: solicitud.DescripcionProblema,
						TipoProblema: solicitud.TipoProblema,
						NumeroTicket: solicitud.NumeroTicket,
						FechaSolicitud: solicitud.FechaSolicitud,
						HoraSolicitud: solicitud.HoraSolicitud,
						ResultadoMantenimiento: 'Se reparo',
						FechaCulminacion: new Date(),
						CostoMantenimiento: '$300',
						CambioEntregar: '$5',
					}

					axios.post(`http://localhost:3232/v1/api/realizacion/nuevaRealizacion`, realizacion).catch(err=>{
						return res.status(400).json({ mensaje: 'error post', err: err })
					});
				});
				return res.status(200).json({ mensaje: 'Se creo correctamente' });
			}
		).catch((err => {
			return res.status(400).json({ mensaje: 'error catch', err: err })

		}));
	}


}

module.exports = RealizacionService;