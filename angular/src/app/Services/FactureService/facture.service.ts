import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Facture} from "../../Modules/Facture";

@Injectable({
  providedIn: 'root'
})
export class FactureService {


  private baseUrl = "http://localhost:8081/api/Facture";

  constructor(private http: HttpClient) {   }

  public findAll(): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.baseUrl+"/displayFactures");
  }
  public save(facture: Facture) {
    return this.http.post<Facture>(this.baseUrl+"/addFacture", facture);
  }
  deleteFacture(id:number){
    return this.http.delete(this.baseUrl+"/deleteFacture/"+id);
  }
  updateFacture(facture:Facture){
    return this.http.put<Facture>(this.baseUrl+"/updateFacture",facture);
  }
  public search(keyword:string): Observable<Facture[]> {
    return this.http.get<Facture[]>(this.baseUrl+"/search/"+keyword);
  }

}
