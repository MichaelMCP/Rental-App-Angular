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
import {MyPropertiesService} from './services/my-properties.service';
import {EditUserService} from './services/edit-user.service';
import {AllPropertiesService} from './all-properties.service';
import {RatingService} from './services/rating.service';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/register-property.component';
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { AllPropertiesComponent } from './all-properties/all-properties.component';
<<<<<<< HEAD
<<<<<<< HEAD
import { PaymentComponent } from './payment/payment.component';
import { PaymentinfoService } from './services/paymentinfo.service';
=======
import { EditUserComponent } from './edit-user/edit-user.component';
import { RatingComponent } from './rating/rating.component';
>>>>>>> d428cb31649055bb3aca3db495d46e21171c3462
=======
import { PaymentComponent } from './payment/payment.component';
import { PaymentinfoService } from './services/paymentinfo.service';
import { EditUserComponent } from './edit-user/edit-user.component';
import { RatingComponent } from './rating/rating.component';
>>>>>>> 588d434c1c42dda6d07592fe753b97b178130a04
import { RegisterPropertyService } from './register-property.service';
import { AboutComponent } from './about/about.component';

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
        PaymentComponent,
=======
        EditUserComponent,
        RatingComponent,
>>>>>>> d428cb31649055bb3aca3db495d46e21171c3462
=======
        PaymentComponent,
>>>>>>> 588d434c1c42dda6d07592fe753b97b178130a04
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
<<<<<<< HEAD
<<<<<<< HEAD
        PaymentinfoService,
=======
        EditUserService,
        RatingService,
>>>>>>> d428cb31649055bb3aca3db495d46e21171c3462
=======
        PaymentinfoService,
        EditUserService,
        RatingService,
>>>>>>> 588d434c1c42dda6d07592fe753b97b178130a04
        RegisterPropertyService,
        EditUserService
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }
