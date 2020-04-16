import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firebasePath} from '../../environments/environment';
import {ProductoInterface} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loanding = true;

  constructor(private http: HttpClient) {
    this.loadProducts();
    console.log(firebasePath);
  }

  private loadProducts(){
    this.http.get(firebasePath+'productos_idx.json').subscribe((resp: ProductoInterface[]) =>{
        console.log(resp);
        this.loanding=false;
    });
  }

}
