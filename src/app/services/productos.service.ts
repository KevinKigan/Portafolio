import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {firebasePath} from '../../environments/environment';
import {ProductoInterface} from '../interfaces/producto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  loanding = true;
  products: ProductoInterface [] = [];
  productsFilter: ProductoInterface [] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
    console.log(firebasePath);
  }

  /**
   * Carga los productos con identificacion de la BBDD
   *
   */
  private loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get(firebasePath + 'productos_idx.json').subscribe((resp: ProductoInterface[]) => {
        this.products = resp;
        this.loanding = false;
        resolve();
      });
    });

  }

  /**
   * Retorna los productos que hay en BBDD
   *
   * @param id
   */
  public getProduct(id: string) {
    return this.http.get(firebasePath + 'productos/' + id + '.json');
  }

  /**
   * Busca los productos que se han pedido
   *
   * @param term Nombre del producto que se ha pedido
   */

  public searchProducts(term: string) {

    if (this.products.length === 0) {
      this.loadProducts().then(() => { // Then ejecuta codigo cuando la funcion (en este caso loadProducts) ha terminado. Despues de tener los productos
        this.filterProducts(term);
      });
    } else {
      this.filterProducts(term);
    }
  }

  /**
   * Filtra los productos por busqueda
   *
   * @param term Termino a buscar
   */
  private filterProducts(term: string) {
    this.productsFilter = [];
    if (term === 'ALLPRODUCTS') {
      this.productsFilter = this.products;
    } else {
      term = term.toLocaleLowerCase();
      this.products.forEach(prod => {
        console.log('buscando...');
        if (prod.categoria.indexOf(term) >= 0 || prod.titulo.indexOf(term) >= 0) {
          console.log('encontré algo');
          this.productsFilter.push(prod);
          console.log(this.productsFilter);
        }
      });
    }
  }
}
