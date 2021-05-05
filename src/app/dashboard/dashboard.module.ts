import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StundentComponent } from './stundent/stundent.component';
import { DashboardRoutingModule } from './stundent/dashboard-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [StundentComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],

})
export class DashboardModule { }
