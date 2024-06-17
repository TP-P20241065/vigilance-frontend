import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Report } from '../api/report';

@Injectable()
export class ReportService {

    constructor(private http: HttpClient) { }

    getReportsSmall() {
        return this.http.get<any>('assets/demo/data/reports-small.json')
            .toPromise()
            .then(res => res.data as Report[])
            .then(data => data);
    }

    getReportsMedium() {
        return this.http.get<any>('assets/demo/data/reports-medium.json')
            .toPromise()
            .then(res => res.data as Report[])
            .then(data => data);
    }

    getReportsLarge() {
        return this.http.get<any>('assets/demo/data/reports-large.json')
            .toPromise()
            .then(res => res.data as Report[])
            .then(data => data);
    }
}
