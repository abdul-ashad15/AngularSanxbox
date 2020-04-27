import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";

@Injectable()
export class EmployeeService {
  getEmployees(): IEmployee[] {
    return [
      {
        code: "e101",
        name: "Abdul1",
        gender: "Male",
        salary: 60000,
        dateOfBirth: "25/06/1985"
      },
      {
        code: "e102",
        name: "Abdul1",
        gender: "Male",
        salary: 60000,
        dateOfBirth: "25/06/1985"
      },
      {
        code: "e103",
        name: "Abdul1",
        gender: "Male",
        salary: 60000,
        dateOfBirth: "25/06/1985"
      },
      {
        code: "e104",
        name: "Abdul1",
        gender: "Male",
        salary: 60000,
        dateOfBirth: "25/06/1985"
      }
    ];
  }
}
