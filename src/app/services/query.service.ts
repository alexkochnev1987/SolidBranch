import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DataStructure, url } from '../constants';

@Injectable({
  providedIn: 'root',
})
export class QueryService {
  constructor(private http: HttpClient) {}

  getTransaction() {
    return this.http.get<DataStructure>(url);
  }

}
