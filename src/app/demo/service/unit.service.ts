import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Report} from "../api/report";
import {TemplateService} from "../../shared/services/template.service";

@Injectable({
    providedIn: 'root'
})
export class UnitService extends TemplateService<Report>{

    constructor(http: HttpClient) {
        super(http);
        this.basePath = 'https://monitoring-backend-production-8dd2.up.railway.app/api/units/';
        // API ficticia this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/suppliers';
    }
}
