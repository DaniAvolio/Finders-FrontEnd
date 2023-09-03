import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIResponse } from '../models/APIResponse';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) {

   }

   getListOfServices(): Observable<APIResponse>{
    return this.http.get<APIResponse>('/api/v1/services');
   }

   getService(id: any): Observable<APIResponse>{
    return this.http.get<APIResponse>(`/api/v1/services/${id}`);
   }

   createService(service: any){
    return this.http.post(`/api/v1/services`, service)
   }

   updateService(id: any, service: any){
    return this.http.put(`/api/v1/services/${id}`, service)
   }

   deleteService(id: any){
    return this.http.delete(`/api/v1/services/${id}`)
   }
}

