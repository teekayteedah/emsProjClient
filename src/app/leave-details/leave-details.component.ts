import { Component } from '@angular/core';
import { LeaveService } from '../leave.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { LeaveDetails } from '../leave-details.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-leave-details',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink],
  templateUrl: './leave-details.component.html',
  styleUrl: './leave-details.component.css'
})
export class LeaveDetailsComponent {

  leaveForm!: FormGroup;



  constructor(private leaveService:LeaveService, private fb: FormBuilder, private router: Router){}
  ngOnInit(): void{
  this.leaveForm = this.fb.group({
    email: ['', Validators.required], 
    leaveType: ['', Validators.required],
    startDate: ['', Validators.required],
    endDate: ['', Validators.required],
    reason: ['', Validators.required],
    status: ['', Validators.required],

  });
}
applyLeave() {

  const leave: LeaveDetails = {
    ...this.leaveForm.value,
       status:"pending"

  }
   console.log(leave);
   this.leaveService.applyLeave(leave).subscribe((apply)=>{
    console.log(apply);
    console.log(leave)
    this.leaveForm.reset({})
    
    this.router.navigate([`leavelistdetails`])
   });
  }

  goToDashBoard(){
    this.router.navigate(['/dashboard'])
  }
}








  