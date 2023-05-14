import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ComiteTechnique} from "../../Modules/ComiteTechnique";

@Injectable({
  providedIn: 'root'
})
export class ComiteTechniqueService {


  private baseUrl = "http://localhost:8081/api/ComiteTechnique";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<ComiteTechnique[]> {
    return this.http.get<ComiteTechnique[]>(this.baseUrl+"/displayComiteTechnique");
  }
  public save(comiteTechnique: ComiteTechnique, id: number, idd:number) {
    return this.http.post<ComiteTechnique>(this.baseUrl+"/addComiteTechnique/"+id+"/"+idd, comiteTechnique);
  }
  deleteComite(id:number){
    return this.http.delete(this.baseUrl+"/deleteComiteTechnique/"+id);
  }
  updateComite(comiteTechnique:ComiteTechnique){
    return this.http.put<ComiteTechnique>(this.baseUrl+"/updateComiteTechnique",comiteTechnique);
  }
  public search(keyword:string): Observable<ComiteTechnique[]> {
    return this.http.get<ComiteTechnique[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<ComiteTechnique> {
    return this.http.get<ComiteTechnique>(this.baseUrl+"/find/"+id);
  }}
