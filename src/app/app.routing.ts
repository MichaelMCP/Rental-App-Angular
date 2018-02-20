import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/index';
import { AuthGuard } from './guards/index';
import {MyPropertiesComponent} from './my-properties/my-properties.component';
import {AllPropertiesComponent} from './all-properties/all-properties.component';
<<<<<<< HEAD
<<<<<<< HEAD
import {PaymentComponent} from './payment/payment.component';
import {AboutComponent} from './about/about.component';
=======
>>>>>>> d428cb31649055bb3aca3db495d46e21171c3462
=======
import {PaymentComponent} from './payment/payment.component';
import {AboutComponent} from './about/about.component';
>>>>>>> 588d434c1c42dda6d07592fe753b97b178130a04
import { EditUserComponent } from './edit-user/edit-user.component';
import { RatingComponent } from './rating/rating.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] , pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register-property', component: RegisterPropertyComponent },
    { path: 'my-properties', component: MyPropertiesComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'Properties', component: AllPropertiesComponent },
    { path: 'editUsers', component: EditUserComponent },
    { path: 'rating', component: RatingComponent },
    { path: 'about', component: AboutComponent },

    // otherwise redirect to home
    // { path: '**', redirectTo: '' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes) ],
    exports: [RouterModule]
})

export class AppRoutingModule {
}

// export const routing = RouterModule.forRoot(appRoutes);
