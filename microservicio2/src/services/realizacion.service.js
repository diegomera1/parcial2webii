const { Realizaciones} = require("../models");
class RealizacionService {
	crear(req, res){
		const datos = req.body;
		console.log('Datos')
		console.log(daos)
		Realizaciones.create(datos,function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al crear realizacion de mantenimiento en la db'});
			}
			console.log('Se creo con exito');
			console.log(resultado);
			return res.status(200).json({mensaje:'Realizacion de mantenimiento creada con exito', resultado: resultado});

		});
	}

	consultar(req, res){
		const numeroTicket = req.params.NumeroTicket
		Realizaciones.findOne({NumeroTicket: numeroTicket}, function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al buscar realizacion de mantenimiento en la db'});
			}
			return res.status(200).json({resultado: resultado})	
	})

	}
	editar(req, res){
		const numeroTicket = req.body.NumeroTicket
		Realizaciones.findOneAndUpdate({NumeroTicket: numeroTicket}, {$set: req.body}, function(err, resultado){
			if (err){
				return res.status(400).json({mensaje:'Error al editar realizacion de mantenimiento en la db'});
			}
			return res.status(200).json({mensaje:'Realizacion de mantenimiento actualizada', resultado:resultado});	
		} );

	}
	eliminar(req, res){
		const numeroTicket = req.body.NumeroTicket
		Realizaciones.deleteOne({NumeroTicket: numeroTicket}, function(err, resultado){
			if(err){
				return res.status(400).json({mensaje:'Error al eliminar realizacion de mantenimiento en la db'});
			}
			return res.status(200).json({mensaje:'Realizacion de mantenimiento eliminada con exito'});
		});

	}
}

module.exports = RealizacionService;