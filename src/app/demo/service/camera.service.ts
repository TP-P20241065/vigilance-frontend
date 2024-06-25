import { Injectable } from '@angular/core';
import {Camera} from "../api/camera";
import {TemplateService} from "../../shared/services/template.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CameraService extends TemplateService<Camera>{

    constructor(http: HttpClient) {
        super(http);
        this.basePath = 'https://monitoring-backend-production-8dd2.up.railway.app/api/cameras/';
        // API ficticia this.basePath = 'https://mockend.com/Ronald-Delgado-Del-Castillo/urprovider/suppliers';
    }
}
