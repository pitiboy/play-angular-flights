import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs/Observable';
// import 'rxjs/add/observable/fromArray';

import mockflights from '../../../assets/json/flights.json';

@Injectable()
export class MockFlightService { // TODO rename to flight.service.ts
    url: string = '/assets/json/flights.json';

    constructor(private http: HttpClient) {
    }


    find(from: string, to: string): Observable<Flight[]> {

        const response = this.http.get<Flight[]>(this.url);

        response.subscribe(
            (flights: Flight[]) =>  console.debug('got flights: ', flights),
            err => console.error('Houston, we have a problem', err)
        )

        return response;

    }

    save(flight: Flight): Observable<Flight> {
        return this.http.post<Flight>(this.url, flight);
    }
    
    
    findById(id: number): Observable<Flight> {
        console.log('findById');
        // this.find('', '').subscribe(
        //     (flights: Flight[]) => console.debug('got first flight: ', flights[0]),
        // );
        // Observable.of(mockflights[0]);
        Observable.create(42).subscribe(function (x) { console.log('FINDBY', x); });


        return Observable.create(mockflights[0]);
        // return this.http.get<Flight>(this.url);
    }
}
