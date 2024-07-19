import { Component, OnInit } from '@angular/core';
//import { LeaveService } from './leave.service';
import { LeaveService } from '../leave.service';
import { LeaveDetails } from '../leave-details.interface';
import { get } from 'http';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-component-manage',
  standalone:true,
  imports:[RouterLink,CommonModule],
  templateUrl: './component-manage.component.html',
  styleUrl: './component-manage.component.css'
})
export class ComponentManageComponent implements OnInit
{
  //leaveDetails = []; // Assume this is populated from your backend

  leaveDetails!: LeaveDetails[];

   isManager = true;

  constructor(private leaveService: LeaveService, private router: Router) {}

  ngOnInit(): void 
  {
    // Initialize leaveDetails here

    this.leaveService.getLeaveDetails().subscribe((data: LeaveDetails[]) => {
      this.leaveDetails = data;
    }, error => {
      console.error('Error fetching leave requests:', error);
    });
  }

  // updateStatus(index: number, newStatus: string): void {
  //   this.leaveDetails[index].status = newStatus;
  //   const leaveId = this.leaveDetails[index].id;
  //   this.leaveService.updateLeaveRequestStatus(leaveId, newStatus).subscribe(() => {
  //     // Refresh the list or notify the user of success
  //   }, error => {
     
  //   });
  // }

  
  updateStatus(index: number, newStatus: string): void {
    // Directly update the status in the local copy of leaveDetails
    this.leaveDetails[index].status = newStatus;

    // Create a copy of the current LeaveDetails object to avoid direct mutation
    const updatedLeaveDetail = {...this.leaveDetails[index], status: newStatus};

    // Call the updateLeaveRequestStatus method with the updated LeaveDetails object
    this.leaveService.updateLeaveRequestStatus(this.leaveDetails[index].id, updatedLeaveDetail).subscribe(() => {
      // Refresh the list or notify the user of success
      console.log('Leave status updated successfully');
    }, error => {
      console.error('Error updating leave status:', error);
    });
  }
 }

