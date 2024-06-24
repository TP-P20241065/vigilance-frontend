import { Component, OnInit } from '@angular/core';
import {ConfirmationService, MessageService, SelectItem} from 'primeng/api';
import {UserService} from "../../../service/user.service";
import {User} from "../../../api/user";
import {CheckboxChangeEvent} from "primeng/checkbox";
import {Camera} from "../../../api/camera";


@Component({
    templateUrl: './inputdemo.component.html'
})
export class InputDemoComponent implements OnInit {

    checkboxValues: number[] = [3, 6];
    dataUser!:User[];
    user!:User;
    userDialog: boolean = false;
    loading: boolean = true;
    searchTerm: string='';
    isChecked: boolean = true; // Variable para controlar el estado del checkbox
    selectedNumbers: number[] = [];

    dropdownHeadquarters = [
        {label: 'Principal ', value: 0},
        {label: 'Sede 1', value: 1},
        {label: 'Sede 2', value: 2}
    ];




    constructor(private userService: UserService,
                private messageService: MessageService,
                private confirmationService: ConfirmationService,) {
        this.user= {} as User;
        this.dataUser=[];
    }


    ngOnInit() {
        this.getAllUsers();

    }
    // @ts-ignore
    getPermission(permission: any):string    {
        const length = permission.length;
        switch (true) {
            case length <=2:
                return "success"
            case length ===3:
                return "primary"
            case length >=4:
                return "danger"

        }
    }

    private getAllUsers() {
        this.loading = true;
        this.userService.getAll().subscribe(
            (response: any) => {
                this.dataUser = response;
                this.loading = false;  // Indicar que la carga ha terminado
            },
            (error) => {
                console.error('Error al obtener los ususarios :', error);  // Manejar el error si ocurre
                this.loading = false;  // Asegurar que loading sea falso en caso de error
            }
        );
    }

    openNew() {
        this.user = {} as User;
        this.userDialog = true;
    }

    editUser(user: User) {
        this.user = {...user};
        this.user.Permissions = [...user.Permissions];
        this.userDialog = true;
    }

    deleteUser($event: MouseEvent, user: any) {

    }

    cancel() {
        this.userDialog = false;
    }

    saveUser() {
        if (this.user.Username?.trim()) {
            if (this.user.Id) {
                //this.updateCamera(this.user);
            } else {
                this.addUser();
            }
            this.userDialog = false;
            this.user = {} as Camera;
        } else {
            alert('No has ingresado el nombre del usuario.');
        }
    }


    private addUser() {
        const newUser: User = {
            Id: 0,
            Username: this.user.Username,
            FirstName: this.user.FirstName,
            LastName: this.user.LastName,
            Email: this.user.Email,
            Headquarter: this.user.Headquarter,
            Permissions: this.user.Permissions,
        };

        this.userService.create(newUser).subscribe(
            () => {
                this.getAllUsers();  // Volver a cargar las cámaras después de agregar una nueva
                this.userDialog = false;  // Cerrar el diálogo
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Camera Created',
                    life: 3000
                });
            },
            (error) => {
                console.error('Error al crear el usuario:', error);  // Manejar el error
            }
        );
    }
}
