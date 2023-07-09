import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { RxjsComponent } from './rxjs/rxjs.component';
import { MaterialCardComponent } from '../cursoUdemy/pages/material-card/material-card.component';
import { MaterialDialogComponent } from '../cursoUdemy/pages/material-dialog/material-dialog.component';
import { MaterialInputComponent } from '../cursoUdemy/pages/material-input/material-input.component';
import { MaterialPanelExpansivoComponent } from '../cursoUdemy/pages/material-panel-expansivo/material-panel-expansivo.component';
import { MaterialTabsComponent } from '../cursoUdemy/pages/material-tabs/material-tabs.component';
import { PagesudemyComponent } from '../cursoUdemy/pages/pagesudemy.component';
import { ApirestComponent } from '../cursoUdemy/pages/apirest/apirest.component';
import { CateroriasComponent } from '../cursoUdemy/pages/apirest/caterorias/caterorias.component';
import { EditarComponent } from '../cursoUdemy/pages/apirest/categorias/editar/editar.component';

const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'DASHBOARD' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'PROGRESS' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'GRAFICAS' } },
            { path: 'account', component: AccoutSettingsComponent, data: { titulo: 'ACCOUNT' } },
            { path: 'rxjs', component: RxjsComponent, data: { titulo: 'RXJS' } },
            {
                path: 'material',
                component: PagesudemyComponent,
                data: { titulo: 'Material' },
                children: [
                    { path: 'material-botones', component: MaterialTabsComponent, data: { titulo: 'Material Botones' } },
                    { path: 'material-card', component: MaterialCardComponent, data: { titulo: 'Material Card' } },
                    { path: 'material-dialog', component: MaterialDialogComponent, data: { titulo: 'Material Dialog' } },
                    { path: 'material-input', component: MaterialInputComponent, data: { titulo: 'Material Input' } },
                    { path: 'material-panel-expansivo', component: MaterialPanelExpansivoComponent, data: { titulo: 'Material Panel Expansivo' } },
                    { path: 'material-tabs', component: MaterialTabsComponent, data: { titulo: 'Material Tabs' } }
                ]
            },
            {
                path: 'categorias',
                component: ApirestComponent,
                data: {titulo: 'Categorias'},
                children:[
                    {path: 'list-categorias', component: CateroriasComponent, data:{titulo: 'List Categorias'}},
                    {path: 'edit-categorias/:id', component: EditarComponent, data: {titulo: 'Editar categorias'}}
                ]
            },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);