import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {InfoPaginaInterface} from '../interfaces/info-pagina.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {
/* Como se encuentra en el constructor de AppComponent que es el principal, solo se carga una vez el servicio.
   Por lo que para volver a cargarlo hay que recargar la pagina web
*/
  info: InfoPaginaInterface = {};
  load = false;
  team: any [] = [];

  constructor(private http: HttpClient) {
    this.loadInfo();
    this.loadTeam();
  }

  /**
   * Carga la informacion referente a la pagina desde la BBDD
   *
   */
  private loadInfo(){
    this.http.get('assets/data/data-pagina.json')
      .subscribe((resp: InfoPaginaInterface) =>{
        this.load = true;
        this.info = resp;
      });
  }

  /**
   * Carga el equipo de trabajo desde la BBDD
   *
   */
  private loadTeam(){
    this.http.get('https://kevinportafolio-6e131.firebaseio.com/team.json').subscribe((resp: any[]) =>{
      this.team = resp;
    });
  }
}
