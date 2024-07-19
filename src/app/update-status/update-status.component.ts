import { Component, OnInit, ViewChild } from '@angular/core';
import { LeaveDetails } from '../leave-details.interface';
import { LeaveService } from '../leave.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
//import { ModalStatusSelectorComponent } from './modal-status-selector/modal-status-selector.component';



@Component({
  selector: 'app-update-status',
  standalone:true,
  imports: [FormsModule,CommonModule],
  templateUrl: './update-status.component.html',
  styleUrl: './update-status.component.css'
})
export class UpdateStatusComponent implements OnInit
 {
  id!: number;

  // leaveDetails!: LeaveDetails[];
  // isManager = true;
  // constructor(private leaveService: LeaveService) {}

  // ngOnInit(): void 
  // {
  //    this.leaveService.getLeaveDetails().subscribe((data: LeaveDetails[]) => {
  //     this.leaveDetails = data;
  //   }, error => {
  //     console.error('Error fetching leave requests:', error);
  //   });
  // }

 
  

  leaveDetails!: LeaveDetails[];
  isManager = true;

  constructor(private leaveService: LeaveService) {}

  ngOnInit(): void {
    this.leaveService.getLeaveDetails().subscribe((data: LeaveDetails[]) => {
      this.leaveDetails = data;
    }, error => {
      console.error('Error fetching leave requests:', error);
    });
  }

  // openModal(index: number): void {
  //   const dialogRef = this.dialog.open(ModalStatusSelectorComponent, {
  //     width: '250px',
  //     data: { currentIndex: index, currentStatus: this.leaveDetails[index].status }
  //   });

  //   dialogRef.afterClosed().subscribe(selectedStatus => {
  //     if (selectedStatus) {
  //       this.updateLeaveStatus(index, selectedStatus);
  //     }
  //   });
  // }



  // updateLeaveStatus(index: number, status: string): void {
  //   const leaveId = this.leaveDetails[index].id;
  //   const leaveDetails: LeaveDetails = {
  //    ...this.leaveDetails[index],
  //     status: status
  //   };

  //   this.leaveService.updateLeaveRequestStatus(leaveId, leaveDetails).subscribe(
  //     updatedLeaveDetails => {
  //       console.log('Leave status updated successfully:', updatedLeaveDetails);
  //       // Optionally refresh the list or notify the user of success
  //     },
  //     error => {
  //       console.error('Error updating leave status:', error);
  //       // Optionally handle error, e.g., show an error message to the user
  //     }
  //   );
  // }



  // Modify the updateLeaveStatus method to accept an index parameter
  // updateLeaveStatus(index: number, status: string): void {
  //   const leaveId = this.leaveDetails[index].id;
  //   const leaveDetails: LeaveDetails = {
  //    ...this.leaveDetails[index],
  //     status: status
  //   };

  //   this.leaveService.updateLeaveRequestStatus(leaveId, leaveDetails).subscribe(
  //     updatedLeaveDetails => {
  //       console.log('Leave status updated successfully:', updatedLeaveDetails);
  //       // Optionally refresh the list or notify the user of success
  //     },
  //     error => {
  //       console.error('Error updating leave status:', error);
  //       // Optionally handle error, e.g., show an error message to the user
  //     }
  //   );
  // }
  
//   updateStatus(index: number, newStatus: string): void {
//     const leaveId = this.leaveDetails[index].id;

//     this.leaveService.updateLeaveRequestStatus(leaveId,newStatus).subscribe(()=>
//       {this.saveUpdatedLeaveDetails(index)})
    
//   }
//   // Method to save the updated leave details to the database
// saveUpdatedLeaveDetails(index: number): void {
//   const updatedLeaveDetail = this.leaveDetails[index];
//   this.leaveService.updateLeaveRequestStatus(updatedLeaveDetail.id,
//     updatedLeaveDetail.status).subscribe(()=>{console.log()})
// }







// updateStatus(id: number, status: string): void {
//   const leaveDetails: LeaveDetails = {
//     id: 0,
//     name: '',
//     leaveType: '',
//     startDate: new Date(),
//     endDate: new Date(),
//     reason: '',
//     status: ''
//   };
//   leaveDetails.status = status; // Assuming 'status' is the field name for the status in LeaveDetails

//   this.leaveService.updateLeaveRequestStatus(id, leaveDetails).subscribe(
//     updatedLeaveDetails => {
//       console.log('Leave status updated successfully:', updatedLeaveDetails);
//       // Handle success, e.g., show a message to the user
//     },
//     error => {
//       console.error('Error updating leave status:', error);
//       // Handle error, e.g., show an error message to the user
//     }
//   );
// }


}




