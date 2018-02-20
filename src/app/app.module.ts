import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
// import { JwtInterceptor } from './helpers/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
<<<<<<< HEAD
import { AllPropertiesService } from './all-properties.service';
import {MyPropertiesService} from './services/my-properties.service';
import {EditUserService} from './services/edit-user.service'
=======
import { MyPropertiesService } from './my-properties.service';
import { AllPropertiesService } from './all-properties.service';
import {MyPropertiesService} from './services/my-properties.service';
import {EditUserService} from './services/edit-user.service'
import {AllPropertiesService} from './all-properties.service';
>>>>>>> fe2ee4d0b5dbce0ecec634ef7b18d0a80fb3677e
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/register-property.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
<<<<<<< HEAD
=======
import { RegisterPropertyService } from './register-property.service';
>>>>>>> fe2ee4d0b5dbce0ecec634ef7b18d0a80fb3677e
import { AboutComponent } from './about/about.component';
import { EditUserComponent } from './edit-user/edit-user.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        RegisterPropertyComponent,
        MyPropertiesComponent,
        AllPropertiesComponent,
        AboutComponent,
        EditUserComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        MyPropertiesService,
        AllPropertiesService,
        RegisterPropertyService,
        EditUserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
