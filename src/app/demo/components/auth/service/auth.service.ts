import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Auth} from "../../../api/auth";
import {TemplateService} from "../../../../shared/services/template.service";
import {catchError, Observable, retry} from "rxjs";
import {User} from "../../../api/user";

@Injectable({
    providedIn: 'root'
})
export class AuthService extends TemplateService<Auth>{

    constructor(http: HttpClient) {
        super(http);
        this.basePath = 'https://monitoring-backend-production-8dd2.up.railway.app/api';
    }   // API ficticia this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/suppliers';



}
