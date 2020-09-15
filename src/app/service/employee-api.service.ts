import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService {

  constructor(private httpClient: HttpClient) { }

  public getAll() {
    return this.httpClient.get<EmployeeModel[]>('/api/employee/getall');
  }

  public getById(id: number) {
    return this.httpClient.get<EmployeeModel>('/api/employee/get/' + id);
  }

  public deleteById(id: number) {
    return this.httpClient.delete<EmployeeModel>('/api/employee/delete/' + id);
  }

  public editEmployee(employee: EmployeeModel) {
    return this.httpClient.put<EmployeeModel>('/api/employee/edit/' + employee.id, employee);
  }

  public addEmployee(employee: EmployeeModel) {
    return this.httpClient.post<EmployeeModel>('/api/employee/add', employee);
  }
}
