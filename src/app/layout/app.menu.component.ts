import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { LayoutService } from './service/app.layout.service';

@Component({
    selector: 'app-menu',
    templateUrl: './app.menu.component.html'
})
export class AppMenuComponent implements OnInit {

    model: any[] = [];

    constructor(public layoutService: LayoutService) { }

    ngOnInit() {
        this.model = [
            {
                label: 'Home',
                items: [
                    { label: 'Inicio', icon: 'pi pi-fw pi-home', routerLink: ['/'] }
                ]
            },
            {
                label: 'Gestión administrativa',
                items: [
                    { label: 'Gestión de cámaras', icon: 'pi pi-fw pi-camera', routerLink: ['/uikit/camera-management'] },
                    { label: 'Gestión de usuarios', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/user-management'] },
                    { label: 'Gestión de unidades', icon: 'pi pi-fw pi-users', routerLink: ['/uikit/unit-management'] },
                    { label: 'Reporte de incidencias', icon: 'pi pi-fw pi-file-excel', routerLink: ['/uikit/invalidstate'] },
                ]
            },
        ];
    }
}
