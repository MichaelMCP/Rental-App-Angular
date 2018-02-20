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
=======
import {AboutComponent} from './about/about.component';
>>>>>>> 2d1270367f50baf5a659a31c68cf235747fd6d75
=======
import {AboutComponent} from './about/about.component';
=======
import { EditUserComponent } from './edit-user/edit-user.component';
>>>>>>> viewAllProperties
>>>>>>> 83c32eff196f7198e6053a7ab18aa23d819ebb0a

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] , pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'home', component: HomeComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'register-property', component: RegisterPropertyComponent },
    { path: 'my-properties', component: MyPropertiesComponent },
<<<<<<< HEAD
    { path: 'payment', component: PaymentComponent },
    { path: 'Properties', component: AllPropertiesComponent }
=======
    { path: 'Properties', component: AllPropertiesComponent },
<<<<<<< HEAD
    { path: 'about', component: AboutComponent }
<<<<<<< HEAD
>>>>>>> 2d1270367f50baf5a659a31c68cf235747fd6d75
=======
=======
    { path: 'editUsers', component: EditUserComponent }
>>>>>>> viewAllProperties
>>>>>>> 83c32eff196f7198e6053a7ab18aa23d819ebb0a

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
