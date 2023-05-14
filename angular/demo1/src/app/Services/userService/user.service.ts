import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../../Modules/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {


  private baseUrl = "http://localhost:8081/api/User";
  constructor(private http: HttpClient) {   }
  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+"/displayusers");
  }
  public save(user: User, id: number) {
    return this.http.post<User>(this.baseUrl+"/adduser/"+id, user);
  }
  deleteUser(id:number){
    return this.http.delete(this.baseUrl+"/deleteuser/"+id);
  }
  updateUser(user:User, id: number){
    return this.http.put<User>(this.baseUrl+"/updateuser/"+id,user);
  }
  public search(keyword:string): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl+"/search/"+keyword);
  }

  public find(id:number): Observable<User> {
    return this.http.get<User>(this.baseUrl+"/find/"+id);
  }
}
