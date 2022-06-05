import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Employee } from 'src/app/models/employee.model';

@Component({
  selector: 'app-displaydata',
  templateUrl: './displaydata.component.html',
  styleUrls: ['./displaydata.component.css']
})
export class DisplaydataComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'email', 'phone', 'gender', 'dob', 'course', 'department'];
  dataSource!: MatTableDataSource<Employee>;


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  users: any;
  constructor(private apiservice: ApiService) { }


  ngOnInit(): void {
    this.apiservice.getallemployees().subscribe({
      next: (res) => {
        this.users = res;
        // console.log(this.users);
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }

    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
