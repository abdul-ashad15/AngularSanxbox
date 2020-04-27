import { Component, OnInit } from "@angular/core";
import { IEmployee } from "./employee";
import { EmployeeService } from "./employee.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [EmployeeService]
})
export class AppComponent implements OnInit {
  title = "CodeSandbox";
  employees: IEmployee[];

  constructor(private employeeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this.employeeService.getEmployees();
  }
}
