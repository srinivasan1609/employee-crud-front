import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { DialogData } from '../employee-list/employee-list.component';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private apiService: EmployeeApiService) { }

  ngOnInit() {
  }

  onDeleteClick(){
    this.apiService.deleteById(this.data.id).subscribe();
    this.dialogRef.close();
  }
  onCancelClick(){
    this.dialogRef.close();
  }

}
