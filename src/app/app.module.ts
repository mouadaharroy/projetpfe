import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HopitalsComponent } from './hopitals/hopitals.component';
import { AboutComponent } from './about/about.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { ConnectionComponent } from './connection/connection.component';
import { PremierComponent } from './premier/premier.component';
import {FormsModule} from '@angular/forms';
import { HopitalsService } from '../services/hopitals.service';
import { AjouterHopitalComponent } from './ajouter-hopital/ajouter-hopital.component';
import { EditHopitalComponent } from './edit-hopital/edit-hopital.component';

const appRoutes:Routes=[
  {path:'hopitals/:id',component:AboutComponent},
  {path:'hopitals',component:HopitalsComponent},
  {path:'premier',component:PremierComponent},
  {path:'connection',component:ConnectionComponent},
  {path:'ajouterHopital',component:AjouterHopitalComponent},
  {path: 'edit-Hopital/:id',component:EditHopitalComponent},
  {path: '',component:ConnectionComponent},
  {path: '**',component:PremierComponent}
 
];



@NgModule({
  declarations: [
    AppComponent,
    HopitalsComponent,
    AboutComponent,
    ConnectionComponent,
    PremierComponent,
    AjouterHopitalComponent,
    EditHopitalComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule,FormsModule
  ],
  providers: [HopitalsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
