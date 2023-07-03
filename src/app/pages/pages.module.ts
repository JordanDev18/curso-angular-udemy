
import { NgModule } from '@angular/core';
import { PAGES_ROUTES } from './pages.routes';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';


// ng2-charts
import { NgChartsModule } from 'ng2-charts';

import { PagesComponent } from './pages.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';


// temporal
import { CommonModule } from '@angular/common';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { PagesCursoUdemyModule } from '../cursoUdemy/pages/pages-curso-udemy.module';
import { SharedUdemyModule } from "../cursoUdemy/shared/sharedudemy.module";
import { SharedModule } from "../shared/shared.module";
import { ValidaSelectDirective } from '../validaciones/valida-select.directive';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';



@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccoutSettingsComponent,
        RxjsComponent,
        ValidaSelectDirective
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        AccoutSettingsComponent
    ],
    imports: [
        PAGES_ROUTES,
        FormsModule,
        ReactiveFormsModule,
        NgChartsModule,
        CommonModule,
        PagesCursoUdemyModule,
        SharedModule,
        SharedUdemyModule, 
    ]
})
export class PagesModule { }
