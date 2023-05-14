import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ContatDeMarche} from "../../Modules/ContatDeMarche";

@Injectable({
  providedIn: 'root'
})
export class ContatDeMarcheService {


  private baseUrl = "http://localhost:8081/api/ContatDeMarche";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<ContatDeMarche[]> {
    return this.http.get<ContatDeMarche[]>(this.baseUrl+"/displayContatDeMarche");
  }
  public save(contatDeMarche: ContatDeMarche, id: number, idd: number) {
    return this.http.post<ContatDeMarche>(this.baseUrl+"/addContatDeMarche/"+id+"/"+idd, contatDeMarche);
  }
  deleteForumById(id:number){
    return this.http.delete(this.baseUrl+"/deleteContatDeMarche/"+id);
  }
  updateForum(contatDeMarche:ContatDeMarche){
    return this.http.put<ContatDeMarche>(this.baseUrl+"/updateContatDeMarche",contatDeMarche);
  }
  public search(keyword:string): Observable<ContatDeMarche[]> {
    return this.http.get<ContatDeMarche[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<ContatDeMarche> {
    return this.http.get<ContatDeMarche>(this.baseUrl+"/find/"+id);
  }
  public findByBudget(id:number): Observable<ContatDeMarche[]> {
    return this.http.get<ContatDeMarche[]>(this.baseUrl+"/findByBudget/"+id);
  }
  public findByFournisseur(id:number): Observable<ContatDeMarche[]> {
    return this.http.get<ContatDeMarche[]>(this.baseUrl+"/findByFournisseur/"+id);

  }
}
