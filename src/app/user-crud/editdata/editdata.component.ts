import { Component, OnInit, Input } from '@angular/core';
import { Department } from 'src/app/models/department.modal';
import { Employee } from 'src/app/models/employee.model';
import { ApiService } from 'src/app/shared/api.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editdata',
  templateUrl: './editdata.component.html',
  styleUrls: ['./editdata.component.css']
})
export class EditdataComponent implements OnInit {
  departments: Department[] = [
    { id: 1, name: 'Engineering' },
    { id: 2, name: 'Commerce' },
    { id: 3, name: 'Medicine' },
    { id: 4, name: 'Literature' },

  ];

  userdata: any;
  message: any;
  constructor(private apiservice: ApiService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id']);
    this.apiservice.getemployeeid(this.router.snapshot.params['id']).subscribe((result) => {
      this.userdata = result;
      console.log(this.userdata);
    });
  }
  updateuser() {
    // console.log(this.userdata);
    this.apiservice.updateemployee(this.router.snapshot.params['id'], this.userdata).subscribe((result) => {
      // console.log(result);
      this.message = true;
    })
  }

}
