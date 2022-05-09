import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { BodytherapyComponent } from './bodytherapy/bodytherapy/bodytherapy.component';
import { AboutComponent } from './about/about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PricesComponent } from './prices/prices.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    BodytherapyComponent,
    AboutComponent,
    ContactComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
