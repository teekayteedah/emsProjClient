import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const baseURL = ["http://localhost:8080"];
@Injectable({
  providedIn: 'root'
})
export class PayslipService {
  constructor(private httpClient: HttpClient ) { }

  getPayslipList(Payslip: any): Observable<any>{

    return this.httpClient.get(baseURL + "/auth/getPayslip", Payslip);
  }

  downloadFile(payslipId: number): Observable<Blob> {
    const url = `${baseURL}/auth/getPayslipById/${payslipId}`;
    return this.httpClient.get(url, { responseType: 'blob'  });
  }
}
