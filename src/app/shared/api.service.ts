import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // url = 'http://localhost:3000/users'
  url = 'https://djangoapi98.herokuapp.com/backend/users/';
  constructor(private http: HttpClient) { }

  createemployee(employee: Employee) {
    // return this.http.post('http://localhost:3000/users', employee);
    return this.http.post(this.url, employee);
  }
  getallemployees() {
    // return this.http.get('http://localhost:3000/users');
    return this.http.get(this.url);
  }
  deleteemployee(id: number) {
    // return this.http.delete(`${this.url}/${id}`);
    return this.http.delete(this.url + id + `/`);
  }
  getemployeeid(id: number) {
    // return this.http.get(`${this.url}/${id}`);
    return this.http.get(this.url + id + `/`);
  }
  updateemployee(id: number, data: any) {
    // return this.http.put(`${this.url}/${id}`, data);
    return this.http.put(this.url + id + `/`, data);
  }
}
