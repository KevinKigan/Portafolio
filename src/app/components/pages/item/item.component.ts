import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../../services/productos.service';
import {ProductoDescripcionInterface} from '../../../interfaces/producto-descripcion.interface';
import {ProductoInterface} from '../../../interfaces/producto.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  product: ProductoDescripcionInterface;
  id: string;

  constructor(private route: ActivatedRoute,
              public productService: ProductosService) { }

  ngOnInit(): void {
      this.route.params.subscribe(parameters =>{
      this.productService.getProduct(parameters['id']).subscribe((producto: ProductoDescripcionInterface) =>{
        this.id = parameters['id'];
        this.product = producto;
      });
    });
  }

}
