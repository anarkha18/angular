import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-viewdata',
  templateUrl: './viewdata.component.html',
  styleUrls: ['./viewdata.component.css']
})
export class ViewdataComponent implements OnInit {

  users: any
  constructor(private apiservice: ApiService) { }
  ngOnInit(): void {
    this.apiservice.getallemployees().subscribe(res => {
      this.users = res;
      // console.log(this.users)

    });
  }
  delemployee(id: any) {
    // console.log(id);
    this.apiservice.deleteemployee(id).subscribe((result) => {
      // console.log(result);
      this.ngOnInit();
    });
  }
}

