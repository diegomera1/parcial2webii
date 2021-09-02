const { Solicitudes } = require("../models");
class SolicitudService {
	crear(req, res){
		const datos = req.body;
		console.log(datos);
		Solicitudes.create(datos,function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al crear solicitud en la db'});
			}
			return res.status(200).json({mensaje:'Solicitud creada con exito', resultado: resultado});
		});
	}

	consultar(req, res){
		const numeroTicket = req.params.NumeroTicket
		Solicitudes.findOne({NumeroTicket: numeroTicket}, function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al buscar solicitud en la db'});
			}
			return res.status(200).json({resultado: resultado})	
	})

	}
	editar(req, res){
		const numeroTicket = req.body.NumeroTicket
		Solicitudes.findOneAndUpdate({NumeroTicket: numeroTicket}, {$set: req.body}, function(err, resultado){
			if (err){
				return res.status(400).json({mensaje:'Error al editar solicitud en la db'});
			}
			return res.status(200).json({mensaje:'Solicitud actualizada', resultado:resultado});	
		} );

	}
	eliminar(req, res){
		const numeroTicket = req.body.NumeroTicket
		Solicitudes.deleteOne({NumeroTicket: numeroTicket}, function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al eliminar solicitud en la db'});
			}
			return res.status(200).json({mensaje:'Solicitud eliminada con exito'});
		});

	}

	solicitudesEntre(req, res){
		let inicio = req.params.inicio;

		let fin = req.params.fin;

console.log('inicio)')
console.log(inicio)
console.log('fin')
console.log(fin)

		Solicitudes.find({FechaSolicitud: {
			$gte: new Date(inicio),
			$lt: new Date(fin),
		}}, function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al buscar solicitudes en la db'});
			}
			if(!resultado)
			{
				return res.status(400).json({mensaje:'No se encontraron '});
			}
			console.log('resultado:')
			console.log(resultado)
			return res.status(200).json({solicitudes: resultado});
		});
	}
}

module.exports = SolicitudService;