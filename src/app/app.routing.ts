import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { RegisterPropertyComponent } from './register-property/index';
import { AuthGuard } from './guards/index';
import {MyPropertiesComponent} from './my-properties/my-properties.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] , pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
<<<<<<< HEAD
    { path: 'my-properties', component: MyPropertiesComponent },
=======
    { path: 'register-property', component: RegisterPropertyComponent },

>>>>>>> 644de7574966ce430477d08aa078f6f12cbccd95
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
