import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {AddEmployeeComponent} from './../add-employee/add-employee.component';
import { DeleteConfirmComponent } from '../delete-confirm/delete-confirm.component';
import { EditEmployeeComponent } from '../edit-employee/edit-employee.component';
import { EmployeeModel } from '../model/employee.model';
import { EmployeeApiService } from '../service/employee-api.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements AfterViewInit,OnInit {

  constructor(public dialog: MatDialog, private apiService: EmployeeApiService) { }

  displayedColumns: string[] = ['empId', 'fName', 'lName', 'deptName', 'actions'];
  dataSource: MatTableDataSource<EmployeeModel> = new MatTableDataSource;

  openAddDialog() {
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      data: {},
      width: '350px',
      height: '350px'
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.apiService.getAll()
      .subscribe( data => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }

  openEditDialog(id:number) {
    const dialogRef = this.dialog.open(EditEmployeeComponent, {
      data: {
        id: id
      },
      width: '350px',
      height: '400px'
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.apiService.getAll()
      .subscribe( data => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }
  openDeleteDialog(id: number) {
    const dialogRef = this.dialog.open(DeleteConfirmComponent, {
      data: {
        id: id
      },
      width: '300px',
      height: '200px'
    });
    dialogRef.afterClosed().subscribe(()=>{
      this.apiService.getAll()
      .subscribe( data => {
        this.dataSource = new MatTableDataSource(data);
      });
    });
  }

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(){
    this.apiService.getAll()
      .subscribe( data => {
        this.dataSource = new MatTableDataSource(data);
      });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
export interface DialogData{
  id: number;
}
