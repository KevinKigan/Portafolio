import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/share/header/header.component';
import { FooterComponent } from './components/share/footer/footer.component';
import { PortafolioComponent } from './components/pages/portafolio/portafolio.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ItemComponent } from './components/pages/item/item.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import { SearchComponent } from './components/pages/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PortafolioComponent,
    AboutComponent,
    ItemComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
