import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const baseURL = ["http://localhost:8080"];

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  constructor(private httpClient: HttpClient ) { }

  setSalaryAmount(Payslip: any): Observable<any>{

    return this.httpClient.post(baseURL + "/auth/save", Payslip);
  }
}
