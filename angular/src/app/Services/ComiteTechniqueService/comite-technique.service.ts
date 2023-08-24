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
  public findAllInvestissement(): Observable<ComiteTechnique[]> {
    return this.http.get<ComiteTechnique[]>(this.baseUrl+"/displayComiteTechniqueInvestissement");
  }
  public findAllMaintenance(): Observable<ComiteTechnique[]> {
    return this.http.get<ComiteTechnique[]>(this.baseUrl+"/displayComiteTechniqueMaintenance");
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
  public searchInv(keyword:string): Observable<ComiteTechnique[]> {
    return this.http.get<ComiteTechnique[]>(this.baseUrl+"/searchInv/"+keyword);
  }
  public searchMain(keyword:string): Observable<ComiteTechnique[]> {
    return this.http.get<ComiteTechnique[]>(this.baseUrl+"/searchMain/"+keyword);
  }

  public find(id:number): Observable<ComiteTechnique> {
    return this.http.get<ComiteTechnique>(this.baseUrl+"/find/"+id);
  }}
