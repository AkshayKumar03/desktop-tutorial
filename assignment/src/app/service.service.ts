import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }
  
  private finaldata = [];
   private apiurl = "https://reqres.in/api/users?page=1";
   getData() {
      return this.http.get(this.apiurl);
   }

}
