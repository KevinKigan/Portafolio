import { Component, OnInit } from '@angular/core';
import {InfoPaginaService} from '../../../services/info-pagina.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public _servicio: InfoPaginaService,
              private router: Router) { }

  ngOnInit(): void {
  }

  public searchProduct(term: string){
    if(term.trim().length < 1){
      this.router.navigate(['/search', 'ALLPRODUCTS']);
    }else {
      this.router.navigate(['/search', term]);
    }
  }

}
