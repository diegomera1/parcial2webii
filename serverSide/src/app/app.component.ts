import { Component } from '@angular/core';
import { EnviarService } from './enviar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private enviarService: EnviarService){}
  title = 'serverSide';
  datos: any = {
    detallesPieza: '',
    descripcionProblema: '',
    tipoProblema:'',
    numeroTicket:'',
    fechaSolicitud:'',
    horaSolicitud:'',
    estado:'',
  };
  onUpload(){
    console.log('se envia')
    var x = this.enviarService.upload(this.datos);
    console.log (x);
  }
}
