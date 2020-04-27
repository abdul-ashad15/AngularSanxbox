export class employee {
  public code: string;
  public name: string;
  public gender: string;
  public salary: number;
  public dateOfBirth: string;

  public employees: any[];

  getEmployees(): void {
    this.employees = [
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
