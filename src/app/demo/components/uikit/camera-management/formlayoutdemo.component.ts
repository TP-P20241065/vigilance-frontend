import {Component, OnInit} from '@angular/core';
import {Camera} from "../../../api/camera";
import {ConfirmationService, MessageService} from 'primeng/api';
import {CameraService} from "../../../service/camera.service";

@Component({
    templateUrl: './formlayoutdemo.component.html',
    providers: [MessageService, ConfirmationService, CameraService],
})
export class FormLayoutDemoComponent implements OnInit {
    searchTerm: string = '';
    cameraDialog: boolean = false;
    submitted: boolean = false;
    dataCamera!: Camera[];
    camera!: Camera;
    items: any[];
    selectedCameras!: Camera[] | null;
    loading: boolean = true;  // Inicializar a true mientras se cargan los datos

    constructor(
        private cameraService: CameraService,
        private messageService: MessageService,
        private confirmationService: ConfirmationService
    ) {
        this.camera = {} as Camera;
        this.dataCamera = [];
    }

    ngOnInit() {
        this.getAllCameras();
    }

    getAllCameras() {
        this.loading = true;  // Indicar que la carga ha comenzado
        this.cameraService.getAll().subscribe(
            (response: any) => {
                this.dataCamera = response;
                this.loading = false;  // Indicar que la carga ha terminado
            },
            (error) => {
                console.error('Error al obtener las cámaras:', error);  // Manejar el error si ocurre
                this.loading = false;  // Asegurar que loading sea falso en caso de error
            }
        );
    }

    cancel() {
        this.cameraDialog = false;
    }

    openNew() {
        this.camera = {} as Camera;
        this.submitted = false;
        this.cameraDialog = true;
    }

    editCamera(camera: Camera) {
        this.camera = {...camera};
        this.cameraDialog = true;
    }

    addCamera() {
        const newCamera: Camera = {
            Id: 0,
            Name: this.camera.Name,
            Location: this.camera.Location,
            UnitId: this.camera.UnitId,
        };

        this.cameraService.create(newCamera).subscribe(
            () => {
                this.getAllCameras();  // Volver a cargar las cámaras después de agregar una nueva
                this.cameraDialog = false;  // Cerrar el diálogo
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Camera Created',
                    life: 3000
                });
            },
            (error) => {
                console.error('Error al crear la cámara:', error);  // Manejar el error
            }
        );
    }

    updateCamera(camera: Camera) {
        this.dataCamera[this.findIndexById(this.camera.Id)] = this.camera;
        this.cameraService.update(camera.Id!, camera).subscribe(
            () => {
                this.getAllCameras();  // Volver a cargar las cámaras después de actualizar
                this.cameraDialog = false;  // Cerrar el diálogo
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Camera Updated',
                    life: 3000
                });
            },
            (error) => {
                console.error('Error al actualizar la cámara:', error);  // Manejar el error
            }
        );
    }

    saveCamera() {
        this.submitted = true;
        if (this.camera.Name?.trim()) {
            if (this.camera.Id) {
                this.updateCamera(this.camera);
            } else {
                this.addCamera();
            }
            this.cameraDialog = false;
            this.camera = {} as Camera;
        } else {
            alert('No has ingresado el nombre de la cámara.');
        }
    }

    findIndexById(id: number): number {
        let index = -1;
        for (let i = 0; i < this.dataCamera.length; i++) {
            if (this.dataCamera[i].Id === id) {
                index = i;
                break;
            }
        }
        return index;
    }

    selectedReport: any;

    dropdownItems = [
        {label: 'Unidad 0', value: 0},
        {label: 'Unidad 1', value: 1},
        {label: 'Unidad 2', value: 2}
    ];

    confirm1(event: Event, camera: Camera) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to delete the selected camera?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.cameraService.delete(camera.Id!).subscribe(() => {
                        this.dataCamera = this.dataCamera.filter((o: Camera) => o.Id !== camera.Id);
                        this.messageService.add({
                            severity: 'info',
                            summary: 'Confirmed',
                            detail: 'Camera Deleted',
                            life: 3000
                        });
                    },
                    (error) => {
                        console.error('Error al eliminar la cámara:', error);  // Manejar el error
                    });
            },
            reject: () => {
                this.messageService.add({
                    severity: 'error',
                    summary: 'Rejected',
                    detail: 'You have rejected',
                    life: 3000
                });
            }
        });
    }
}
