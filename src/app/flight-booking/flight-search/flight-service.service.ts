import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../entities/flight';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightService {

    constructor(private http: HttpClient) { }

    find(from: string, to: string): Observable<Flight []> {
        const url = 'http://www.angular.at/api/flight';

        const params = new HttpParams()
            .set('from', from)
            .set('to', to);

        const headers = new HttpHeaders()
            .set('Accept', 'javascript/json');

        const response = this.http.get<Flight[]>(url, { headers, params });

        response.subscribe(
            (flights: Flight []) => console.debug('got flights: ', flights),
            err =>  console.error('Houston, we have a problem', err)
        )

        return response;

    }
}
