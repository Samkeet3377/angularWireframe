import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from 'src/app/company/model/company';

@Injectable(
  //   {
  //   providedIn: 'root'
  // }
)
export class ApiService {

  baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = 'http://localhost:3000/';
  }

  // get data from API
  getCompanyData(): Observable<company[]> {
    const url = this.baseUrl + 'company';
    return this.http.get<company[]>(url);
  }
  // add data to API
  addCompanyData(data: company): Observable<company> {
    const url = this.baseUrl + 'company';
    return this.http.post<company>(url, data);
  }
  // delete data from API
  deleteCompanyData(id: number): Observable<company> {
    const url = this.baseUrl + 'company/' + id;
    return this.http.delete<company>(url);
  }
  // update data to API
  updateCompanyData(data: company, id: number): Observable<company> {
    const url = this.baseUrl + 'company/' + id;
    return this.http.put<company>(url, data);
  }

}
