import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Depense} from "../../Modules/Depense";

@Injectable({
  providedIn: 'root'
})
export class DepenseService {



  private baseUrl = "http://localhost:8081/api/Depense";

  constructor(private http: HttpClient) {   }

  public findAll(): Observable<Depense[]> {
    return this.http.get<Depense[]>(this.baseUrl+"/displayDepense");
  }

  public save(depense: Depense, id: number, idd:number) {
    return this.http.post<Depense>(this.baseUrl+"/addDepense/"+id+"/"+idd, depense);
  }
  deleteDepense(id:number){
    return this.http.delete(this.baseUrl+"/deleteDepense/"+id);
  }
  updateDepense(depense:Depense){
    return this.http.put<Depense>(this.baseUrl+"/updateDepense",depense);
  }
  public search(keyword:string): Observable<Depense[]> {
    return this.http.get<Depense[]>(this.baseUrl+"/search/"+keyword);
  }


  public find(id:number): Observable<Depense> {
    return this.http.get<Depense>(this.baseUrl+"/find/"+id);
  }
}
