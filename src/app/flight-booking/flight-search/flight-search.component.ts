import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight-service.service';

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg';
  to: string = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;

  constructor(private flightService: FlightService) { 
  }

  ngOnInit() {
  }

  search(): void {
    
    this.flightService.find(this.from, this.to) 
      .subscribe((flights: Flight[]) => {
        this.flights = flights;
    },
  );
  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }

}
