import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { ListarInicioComponent } from '../inicio/listar-inicio/listar-inicio.component';


import { MostrarmapaComponent } from '../map/mostrarmapa/mostrarmapa.component';
import { AuthGuard } from '../guards/';
import { LoginComponent } from '../login/login/login.component';
import { RegistroComponent } from '../register/registro/registro.component';
import { ListarSaludComponent } from '../salud/listar-salud/listar-salud.component';
import { ListarHistorialComponent } from '../historial/listar-historial/listar-historial.component';
import { ListarAlertasComponent } from '../alertas/listar-alertas/listar-alertas.component';
import { HistorialDetailComponent } from '../historial/historial-detail/historial-detail.component';



const routes: Routes = [

    {
        path: 'home',
        component: ListarInicioComponent
    },
    {
        path: 'peloton1',
        component: MostrarmapaComponent
    },
    {
        path: 'peloton2',
        component: MostrarmapaComponent
    },
    {
        path: 'signos1',
        component: ListarSaludComponent
    },
    {
        path: 'signos2',
        component: ListarSaludComponent
    },
    {
        path: 'historial',
        component: ListarHistorialComponent
    },
    {
        path: 'historial/id',
        component: HistorialDetailComponent
    },
    {
        path: 'alertas',
        component: ListarAlertasComponent
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