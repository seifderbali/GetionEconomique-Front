import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {AuthComponent} from "./Components/auth/auth.component";
import {LoadingComponent} from "./Components/loading/loading.component";
import {MenuComponent} from "./menu/menu.component";
import {UserComponent} from "./Components/User/user/user.component";
import {AddUserComponent} from "./Components/User/add-user/add-user.component";
import {EntiteSIComponent} from "./Components/EntiteSI/entite-si/entite-si.component";
import {AddEntiteSIComponent} from "./Components/EntiteSI/add-entite-si/add-entite-si.component";
import {FournisseurComponent} from "./Components/Fournisseur/fournisseur/fournisseur.component";
import {AddFournisseurComponent} from "./Components/Fournisseur/add-fournisseur/add-fournisseur.component";
import {
  BudgetInvestissementComponent
} from "./Components/BudgetInvestissement/budget-investissement/budget-investissement.component";
import {
  AddProjetInvestissementComponent
} from "./Components/ProjetInvestissment/add-projet-investissement/add-projet-investissement.component";
import {
  ProjetInvestissmentComponent
} from "./Components/ProjetInvestissment/projet-investissment/projet-investissment.component";
import {ContratDeMarcheComponent} from "./Components/ContratDeMarche/contrat-de-marche/contrat-de-marche.component";
import {
  AddContratDeMarcheComponent
} from "./Components/ContratDeMarche/add-contrat-de-marche/add-contrat-de-marche.component";
import {
  AddComiteTechniqueComponent
} from "./Components/ComiteTechnique/add-comite-technique/add-comite-technique.component";
import {ComiteTechniqueComponent} from "./Components/ComiteTechnique/comite-technique/comite-technique.component";


const routes: Routes = [

  { path: '', component: LoadingComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'login', component: AuthComponent },
  { path: 'user', component: UserComponent },
  { path: 'adduser', component: AddUserComponent },
  { path: 'entiteSI', component: EntiteSIComponent },
  { path: 'addEntiteSI', component: AddEntiteSIComponent },
  { path: 'fournisseur', component: FournisseurComponent },
  { path: 'addfournisseur', component: AddFournisseurComponent },
  { path: 'budgetInvestissement', component: BudgetInvestissementComponent },
  { path: 'addprojet', component: AddProjetInvestissementComponent },
  { path: 'projets', component: ProjetInvestissmentComponent },
  { path: 'contratDeMarche', component: ContratDeMarcheComponent },
  { path: 'addcontratDeMarche', component: AddContratDeMarcheComponent },
  { path: 'comiteTechnique', component: ComiteTechniqueComponent },
  { path: 'addcomiteTechnique', component: AddComiteTechniqueComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
