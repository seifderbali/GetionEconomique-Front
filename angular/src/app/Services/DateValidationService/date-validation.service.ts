import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {DateValidation} from "../../Modules/DateValidation";

@Injectable({
  providedIn: 'root'
})
export class DateValidationService {



  private baseUrl = "http://localhost:8081/api/DateValidation";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<DateValidation[]> {
    return this.http.get<DateValidation[]>(this.baseUrl+"/displayDateValidation");
  }
  public save(dateValidation: DateValidation) {
    return this.http.post<DateValidation>(this.baseUrl+"/addDateValidation", dateValidation);
  }
  deleteForumById(id:number){
    return this.http.delete(this.baseUrl+"/deleteDateValidation/"+id);
  }
  updateForum(dateValidation:DateValidation){
    return this.http.put<DateValidation>(this.baseUrl+"/updateDateValidation",dateValidation);
  }
  public search(keyword:string): Observable<DateValidation[]> {
    return this.http.get<DateValidation[]>(this.baseUrl+"/search/"+keyword);
  }

}
