import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ForgottenPasswordComponent } from './forgottenpassword.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: ForgottenPasswordComponent }
    ])],
    exports: [RouterModule]
})
export class ForgottenPasswordRoutingModule { }
