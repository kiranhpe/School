import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StundentComponent } from './stundent.component';
const routes: Routes = [
  {
    path:'',
    component:StundentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
