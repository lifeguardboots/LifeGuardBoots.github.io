import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { ListarInicioComponent } from '../inicio/listar-inicio/listar-inicio.component';



import { ListarRequisitosComponent } from '../requisito/listar-requisitos/listar-requisitos.component';
import { CrearRequisitoComponent } from '../requisito/crear-requisito/crear-requisito.component';
import { RequisitoDetailComponent } from '../requisito/requisito-detail/requisito-detail.component';
import { ModificarRequisitoComponent } from '../requisito/modificar-requisito/modificar-requisito.component';
import { MostrarmapaComponent } from '../map/mostrarmapa/mostrarmapa.component';




const routes: Routes = [

    {
        path: 'home',
        component: ListarInicioComponent
    },
    {
        path: 'localizacion',
        component: MostrarmapaComponent
    },
    {
        path: 'objetivos/new',
        component: MostrarmapaComponent
    },
    {
        path: 'objetivos/:id',
        component: MostrarmapaComponent
    },
    {
        path: 'objetivos/:id/update',
        component: MostrarmapaComponent
    },
    {
        path: 'requisitos', component: ListarRequisitosComponent
    },
    {
        path: 'requisitos/new', component: CrearRequisitoComponent
    },
    {
        path: 'requisitos/:id', component: RequisitoDetailComponent, runGuardsAndResolvers : 'always'
    },
    {
        path: 'requisitos/:id/modificar', component: ModificarRequisitoComponent
    },
    {
        path: '', redirectTo: 'home', pathMatch: 'full'
    },
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}