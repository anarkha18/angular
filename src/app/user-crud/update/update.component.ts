import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from 'src/app/models/department.modal';
import { Employee } from 'src/app/models/employee.model';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  departments: Department[] = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'Commerce' },
    { id: 3, name: 'Medicine' },
    { id: 4, name: 'Literature' },

  ];

  constructor(private apiservice: ApiService) { }

  ngOnInit(): void {

  }
  res = new Employee();
  // mesaage: any
  adduser() {
    console.log(this.res)
    this.apiservice.createemployee(this.res).subscribe((data) => {
      console.warn("data", data);
    });
    // this.apiservice.createemployee(this.res).subscribe(result => {
    //   this.mesaage = (result);
    // })
  }
}



