import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class TemplateService<T> {

    //basePath = 'http://localhost:3000/resources';
    basePath = 'https://monitoring-backend-production-8dd2.up.railway.app/api'
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
        })
    };

    constructor(private http: HttpClient) { }

    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.log(`An error occurred: ${error.error.message}`);
        } else {
            console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
        }
        return throwError(() => new Error('Something happened with request, please try again later'));
    }

    create(item: any): Observable<T> {
        return this.http.post<T>(
            this.basePath,
            JSON.stringify(item),
            this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    getById(id: any): Observable<T> {
        return this.http.get<T>(
            `${this.basePath}/${id}`,
            this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }

    getAll(): Observable<T> {
        return this.http.get<T>(this.basePath, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    delete(id: any) {
        return this.http.delete(`${this.basePath}${id}`, this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }

    update(id: any, item: any): Observable<T> {
        return this.http.put<T>(`${this.basePath}${id}`,
            JSON.stringify(item), this.httpOptions)
            .pipe(retry(2), catchError(this.handleError));
    }
}
