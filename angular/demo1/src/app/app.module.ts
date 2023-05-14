import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './Components/auth/auth.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './Components/loading/loading.component';
import {InlineSVGModule} from "ng-inline-svg-2";
import { BudgetInvestissementComponent } from './Components/BudgetInvestissement/budget-investissement/budget-investissement.component';
import { ComiteTechniqueComponent } from './Components/ComiteTechnique/comite-technique/comite-technique.component';
import { DateValidationComponent } from './Components/DateValidation/date-validation/date-validation.component';
import { EntiteSIComponent } from './Components/EntiteSI/entite-si/entite-si.component';
import { FournisseurComponent } from './Components/Fournisseur/fournisseur/fournisseur.component';
import { ProjetInvestissmentComponent } from './Components/ProjetInvestissment/projet-investissment/projet-investissment.component';
import { UserComponent } from './Components/User/user/user.component';
import { MenuComponent } from './menu/menu.component';
import { AddUserComponent } from './Components/User/add-user/add-user.component';
import { AddEntiteSIComponent } from './Components/EntiteSI/add-entite-si/add-entite-si.component';
import { AddFournisseurComponent } from './Components/Fournisseur/add-fournisseur/add-fournisseur.component';
import {
  AddProjetInvestissementComponent
} from "./Components/ProjetInvestissment/add-projet-investissement/add-projet-investissement.component";
import { AddContratDeMarcheComponent } from './Components/ContratDeMarche/add-contrat-de-marche/add-contrat-de-marche.component';
import { ContratDeMarcheComponent } from './Components/ContratDeMarche/contrat-de-marche/contrat-de-marche.component';
import { AddComiteTechniqueComponent } from './Components/ComiteTechnique/add-comite-technique/add-comite-technique.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,

    LoadingComponent,
     BudgetInvestissementComponent,
     ComiteTechniqueComponent,
     DateValidationComponent,
     EntiteSIComponent,
     FournisseurComponent,
     ProjetInvestissmentComponent,
     UserComponent,
     MenuComponent,
     AddUserComponent,
     AddEntiteSIComponent,
    AddFournisseurComponent,
    AddProjetInvestissementComponent,
    AddContratDeMarcheComponent,
    ContratDeMarcheComponent,
    AddComiteTechniqueComponent,


  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,



    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    InlineSVGModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
