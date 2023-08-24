import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {AuthComponent} from "./Components/auth/auth.component";
import {LoadingComponent} from "./Components/loading/loading.component";
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
import {AuthGuard} from "./shared/auth.guard";
import {AlreadyLoggedInGuard} from "./shared/already-logged-in.guard";
import {
  BudgetMaintenanceComponent
} from "./Components/BudgetMaintenance/budget-maintenance/budget-maintenance.component";
import {
  AddBudgetMaintenanceComponent
} from "./Components/BudgetMaintenance/add-budget-maintenance/add-budget-maintenance.component";
import {ProfileComponent} from "./Components/profile/profile.component";
import {MenuBarComponent} from "./menu-bar/menu-bar.component";
import {DepenseComponent} from "./Components/Depense/depense/depense.component";
import {AddDepenseComponent} from "./Components/Depense/add-depense/add-depense.component";
import {DashboardComponent} from "./Components/dashboard/dashboard.component";
import {RecoverComponent} from "./Components/recover/recover.component";


const routes: Routes = [
  { path: 'menu', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '', component: LoadingComponent, canActivate: [AlreadyLoggedInGuard]  },
  { path: 'menu', component: MenuBarComponent , canActivate:[AuthGuard]},
  { path: 'login', component: AuthComponent, canActivate: [AlreadyLoggedInGuard]  },
  { path: 'user', component: UserComponent , canActivate:[AuthGuard] },
  { path: 'adduser', component: AddUserComponent , canActivate:[AuthGuard] },
  { path: 'entiteSI', component: EntiteSIComponent , canActivate:[AuthGuard] },
  { path: 'addEntiteSI', component: AddEntiteSIComponent , canActivate:[AuthGuard] },
  { path: 'fournisseur', component: FournisseurComponent , canActivate:[AuthGuard] },
  { path: 'addfournisseur', component: AddFournisseurComponent , canActivate:[AuthGuard] },
  { path: 'budgetInvestissement', component: BudgetInvestissementComponent, canActivate:[AuthGuard]  },
  { path: 'addprojet', component: AddProjetInvestissementComponent , canActivate:[AuthGuard] },
  { path: 'projets', component: ProjetInvestissmentComponent , canActivate:[AuthGuard] },
  { path: 'contratDeMarche', component: ContratDeMarcheComponent , canActivate:[AuthGuard] },
  { path: 'addcontratDeMarche/:selectedOption', component: AddContratDeMarcheComponent , canActivate:[AuthGuard] },
  { path: 'comiteTechnique', component: ComiteTechniqueComponent , canActivate:[AuthGuard] },
  { path: 'addcomiteTechnique/:selectedOption', component: AddComiteTechniqueComponent , canActivate:[AuthGuard] },
  { path: 'budgetMaintenance', component: BudgetMaintenanceComponent, canActivate:[AuthGuard]  },
  { path: 'addbudgetMaintenance', component: AddBudgetMaintenanceComponent, canActivate:[AuthGuard]  },
  { path: 'profile', component: ProfileComponent, canActivate:[AuthGuard]  },
  { path: 'Depense', component: DepenseComponent, canActivate:[AuthGuard]  },
  { path: 'AddDepense', component: AddDepenseComponent, canActivate:[AuthGuard]  },
  { path: 'dashboard', component: DashboardComponent, canActivate:[AuthGuard]  },
  { path: 'Recover', component: RecoverComponent, canActivate: [AlreadyLoggedInGuard]  },


]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
