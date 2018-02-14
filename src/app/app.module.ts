import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

<<<<<<< HEAD
=======
// used to create fake backend

>>>>>>> 813bab7d0c0c20928d8f9fa2524e85a648b87ca1
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { MyPropertiesService } from './my-properties.service';

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
        MyPropertiesComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

<<<<<<< HEAD
        MyPropertiesService
=======
>>>>>>> 813bab7d0c0c20928d8f9fa2524e85a648b87ca1
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
