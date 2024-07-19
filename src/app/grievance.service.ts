import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

import { GrievanceInterface } from './grievanceinterface';
// import {GrievanceInterface} from "./grievance-interface";

const baseURL = "http://localhost:8080";

@Injectable({
  providedIn: 'root'
})
export class GrievanceService {
  // updateGrievanceStatus(newStatus: string) {
  //   throw new Error('Method not implemented.');
  // }
  updateStatus(newStatus: string) {
    throw new Error('Method not implemented.');
  }


  constructor(private httpClient: HttpClient ) { }


// logging a grievance

  logGrievances(grievence: GrievanceInterface): Observable<any>{
    return this.httpClient.post(baseURL + "/auth/api/GrievanceControl/saveGrievance", grievence);
  }
//getting all grievances

getAllGrievance(): Observable<GrievanceInterface[]>{

  return this.httpClient.get<GrievanceInterface[]>(baseURL + "/auth/api/GrievanceControl/AllGrievance")

}

//getting grievances by email
grievanceByEmail(userEmailAddress: string): Observable<GrievanceInterface[]>{

  return this.httpClient.get<GrievanceInterface[]>(baseURL + "/auth/api/GrievanceControl/grievanceByEmail")
}
//updating status by id
updateGrievanceStatus(grievanceId: Number, newStatus: string): Observable<object> {
  const url = `${baseURL}/auth/api/GrievanceControl/updateStatus/${grievanceId}`;
  const body = { status: newStatus };

  return this.httpClient.put(url, body);
}

getGrievanceDetailsById(id: number): Observable<GrievanceInterface> {
  return this.httpClient.get<GrievanceInterface>(`${baseURL}`+"/auth/api/GrievanceControl/grievanceStatusByID/1");
}

updateGrievanceDetails(id: number, grievance: Partial<GrievanceInterface>): Observable<GrievanceInterface> {
  return this.httpClient.put<GrievanceInterface>(`${baseURL}`+"/auth/api/GrievanceControl/1", grievance);
}

}