import {Component, OnInit} from '@angular/core';
import {UnitService} from "../../../service/unit.service";
import {Unit} from "../../../api/unit";
import {ConfirmationService, MessageService} from "primeng/api";
import {Camera} from "../../../api/camera";


@Component({
    templateUrl: './floatlabeldemo.component.html',
})
export class FloatLabelDemoComponent implements OnInit {
    searchTerm: string = '';
    dataUnit!: Unit[];
    unit!: Unit;
    unitDialog: boolean = false;
    //submitted: boolean = false;
    loading: boolean = true;  // Inicializar a true mientras se cargan los datos

    constructor(private unitService: UnitService,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,) {
        this.unit = {} as Unit;
        this.dataUnit = []
    }

    ngOnInit() {
        this.getAllUnits();
    }

    getAllUnits() {
        this.loading = true;
        this.unitService.getAll().subscribe(
            (response: any) => {
                this.dataUnit = response;
                this.loading = false;  // Indicar que la carga ha terminado
            },
            (error) => {
                console.error('Error al obtener las unidades :', error);  // Manejar el error si ocurre
                this.loading = false;  // Asegurar que loading sea falso en caso de error
            }
        );
    }


    openNew() {
        this.unit = {} as Unit;
        //this.submitted = false;
        this.unitDialog = true;
    }

    cancel() {
        this.unitDialog = false;
    }

    saveUnit() {
        //this.submitted = true;
        if (this.unit.Driver?.trim()) {
            if (this.unit.Id) {
                this.updateUnit(this.unit);

            } else {
                this.addUnit();
            }
            this.unitDialog = false;
            this.unit = {} as Unit;
        } else {
            alert('No has ingresado el conductor de la unidad.');
        }
    }


    editUnit(unit: Unit) {
        this.unit = {...unit} //obtiene el valor de la unidad selecionada
        this.unitDialog = true;
    }

    deleteUnit(event: Event, unit: Unit) {
        this.confirmationService.confirm({
            target: event.target as EventTarget,
            message: 'Are you sure you want to delete the selected unidad?',
            header: 'Confirm',
            icon: 'pi pi-exclamation-triangle',
            accept: () => {
                this.unitService.delete(unit.Id).subscribe(() => {
                        this.dataUnit = this.dataUnit.filter((o: Unit) => o.Id !== unit.Id);
                        this.messageService.add({
                            severity: 'info',
                            summary: 'Confirmed',
                            detail: 'Camera Deleted',
                            life: 3000
                        })
                    },
                    (error) => {
                        console.error('Error al eliminar la unidad:', error);  // Manejar el error
                    }
                );
            }
        })

    }

    private updateUnit(unit: Unit) {
        //this.dataUnit[this.findIndexById(this.unit.Id)] = this.unit;
        this.unitService.update(unit.Id, unit).subscribe(
            () => {
                this.getAllUnits();
                this.unitDialog = false;
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Camera Updated',
                    life: 3000
                })
            }, (error) => {
                console.error('Error al actualizar la unidad:', error);  // Manejar el error
            }
        )
    }

    private addUnit() {
        const newUnit: Unit = {
            Id: 0,
            Driver: this.unit.Driver,
        };
        this.unitService.create(newUnit).subscribe(() => {
                this.getAllUnits();
                this.unitDialog = false;
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

    private findIndexById(id: number) {
        let index = -1;
        for (let i = 0; i < this.dataUnit.length; i++) {
            if (this.dataUnit[i].Id === id) {
                index = i;
                break;
            }
        }
        return index;
    }
}
