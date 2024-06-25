import { Component, OnInit } from '@angular/core';
import {Report} from "../../../api/report";
import {ReportService} from "../../../service/report.service";
import * as XLSX from 'xlsx';

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

    generateExcelReport() {
        // Verificar si hay datos para exportar
        if (this.dataIncidents.length === 0) {
            console.warn('No hay datos para exportar.');
            return;
        }
        console.log(this.dataIncidents.length);

        // Preparar los datos para exportar
        const data: any[] = [];

        this.dataIncidents.forEach(incident => {
            const rowData: any = {
                'Fecha': incident.DateTime,
                'Dirección': incident.Address,
                'Incidente': incident.Incident,
                'Enlace de rastreo': incident.TrackingLink,
                'Imagen': incident.Image
            };

            data.push(rowData);
        });

        // Crear un libro de trabajo nuevo en xlsx
        const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Incidencias');

        // Guardar el archivo Excel
        XLSX.writeFile(wb, 'reporte_incidencias.xlsx');
    }
}
