import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InvalidStateDemoComponent } from './invalidstatedemo.component';
import { InvalidStateDemoRoutingModule } from './invalidstatedemo-routing.module';
import { AutoCompleteModule } from "primeng/autocomplete";
import { CalendarModule } from "primeng/calendar";
import { ChipsModule } from "primeng/chips";
import { DropdownModule } from "primeng/dropdown";
import { InputMaskModule } from "primeng/inputmask";
import { InputNumberModule } from "primeng/inputnumber";
import { CascadeSelectModule } from "primeng/cascadeselect";
import { MultiSelectModule } from "primeng/multiselect";
import { InputTextareaModule } from "primeng/inputtextarea";
import { InputTextModule } from "primeng/inputtext";
import { PasswordModule } from "primeng/password";
import {ContextMenuModule} from "primeng/contextmenu";
import {TableModule} from "primeng/table";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {DialogModule} from "primeng/dialog";
import {RippleModule} from "primeng/ripple";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        InvalidStateDemoRoutingModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        PasswordModule,
        InputTextareaModule,
        InputTextModule,
        ContextMenuModule,
        TableModule,
        ConfirmDialogModule,
        DialogModule,
        RippleModule,
        TagModule,
        ToastModule
    ],
	declarations: [InvalidStateDemoComponent]
})
export class InvalidStateDemoModule { }
