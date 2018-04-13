import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight-service.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    FlightSearchComponent,
  ],
  providers: [
    FlightService
    // { provide: FlightService, useClass: FlightService } // TODO: mock
  ],
  exports: [
    FlightSearchComponent,
    SharedModule,
  ]
})
export class FlightBookingModule { }
