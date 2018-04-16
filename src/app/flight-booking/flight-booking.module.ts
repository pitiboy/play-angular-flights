import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightService } from './flight-search/flight-service.service';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { PassengerSearchComponent } from './passenger-search/passenger-search.component';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { RouterModule } from '@angular/router';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { MockFlightService } from './__mock__/flight.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
  ],
  declarations: [
    FlightSearchComponent,
    PassengerSearchComponent,
    FlightEditComponent,
],
  providers: [
    FlightService
    // { provide: FlightService, useClass: MockFlightService } // TODO: mock
  ],
  exports: [
    FlightSearchComponent,
    PassengerSearchComponent,
    // SharedModule,
    FlightEditComponent,
  ]
})
export class FlightBookingModule { }
