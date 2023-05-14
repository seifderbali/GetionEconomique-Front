import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BudgetInvestissement} from "../../Modules/BudgetInvestissement";
import {ProjetInvestissment} from "../../Modules/ProjetInvestissment";

@Injectable({
  providedIn: 'root'
})
export class BudgetInvestissementService {


  private baseUrl = "http://localhost:8081/api/BudgetInvestissement";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<BudgetInvestissement[]> {
    return this.http.get<BudgetInvestissement[]>(this.baseUrl+"/displayBudgetInvestissements");
  }
  public save(budgetInvestissement: BudgetInvestissement) {
    return this.http.post<BudgetInvestissement>(this.baseUrl+"/addBudgetInvestissement", budgetInvestissement);
  }
  deleteBudgetInvestissement(id:number){
    return this.http.delete(this.baseUrl+"/deleteBudgetInvestissement/"+id);
  }
  updateBudgetInvestissement(budgetInvestissement:BudgetInvestissement){
    return this.http.put<BudgetInvestissement>(this.baseUrl+"/updateBudgetInvestissement",budgetInvestissement);
  }
  public search(keyword:string): Observable<BudgetInvestissement[]> {
    return this.http.get<BudgetInvestissement[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<BudgetInvestissement> {
    return this.http.get<BudgetInvestissement>(this.baseUrl+"/find/"+id);
  }
  public findByEntite(id:number): Observable<BudgetInvestissement[]> {
    return this.http.get<BudgetInvestissement[]>("http://localhost:8081/api/ProjetInvestissment/findByEntite/"+id);
  }
  public findProject(id:number): Observable<ProjetInvestissment> {
    return this.http.get<ProjetInvestissment>("http://localhost:8081/api/ProjetInvestissment/findProject/"+id);
  }
  public findByContrat(id:number): Observable<BudgetInvestissement> {
    return this.http.get<BudgetInvestissement>(this.baseUrl+"/findByContrat/"+id);
  }}
