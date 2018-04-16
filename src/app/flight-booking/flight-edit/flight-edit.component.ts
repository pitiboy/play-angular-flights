import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from '../flight-search/flight-service.service';
import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import {switchMap} from 'rxjs/operators';


@Component({
  selector: 'flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})

export class FlightEditComponent implements OnInit {
  // id: string;
  selectedFlight: Flight;
  message: string = '';
  showDetails: string;
  
  constructor(private route: ActivatedRoute, private flightService: FlightService) { }

  ngOnInit() {
    console.log('ngOnInit');
    this.route.params
      .pipe(switchMap(params => this.flightService.findById(params.id)))
      .subscribe(
        (flight: Flight) => { this.selectedFlight = flight; this.message = ''; },
        // flight => {
        //   console.log('params', flight);
        //   this.id = flight.id;
        //   this.showDetails = flight.id;
        // }
      );
  }

}
