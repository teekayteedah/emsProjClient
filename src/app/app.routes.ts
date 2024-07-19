import { GrievanceListComponent } from './grievance-list/grievance-list.component';
import { Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {adminGuard, usersGuard} from "./users.guard";
import {ProfileComponent} from "./profile/profile.component";
import {UpdateuserComponent} from "./updateuser/updateuser.component";
import {UserlistComponent} from "./userlist/userlist.component";
import { NavComponent } from './nav/nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalaryComponent } from './salary/salary.component';
import { PaysliplistComponent } from './paysliplist/paysliplist.component';
import { LeaveDetailsComponent } from './leave-details/leave-details.component';
import { LeaveDetailsListComponent } from './leave-details-list/leave-details-list.component';
import { LogGrievanceComponent } from './log-grievance/log-grievance.component';
import { GrievanceManagementComponent } from './grievance-management/grievance-management.component';
import { HomeComponent } from './home/home.component';
import { UpdateStatusComponent } from './update-status/update-status.component';
import { UpdateLeaveComponent } from './upate-leave-status/upate-leave-status.component';


export const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'login', component: LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'salary',component:SalaryComponent},
  {path:'payslip',component:PaysliplistComponent},
  {path:'applyleave',component:LeaveDetailsComponent},
  {path:'updateStatus',component:UpdateLeaveComponent},
  {path:'leavelistdetails',component:LeaveDetailsListComponent},
  {path: 'loggrievance', component:LogGrievanceComponent},
  {path: 'grievanceList', component:GrievanceListComponent},
  {path: 'grievancemangement', component:GrievanceManagementComponent},
  {path: 'home', component:HomeComponent},
  {path: 'register', component: RegisterComponent, canActivate: [adminGuard]},
  {path: 'profile', component: ProfileComponent, canActivate: [usersGuard]},
  {path: 'update/:id', component: UpdateuserComponent, canActivate: [adminGuard]},
  {path: 'users', component: UserlistComponent, canActivate:[adminGuard]},


  {path: '**', component: LoginComponent},
  
  {path: '', redirectTo: '/login', pathMatch: 'full'},
];
