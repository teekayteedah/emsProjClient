import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaveDetails } from './leave-details.interface';
 
const Base_URL = "http://localhost:8080"


@Injectable({
  providedIn: 'root'
})
export class LeaveService {
   constructor(private http: HttpClient) { }

   private url = "http://localhost:8080/auth/api/leaves/LeaveController/LeaveStatusByID/"
 
   // Method to apply leave
   applyLeave(leaveDetails:LeaveDetails): Observable<object> {
     return this.http.post<Object>(`${Base_URL}` + "/auth/api/leaves/LeaveController/applyLeave", leaveDetails);
   }
  getLeaveDetails(): Observable<LeaveDetails[]> {
    return this.http.get<LeaveDetails[]>(`${Base_URL}` + "/auth/api/leaves/LeaveController/getLeaveDetails");
  }
  // //Updating The Status Of the User 
  // updateLeaveRequestStatus(id: number, status: string): Observable<object> {
  //   return this.http.put<object>(`${Base_URL}/api/leaves/LeaveController/${id}/status`,status);
  // }
  getLeaveDetailsById(id: number): Observable<LeaveDetails> {
    return this.http.get<LeaveDetails>(`${Base_URL}`+"/auth/api/leaves/LeaveController/LeaveStatusByID/1");
  }
  
  updateLeaveDetails(id: number, leaveDetails: Partial<LeaveDetails>): Observable<LeaveDetails> {
    return this.http.put<LeaveDetails>(`${Base_URL}`+"/auth/api/leaves/LeaveController/1", leaveDetails);
  }

  // Modified method to update the status of a leave request
  // updateLeaveDetails(id: number, leaveDetails: LeaveDetails): Observable<LeaveDetails> {
  //   return this.http.put<LeaveDetails>(`${Base_URL}/${id}`, leaveDetails);
  // }


  getUserById(id: number): Observable<LeaveDetails> {
    return this.http.get<LeaveDetails>(`${Base_URL}/auth/api/leaves/LeaveController/${id}`);
  }
}