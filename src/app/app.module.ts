import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

// used to create fake backend
<<<<<<< HEAD
<<<<<<< HEAD
// import { fakeBackendProvider } from './helpers/index';
=======
>>>>>>> c777d037f751a0b89ab80534207379fc24ab95a0
=======
>>>>>>> 5570af183bda61f93b9929882d6bc5b4ee109746

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';
// import { AppRoutingModule } from './app.component';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
// import { JwtInterceptor } from './helpers/index';
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/register-property.component';

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
        RegisterPropertyComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

<<<<<<< HEAD
<<<<<<< HEAD
        // provider used to create fake backend
        // fakeBackendProvider
=======
>>>>>>> c777d037f751a0b89ab80534207379fc24ab95a0
=======
>>>>>>> 5570af183bda61f93b9929882d6bc5b4ee109746
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
