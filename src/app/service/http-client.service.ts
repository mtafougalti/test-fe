import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../Environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) { }

  hello(){
    return this.httpClient.get("http://localhost:8080/hello");
  }

  yaml(){
    return this.httpClient.get<Environment[]>("http://localhost:8080/yaml");
  }

  get(id){
    return this.httpClient.get<Environment>("http://localhost:8080/get/"+id);
  }

  add(env): Observable<Environment[]> {
    console.log(env);
    return this.httpClient.post<Environment[]>("http://localhost:8080/add", env);
  }

  update(env): Observable<Environment[]> {
    console.log(env);
    return this.httpClient.post<Environment[]>("http://localhost:8080/update", env);
  }

  delete(id): Observable<Environment[]>{
    console.log("id in service" + id);
    return this.httpClient.delete<Environment[]>("http://localhost:8080/delete/"+id);
  }

  getInfraMap(){
    return this.httpClient.get<Environment[]>("http://localhost:8080/infraList");
  }
}
