import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ForgottenPasswordRoutingModule } from './forgottenpassword-routing.module';
import { ForgottenPasswordComponent } from './forgottenpassword.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
    imports: [
        CommonModule,
        ForgottenPasswordRoutingModule,
        ButtonModule,
        CheckboxModule,
        InputTextModule,
        FormsModule,
        PasswordModule
    ],
    declarations: [ForgottenPasswordComponent]
})
export class ForgottenPasswordModule { }
