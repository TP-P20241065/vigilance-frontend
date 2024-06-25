import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import { environment } from '../../../environments/environment';

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
    login(email: string, password: string): Observable<T> {
        const params = new HttpParams()
            .set('grant_type', '')  // Deja el campo vacío si no se requiere valor
            .set('username', email)
            .set('password', password)
            .set('scope', '')  // Deja el campo vacío si no se requiere valor
            .set('client_id', '')  // Deja el campo vacío si no se requiere valor
            .set('client_secret', '');  // Deja el campo vacío si no se requiere valor

        return this.http.post<any>(`${this.basePath}/token/`, params.toString(), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        });
    }

    resetPassword(user_id: any): Observable<T> {
        console.log(user_id)
        return this.http.patch<T>( `${this.basePath}${user_id}`,this.httpOptions)
            .pipe( retry(2), catchError(this.handleError));
    }

    searchUserByEmail(email: any): Observable<T> {
        const params = new HttpParams().set('email', email);
            // URL completa con parámetros convertidos a cadena
        const url = `${this.basePath}search/?${params.toString()}`;

        return this.http.get<T>(
            url, this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError));
    }
}

