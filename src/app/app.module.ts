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
import { MyPropertiesService } from './my-properties.service';
import { AllPropertiesService } from './all-properties.service';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/register-property.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';

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
        AllPropertiesComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        MyPropertiesService,
        AllPropertiesService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
