import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, Router } from '@angular/router';

const baseURL = ["http://localhost:8080"];

@Component({
  selector: 'app-salary',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './salary.component.html',
  styleUrl: './salary.component.css'
})
export class SalaryComponent {

  deductions!:number;
  grossPay!:number ;
  payPeriod!:String;
  email!:String;


  constructor(private http: HttpClient, private router:Router ) {

  }


  save(){
    let bodyData={
      "email":this.email,
      "grossPay":this.grossPay,
      "deductions":this.deductions,
      "payPeriod": this.payPeriod
    };
    this.http.post(baseURL+"/auth/save",bodyData,{responseType:'text'}).subscribe((resultData:any )=>
    {
        console.log(resultData);
        alert("Salary Paid ");
        this.router.navigate(['/users'])
    });
  }


}
