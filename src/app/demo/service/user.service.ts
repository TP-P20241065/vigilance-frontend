import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {TemplateService} from "../../shared/services/template.service";
import {User} from "../api/user";

@Injectable({
    providedIn: 'root'
})
export class UserService extends TemplateService<User>{

    constructor(http: HttpClient) {
        super(http);
        this.basePath = 'https://monitoring-backend-production-8dd2.up.railway.app/api/users/';
        // API ficticia this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/suppliers';
    }
}
