import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule} from '@angular/material/toolbar';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button'
import {MatDialogModule} from '@angular/material/dialog';

import 'hammerjs';

//components
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DishdetailComponent } from './dishdetail/dishdetail.component';
//services
import { DishService } from './services/dish.service';
import { PromotionService } from './services/promotion.service';
import { LeaderService } from './services/leader.service';


import { AppRoutingModule } from './app-routing/app-routing.module';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
   MatDialogModule 
  ],
  //LOS SERVICIOS SIEMPRE SE AGREGAN EN LOS PROVIDERS.
  providers: [
    DishService,
    PromotionService,
    LeaderService
  ],
  entryComponents:[
      LoginComponent
  ] ,
  bootstrap: [AppComponent]
})
export class AppModule { }
