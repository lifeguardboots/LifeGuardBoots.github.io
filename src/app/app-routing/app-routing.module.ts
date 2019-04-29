import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { ListarInicioComponent } from '../inicio/listar-inicio/listar-inicio.component';


import { MostrarmapaComponent } from '../map/mostrarmapa/mostrarmapa.component';
import { AuthGuard } from '../guards/';
import { LoginComponent } from '../login/login/login.component';
import { RegistroComponent } from '../register/registro/registro.component';



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
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegistroComponent },
    {
        path: '', redirectTo: 'home', pathMatch: 'full', canActivate: [AuthGuard] 
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