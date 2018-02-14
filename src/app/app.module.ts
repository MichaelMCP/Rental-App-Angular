import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule} from '@angular/common/http';

<<<<<<< HEAD
=======
// used to create fake backend
<<<<<<< HEAD
<<<<<<< HEAD
// import { fakeBackendProvider } from './helpers/index';
=======
>>>>>>> c777d037f751a0b89ab80534207379fc24ab95a0
=======
>>>>>>> 5570af183bda61f93b9929882d6bc5b4ee109746

>>>>>>> 644de7574966ce430477d08aa078f6f12cbccd95
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing';

import { AlertComponent } from './directives/index';
import { AuthGuard } from './guards/index';
<<<<<<< HEAD
=======
// import { JwtInterceptor } from './helpers/index';
>>>>>>> 644de7574966ce430477d08aa078f6f12cbccd95
import { AlertService, AuthenticationService, UserService } from './services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
<<<<<<< HEAD
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { MyPropertiesService } from './my-properties.service';
=======
import { RegisterPropertyComponent } from './register-property/register-property.component';
>>>>>>> 644de7574966ce430477d08aa078f6f12cbccd95

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
<<<<<<< HEAD
        MyPropertiesComponent
=======
        RegisterPropertyComponent
>>>>>>> 644de7574966ce430477d08aa078f6f12cbccd95
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,
        MyPropertiesService

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
