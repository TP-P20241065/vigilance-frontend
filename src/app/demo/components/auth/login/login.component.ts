import {Component} from '@angular/core';
import {LayoutService} from 'src/app/layout/service/app.layout.service';
import {Auth} from "../../../api/auth";
import {AuthService} from "../service/auth.service";
import {MessageService} from "primeng/api";
import {Router} from '@angular/router';
import {UserService} from "../../../service/user.service";
import {User} from "../../../api/user";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform: scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        }
    `]
})
export class LoginComponent {
    user!: Auth;
    userRecovery!: User;
    request!: any;


    valCheck: string[] = ['remember'];

    password!: string;
    resetPasswordDialog: boolean = false;

    constructor(public layoutService: LayoutService,
                private authService: AuthService,
                private messageService: MessageService,
                private router: Router,
                private userService: UserService,) {
        this.userRecovery = {} as User;
        this.user = {} as Auth;
        this.request = []
    }

    login() {

        const userAuth: Auth = {
            username: this.user.username,
            password: this.user.password,
        };
        console.log(userAuth);
        this.authService.login(userAuth.username, userAuth.password).subscribe(
            data => {
                console.log('Login successful:', data);
                localStorage.setItem('token', data.access_token);
                this.messageService.add({
                    severity: 'success',
                    summary: 'Successful',
                    detail: 'Camera Created',
                    life: 3000
                });
                this.router.navigate(['/home'])
            },
            (error) => {
                console.error('Error al iniciar sesion:', error);  // Manejar el error
                this.messageService.add({
                    severity: 'warning',
                    summary: 'Error',
                    detail: 'correo o contraseña incorrecta',
                    life: 3000
                });
            }
        )


    }

    cancel() {
        this.resetPasswordDialog = false;
    }

    async resetPassword() {
        console.log("1:", this.user.username);
        await this.userByEmail(this.user.username);
        console.log('el usuario es:', this.userRecovery);

        if (this.userRecovery) {
            this.userService.resetPassword(this.userRecovery.Id).subscribe(
                (response: any) => {
                    this.request = response;
                    console.log(this.request);
                    this.resetPasswordDialog = false;
                    this.messageService.add({
                        severity: 'successful',
                        summary: 'exitoso',
                        detail: 'revisar correo',
                        life: 3000
                    })
                },
                error => {
                    this.messageService.add({
                        severity: 'info',
                        summary: 'Error',
                        detail: 'Correo no registrado',
                        life: 3000
                    });
                    console.error('Error al buscar correo', error);
                }
            );
        } else {
            this.messageService.add({
                severity: 'info',
                summary: 'Error',
                detail: 'Usuario no encontrado',
                life: 3000
            });
            console.error('Usuario no encontrado');
        }
    }

    private userByEmail(email: string): Promise<void> {
        return new Promise((resolve, reject) => {
            this.userService.searchUserByEmail(email).subscribe(
                response => {
                    console.log('user ubicado:', response[0]);
                    this.userRecovery = response[0];
                    resolve();
                },
                error => {
                    console.error('Error al buscar usuario por email', error);
                    reject(error);
                }
            );
        });
    }

    changePassword() {
        this.resetPasswordDialog = true;
    }
}
