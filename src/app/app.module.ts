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
import { MyPropertiesService } from './my-properties.service';
import { AllPropertiesService } from './all-properties.service';
=======
import {MyPropertiesService} from './services/my-properties.service';
import {EditUserService} from './services/edit-user.service'
import {AllPropertiesService} from './all-properties.service';
>>>>>>> viewAllProperties
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/register-property.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { PaymentComponent } from './payment/payment.component';
=======
import { AboutComponent } from './about/about.component';
>>>>>>> 2d1270367f50baf5a659a31c68cf235747fd6d75
=======
import { AboutComponent } from './about/about.component';
=======
import { EditUserComponent } from './edit-user/edit-user.component';
>>>>>>> viewAllProperties
>>>>>>> 83c32eff196f7198e6053a7ab18aa23d819ebb0a

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
<<<<<<< HEAD
<<<<<<< HEAD
        PaymentComponent
=======
        AboutComponent
>>>>>>> 2d1270367f50baf5a659a31c68cf235747fd6d75
=======
        AboutComponent
=======
        EditUserComponent
>>>>>>> viewAllProperties
>>>>>>> 83c32eff196f7198e6053a7ab18aa23d819ebb0a
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        MyPropertiesService,
        AllPropertiesService,
        EditUserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
