import { Component, OnInit ,Inject} from '@angular/core';
import {MAT_DIALOG_DATA,MatDialogRef} from '@angular/material/dialog';
import {DialogData} from './../employee-list/employee-list.component';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee: EmployeeModel = {'id': 0, 'firstName': '', 'lastName': '', 'deptName': ''};

  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: EmployeeApiService) { }

  ngOnInit() {
  }

  onAddClick(){
    this.apiService.addEmployee(this.employee).subscribe();
  }

  onCancelClick(){
    this.dialogRef.close();
  }

}
