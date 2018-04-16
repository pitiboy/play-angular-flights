import { Injectable } from '@angular/core';
import { HttpParams, HttpHeaders, HttpClient } from '@angular/common/http';
import { Flight } from '../../entities/flight';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class FlightService { // TODO rename to flight.service.ts
    url: string = 'http://www.angular.at/api/flight';
    headers: HttpHeaders;

    constructor(private http: HttpClient) {
        this.headers = new HttpHeaders()
            .set('Accept', 'application/json');
    }

    
    find(from: string, to: string): Observable<Flight []> {
        const params = new HttpParams()
            .set('from', from)
            .set('to', to);

        const response = this.http.get<Flight[]>(this.url, { headers: this.headers, params });

        response.subscribe(
            (flights: Flight []) => console.debug('got flights: ', flights),
            err =>  console.error('Houston, we have a problem', err)
        )

        return response;

    }

    save(flight: Flight): Observable<Flight> {
        return this.http.post<Flight>(this.url, flight, { headers: this.headers });
    }

    
    findById(id: number): Observable<Flight> {
        const params = new HttpParams()
            .set('id', `${id}`);

        return this.http.get<Flight>(this.url, { headers: this.headers, params });
    }
}
