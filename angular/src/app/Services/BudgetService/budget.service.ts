import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Budget} from "../../Modules/Budget";
import {ProjetInvestissment} from "../../Modules/ProjetInvestissment";

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private baseUrl = "http://localhost:8081/api/Budget";
  constructor(private http: HttpClient) {   }
  public displayBudgetInvestissements(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetInvestissements");
  }
  public displayBudgetMaintenances(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetMaintenances");
  }
  public addBudgetInvestissement(budget: Budget, id: number) {
    return this.http.post<Budget>(this.baseUrl+"/addBudgetInvestissement/"+id, budget);
  }
  public addBudgetMaintenance(budget: Budget, id: number) {
    return this.http.post<Budget>(this.baseUrl+"/addBudgetMaintenance/"+id, budget);
  }
  deleteBudget(id:number){
    return this.http.delete(this.baseUrl+"/deleteBudgetMaintenance/"+id);
  }
  updateBudget(budget:Budget){
    return this.http.put<Budget>(this.baseUrl+"/updateBudgetMaintenance",budget);
  }
  public search(keyword:string): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<Budget> {
    return this.http.get<Budget>(this.baseUrl+"/find/"+id);
  }
  public findByEntiteInvestissement(id : number): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/findByEntiteInv/"+id);
  }
  public findByEntiteMaintenance(id : number): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/findByEntiteMain/"+id);
  }
  public findByContrat(id:number): Observable<Budget> {
    return this.http.get<Budget>(this.baseUrl+"/findByContrat/"+id);
  }
  public findProject(id:number): Observable<ProjetInvestissment> {
    return this.http.get<ProjetInvestissment>("http://localhost:8081/api/ProjetInvestissment/findProject/"+id);
  }
  public displayBudgetInvestissementsSortByDate(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetInvestissementsSortByDate");
  }
  public displayBudgetInvestissementsSortByCoutEtudeServ(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetInvestissementsSortByCoutEtudeServ");
  }
  public displayBudgetInvestissementsSortByCoutLogiciel(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetInvestissementsSortByCoutLogiciel");
  }
  public displayBudgetInvestissementsSortByCoutMateriel(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetInvestissementsSortByCoutMateriel");
  }


  public displayBudgetMaintenancesSortByDate(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetMaintenancesSortByDate");
  }
  public displayBudgetMaintenancesSortByCoutEtudeServ(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetMaintenancesSortByCoutEtudeServ");
  }
  public displayBudgetMaintenancesSortByCoutLogiciel(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetMaintenancesSortByCoutLogiciel");
  }
  public displayBudgetMaintenancesSortByCoutMateriel(): Observable<Budget[]> {
    return this.http.get<Budget[]>(this.baseUrl+"/displayBudgetMaintenancesSortByCoutMateriel");
  }
}
