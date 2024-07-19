
// import { GrievanceInterface } from './../grievance-interface';
// import { LogGrievanceComponent } from './../log-grievance/log-grievance.component';
// import { GrievanceService } from './../grievance.service';
import { Component, OnInit } from '@angular/core';
import { GrievanceService } from '../grievance.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { LogGrievanceComponent } from '../log-grievance/log-grievance.component';

import { GrievanceInterface } from '../grievanceinterface';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-grievance-management',
  standalone: true,
  imports: [RouterLink,CommonModule,ReactiveFormsModule],
  templateUrl: './grievance-management.component.html',
  styleUrl: './grievance-management.component.css'
})
export class GrievanceManagementComponent implements OnInit {


grievanceForm!: FormGroup;
  id!: number;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private grievanceService: GrievanceService
  ) { }

  ngOnInit() {
    this.initForm();
    
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log('Grievance ID:', this.id); 
      this.loadGrievanceDetails(this.id);
    });
  }

  initForm() {
    this.grievanceForm = this.fb.group({
      status: ['', Validators.required]
    });
  }

  loadGrievanceDetails(id: number) {
    this.grievanceService.getGrievanceDetailsById(id).subscribe(
    grievance => {
        this.grievanceForm.patchValue({ status: grievance.status });
      },
      error => {
        console.error('Error loading grievance details', error);
      }
    );
  }

  updateGrievanceDetails() {
    if (this.grievanceForm.valid) {
      const updatedgrievance = {
        id: this.id,
        status: this.grievanceForm.get('status')?.value
      };
      this.grievanceService.updateGrievanceDetails(this.id, updatedgrievance).subscribe(
        response => {
          console.log('Grievance status updated successfully', response);
          this.router.navigate(['/grievanceList']);
        },
        error => {
          console.error('Error updating grievance status', error);
        }
      );
    } else {
      console.log('Form is invalid');
    }
  }

  goToDashBoard() {
    this.router.navigate(['/dashboard']);
  }
}