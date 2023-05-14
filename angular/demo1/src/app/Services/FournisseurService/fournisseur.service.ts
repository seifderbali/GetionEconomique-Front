import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Fournisseur} from "../../Modules/Fournisseur";

@Injectable({
  providedIn: 'root'
})
export class FournisseurService {


  private baseUrl = "http://localhost:8081/api/Fournisseur";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.baseUrl+"/displayFournisseur");
  }
  public save(fournisseur: Fournisseur) {
    return this.http.post<Fournisseur>(this.baseUrl+"/addFournisseur", fournisseur);
  }
  deleteFournisseur(id:number){
    return this.http.delete(this.baseUrl+"/deleteFournisseur/"+id);
  }
  updateFournisseur(fournisseur:Fournisseur){
    return this.http.put<Fournisseur>(this.baseUrl+"/updateFournisseur",fournisseur);
  }
  public search(keyword:string): Observable<Fournisseur[]> {
    return this.http.get<Fournisseur[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(this.baseUrl+"/find/"+id);
  }
  public findByContrat(id:number): Observable<Fournisseur> {
    return this.http.get<Fournisseur>(this.baseUrl+"/findByContrat/"+id);
  }
}
