import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplaydataComponent } from './user-crud/displaydata/displaydata.component';
import { EditdataComponent } from './user-crud/editdata/editdata.component';
import { UpdateComponent } from './user-crud/update/update.component';
import { ViewdataComponent } from './user-crud/viewdata/viewdata.component';

const routes: Routes = [
  { path: '', component: UpdateComponent },
  { path: 'viewdata', component: ViewdataComponent },
  { path: 'viewdata/editdata/:id', component: EditdataComponent },
  { path: 'displaydata', component: DisplaydataComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
