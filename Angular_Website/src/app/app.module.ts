import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { BodytherapyComponent } from './bodytherapy/bodytherapy.component';
import { ContactComponent } from './contact/contact.component';
import { MenuComponent } from './menu/menu.component';
import { PricesComponent } from './prices/prices.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'bodytherapy', component: BodytherapyComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'prices', component: PricesComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    BodytherapyComponent,
    ContactComponent,
    MenuComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }