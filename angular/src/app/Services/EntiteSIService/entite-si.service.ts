import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EntiteSI} from "../../Modules/EntiteSI";

@Injectable({
  providedIn: 'root'
})
export class EntiteSIService {



  private baseUrl = "http://localhost:8081/api/EntiteSI";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<EntiteSI[]> {
    return this.http.get<EntiteSI[]>(this.baseUrl+"/displayentiteSIs");
  }
  public save(entiteSI: EntiteSI) {
    return this.http.post<EntiteSI>(this.baseUrl+"/addentiteSI", entiteSI);
  }
  deleteEntiteSI(id:number){
    return this.http.delete(this.baseUrl+"/deleteentiteSI/"+id);
  }
  updateEntiteSI(entiteSI:EntiteSI){
    return this.http.put<EntiteSI>(this.baseUrl+"/updateentiteSI",entiteSI);
  }
  public search(keyword:string): Observable<EntiteSI[]> {
    return this.http.get<EntiteSI[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<EntiteSI> {
    return this.http.get<EntiteSI>(this.baseUrl+"/find/"+id);
  }
  public findByName(name:string): Observable<EntiteSI> {
    return this.http.get<EntiteSI>(this.baseUrl+"/findByName/"+name);
  }

  public findBudgetEntite(id:number): Observable<string> {
    return this.http.get<string>(this.baseUrl+"/findBudget/"+id);
  }
  public AllBudget(): Observable<string> {
    return this.http.get<string>(this.baseUrl+"/AllBudget");
  }
}
