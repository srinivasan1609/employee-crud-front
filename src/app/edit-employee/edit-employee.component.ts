import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogData } from '../employee-list/employee-list.component';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  employee: EmployeeModel = {'id': 0, 'firstName': '', 'lastName': '', 'deptName': ''};

  constructor(public dialogRef: MatDialogRef<EditEmployeeComponent>,
     @Inject(MAT_DIALOG_DATA) public data: DialogData,
     private apiService: EmployeeApiService) { }

  ngOnInit() {
    this.apiService.getById(this.data.id).subscribe(data => this.employee = data);
  }

  onCancelClick(){
    this.dialogRef.close();
  }

  onEditClick(){
    this.apiService.editEmployee(this.employee).subscribe();
    this.dialogRef.close();
  }

}
