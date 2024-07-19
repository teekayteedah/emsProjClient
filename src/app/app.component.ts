import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./nav/nav.component";
import {FooterComponent} from "./footer/footer.component";
import { PaysliplistComponent } from "./paysliplist/paysliplist.component";
import { SalaryComponent } from "./salary/salary.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavComponent, FooterComponent, PaysliplistComponent, SalaryComponent]
})
export class AppComponent {
  title = 'employeemanagementsystemClient';
}
