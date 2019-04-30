import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxPermissionsModule } from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { InicioModule } from './inicio/inicio.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { environment_firebase } from '../environments/environment';
import { MapModule } from './map/map.module';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AgmCoreModule } from '@agm/core';
import { AlertComponent } from './components/alert/alert.component';
import { ReactiveFormsModule }    from '@angular/forms';

// used to create fake backend
import { fakeBackendProvider } from './helpers';

import { JwtInterceptor, ErrorInterceptor } from './helpers';
import { LoginModule } from './login/login.module';
import { RegisterModule } from './register/register.module';
import { SaludModule } from './salud/salud.module';


@NgModule({
    declarations: [
        AppComponent,
        AlertComponent,
    ],
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        InicioModule,
        SaludModule,
        MapModule,
        LoginModule,
        RegisterModule,
        AngularFireModule.initializeApp(environment_firebase.firebaseConfig, 'LifeGuardBoots'),
        AngularFireDatabaseModule,
        AgmCoreModule.forRoot({
            // please get your own API key here:
            // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
            apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
          })
    ],
    bootstrap: [AppComponent],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ]
})
export class AppModule { }
