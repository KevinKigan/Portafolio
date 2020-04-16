import { Component } from '@angular/core';
import {InfoPaginaService} from './services/info-pagina.service';
import {ProductosService} from './services/productos.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public infoPaginaService: InfoPaginaService,
              public productosService: ProductosService) {
  }
}
