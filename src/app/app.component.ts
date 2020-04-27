import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "CodeSandbox";
  employees: any[] = [
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
