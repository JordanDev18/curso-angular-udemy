import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { Breadcrumb1sComponent } from './breadcrumbs/breadcrumbs.component';




@NgModule({
    imports:[
        RouterModule,
        CommonModule
    ],
    declarations: [

        SidebarComponent,
        Breadcrumb1sComponent

    ],
    exports: [

        SidebarComponent,
        Breadcrumb1sComponent

    ]
})
export class SharedUdemyModule { }
