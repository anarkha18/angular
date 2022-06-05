import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { ViewdataComponent } from './viewdata/viewdata.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EditdataComponent } from './editdata/editdata.component';
import { RouterModule } from '@angular/router';
import { DisplaydataComponent } from './displaydata/displaydata.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';



@NgModule({
  declarations: [
    UpdateComponent,
    ViewdataComponent,
    EditdataComponent,
    DisplaydataComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule

  ],
  exports: [
    UpdateComponent,
    ViewdataComponent,
    EditdataComponent,
    DisplaydataComponent
  ]
})
export class UserCrudModule { }
