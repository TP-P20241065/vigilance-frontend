import { Component, OnInit } from '@angular/core';
import {Report} from "../../../api/report";
import {ReportService} from "../../../service/report.service";

@Component({
    templateUrl: './invalidstatedemo.component.html'
})
export class InvalidStateDemoComponent implements OnInit {
    searchTerm: string = '';
    dataIncidents!:Report[];
    items: any[] = [ ];

    constructor(private reportService: ReportService) {
        this.dataIncidents=[]
    }

    ngOnInit() {
        this.getAllReport()

    }


    private getAllReport() {
        this.reportService.getAll().subscribe((response: any) => {
                this.dataIncidents = response;
                console.log(this.dataIncidents.length);
                console.log(this.dataIncidents.at(0));

            },
            (error) => {
                console.error('Error al obtener las cámaras:', error); // Maneja el error si ocurre

            })
    }
}
