import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProjetInvestissment} from "../../Modules/ProjetInvestissment";
import {Budget} from "../../Modules/Budget";

@Injectable({
  providedIn: 'root'
})
export class ProjetInvestissmentService {


  private baseUrl = "http://localhost:8081/api/ProjetInvestissment";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<ProjetInvestissment[]> {
    return this.http.get<ProjetInvestissment[]>(this.baseUrl+"/displayProjetInvestissment");
  }
  public save(projetInvestissment: ProjetInvestissment, id:number) {
    return this.http.post<ProjetInvestissment>(this.baseUrl+"/addProjetInvestissment/"+id, projetInvestissment);
  }
  deleteProjetInvestissment(id:number){
    return this.http.delete(this.baseUrl+"/deleteProjetInvestissment/"+id);
  }
  updateProjetInvestissment(projetInvestissment:ProjetInvestissment){
    return this.http.put<ProjetInvestissment>(this.baseUrl+"/updateProjetInvestissment",projetInvestissment);
  }
  public search(keyword:string): Observable<ProjetInvestissment[]> {
    return this.http.get<ProjetInvestissment[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<ProjetInvestissment> {
    return this.http.get<ProjetInvestissment>(this.baseUrl+"/find/"+id);
  }
 }
