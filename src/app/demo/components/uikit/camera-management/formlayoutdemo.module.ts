import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormLayoutDemoComponent } from './formlayoutdemo.component';
import { FormLayoutDemoRoutingModule } from './formlayoutdemo-routing.module';
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
import {CheckboxModule} from "primeng/checkbox";
import {RippleModule} from "primeng/ripple";
import {ContextMenuModule} from "primeng/contextmenu";
import {TableModule} from "primeng/table";
import {ToolbarModule} from "primeng/toolbar";
import {SplitButtonModule} from "primeng/splitbutton";
import {DialogModule} from "primeng/dialog";
import {TagModule} from "primeng/tag";
import {ToastModule} from "primeng/toast";
import {ConfirmDialogModule} from "primeng/confirmdialog";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FormLayoutDemoRoutingModule,
        AutoCompleteModule,
        CalendarModule,
        ChipsModule,
        DropdownModule,
        InputMaskModule,
        InputNumberModule,
        CascadeSelectModule,
        MultiSelectModule,
        InputTextareaModule,
        InputTextModule,
        CheckboxModule,
        RippleModule,
        ContextMenuModule,
        TableModule,
        ToolbarModule,
        SplitButtonModule,
        DialogModule,
        TagModule,
        ToastModule,
        ConfirmDialogModule
    ],
	declarations: [FormLayoutDemoComponent]
})
export class FormLayoutDemoModule { }
