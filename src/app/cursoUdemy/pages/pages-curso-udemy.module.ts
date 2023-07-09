import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialCardComponent } from './material-card/material-card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedUdemyModule } from '../shared/sharedudemy.module';
import { MaterialDialogComponent } from './material-dialog/material-dialog.component';
import { MaterialInputComponent } from './material-input/material-input.component';
import { MaterialPanelExpansivoComponent } from './material-panel-expansivo/material-panel-expansivo.component';
import { MaterialTabsComponent } from './material-tabs/material-tabs.component';
import { PAGES_ROUTES } from 'src/app/pages/pages.routes';
import { PagesudemyComponent } from './pagesudemy.component';
import { SharedModule } from "../../shared/shared.module";
//material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MaterialButtonComponent } from './material-button/material-button.component';
import { ApirestComponent } from './apirest/apirest.component';
import { CateroriasComponent } from './apirest/caterorias/caterorias.component';
import { EditarComponent } from './apirest/categorias/editar/editar.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        PagesudemyComponent,
        MaterialCardComponent,
        MaterialDialogComponent,
        MaterialInputComponent,
        MaterialPanelExpansivoComponent,
        MaterialTabsComponent,
        MaterialButtonComponent,
        ApirestComponent,
        CateroriasComponent,
        EditarComponent
    ],
    exports: [
        PagesudemyComponent,
        MaterialCardComponent,
        MaterialDialogComponent,
        MaterialInputComponent,
        MaterialPanelExpansivoComponent,
        MaterialTabsComponent
    ],
    imports: [
        SharedUdemyModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PAGES_ROUTES,
        SharedModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatIconModule,
        HttpClientModule
    ]
})
export class PagesCursoUdemyModule { }
