import { Injectable } from '@angular/core';
import axios, { AxiosResponse } from 'axios';
import { Observable, from } from 'rxjs'; // Importa 'from' desde RxJS

@Injectable({
    providedIn: 'root',
})
export class AgencyService {
    private apiUrl = 'https://localhost:7209/api';

    constructor() { }

    getAll() {
        return (axios.get(this.apiUrl + '/agency'));
    }

    create(agencyData: any) {
        return (axios.post(this.apiUrl + '/Agency', agencyData));
    }

    update(agencyId: number, agencyData: any): Observable<AxiosResponse> {
        return from(axios.put(this.apiUrl + `/Agency/${agencyId}`, agencyData));
    }

    delete(agencyId: number): Observable<AxiosResponse> {
        return from(axios.delete(this.apiUrl + `/Agency/${agencyId}`));
    }

    getById(agencyId: number): Observable<AxiosResponse> {
        return from(axios.get(this.apiUrl + `/Agency/${agencyId}`));
    }
}
