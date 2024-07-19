
// import { FormsModule } from '@angular/forms';
// import { GrievanceInterface } from '../grievanceinterface';
// import { GrievanceService } from './../grievance.service';
// import { Component, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { Router } from '@angular/router';
// import { UsersService } from '../users.service';


// @Component({
//   selector: 'app-grievance-list',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './grievance-list.component.html',
//   styleUrl: './grievance-list.component.css'
// })
// export class GrievanceListComponent implements OnInit
// {
//     profileInfo: any;
//   errorMessage: string = ''

// // grievanceList()
// // {
// //   throw new Error('Method not implemented')
// // }

// grievanceArray!: GrievanceInterface[];

// userEmailAddress!: string;



// constructor(private grievanceService: GrievanceService, private router:Router,private readonly usersService:UsersService){}

// ngOnInit(): void
// {//show all the grievances applied by this user
 
//     this.grievanceService.getAllGrievance().subscribe(data =>
//       {this.grievanceArray = data});
  
//     this.grievanceService.grievanceByEmail(this.userEmailAddress).subscribe(data => {
//       this.grievanceArray = data;
//     })
// }
// goToDashBoard(){
//   this.router.navigate(['/dashboard'])
// }
// }
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { GrievanceInterface } from '../grievanceinterface';
import { GrievanceService } from './../grievance.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-grievance-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './grievance-list.component.html',
  styleUrl: './grievance-list.component.css'
})
export class GrievanceListComponent implements OnInit {
  profileInfo: any;
  errorMessage: string = '';
  grievanceArray: GrievanceInterface[] = [];

  constructor(
    private grievanceService: GrievanceService,
    private router: Router,
    private usersService: UsersService
  ) {}

  async ngOnInit(): Promise<void> {
    try {
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error("No Token Found");
      }

      // Get the user's profile information
      this.profileInfo = await this.usersService.getYourProfile(token);

      // Get all grievances
      this.grievanceService.getAllGrievance().subscribe(
        (data: GrievanceInterface[]) => {
          
          
          if (this.profileInfo?.ourUsers?.role === 'ADMIN') {
            // If the user is HR, show all leave details
            this.grievanceArray = data;
          } else {
            // For other roles, filter leave details to show only those matching the logged-in user's email
            // Filter grievances to show only those matching the logged-in user's email
          this.grievanceArray = data.filter(grievance => 
            grievance.email === this.profileInfo?.ourUsers?.email
            );
          }
        },
        error => {
          this.showError('Error fetching grievances');
        }
      );
    } catch (error: any) {
      this.showError(error.message);
    }
  }

  goToDashBoard() {
    this.router.navigate(['/dashboard']);
  }
  goToGrievanceList() {
    this.router.navigate(['/grievancemangement']);
  }
  showError(mess: string) {
    this.errorMessage = mess;
    setTimeout(() => {
      this.errorMessage = '';
    }, 3000);
  }
}