import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthComponent } from './Components/auth/auth.component';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { LoadingComponent } from './Components/loading/loading.component';
import { BudgetInvestissementComponent } from './Components/BudgetInvestissement/budget-investissement/budget-investissement.component';
import { ComiteTechniqueComponent } from './Components/ComiteTechnique/comite-technique/comite-technique.component';
import { DateValidationComponent } from './Components/DateValidation/date-validation/date-validation.component';
import { EntiteSIComponent } from './Components/EntiteSI/entite-si/entite-si.component';
import { FournisseurComponent } from './Components/Fournisseur/fournisseur/fournisseur.component';
import { ProjetInvestissmentComponent } from './Components/ProjetInvestissment/projet-investissment/projet-investissment.component';
import { UserComponent } from './Components/User/user/user.component';
import { AddUserComponent } from './Components/User/add-user/add-user.component';
import { AddEntiteSIComponent } from './Components/EntiteSI/add-entite-si/add-entite-si.component';
import { AddFournisseurComponent } from './Components/Fournisseur/add-fournisseur/add-fournisseur.component';
import {
  AddProjetInvestissementComponent
} from "./Components/ProjetInvestissment/add-projet-investissement/add-projet-investissement.component";
import { AddContratDeMarcheComponent } from './Components/ContratDeMarche/add-contrat-de-marche/add-contrat-de-marche.component';
import { ContratDeMarcheComponent } from './Components/ContratDeMarche/contrat-de-marche/contrat-de-marche.component';
import { AddComiteTechniqueComponent } from './Components/ComiteTechnique/add-comite-technique/add-comite-technique.component';
import {
  BudgetMaintenanceComponent
} from "./Components/BudgetMaintenance/budget-maintenance/budget-maintenance.component";
import { AddBudgetMaintenanceComponent } from './Components/BudgetMaintenance/add-budget-maintenance/add-budget-maintenance.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { DepenseComponent } from './Components/Depense/depense/depense.component';
import { AddDepenseComponent } from './Components/Depense/add-depense/add-depense.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { TopWidgetsComponent } from './Components/top-widgets/top-widgets.component';
import { Widget1Component } from './Components/widget1/widget1.component';
import { Widget2Component } from './Components/widget2/widget2.component';
import { Widget3Component } from './Components/widget3/widget3.component';
import { Widget4Component } from './Components/widget4/widget4.component';
import {ChartModule} from "angular-highcharts";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RecoverComponent } from './Components/recover/recover.component';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgxPaginationModule } from 'ngx-pagination';

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
    AddUserComponent,
    AddEntiteSIComponent,
    AddFournisseurComponent,
    AddProjetInvestissementComponent,
    AddContratDeMarcheComponent,
    ContratDeMarcheComponent,
    AddComiteTechniqueComponent,
    BudgetMaintenanceComponent,
    AddBudgetMaintenanceComponent,
    ProfileComponent,
    MenuBarComponent,
    DepenseComponent,
    AddDepenseComponent,
    DashboardComponent,
    TopWidgetsComponent,
    Widget1Component,
    Widget2Component,
    Widget3Component,
    Widget4Component,
    RecoverComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    AppRoutingModule,
    ChartModule,
    NgxCaptchaModule,
    NgxPaginationModule,

    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
