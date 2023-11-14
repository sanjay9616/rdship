import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/_guards/auth.guard";
import { DashboardAuthGuard } from "../shared/_guards/dashboard.guard";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ForgetPasswordComponent } from "./components/forget-password/forget-password.component";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from "./components/sign-up/sign-up.component";
import { VerifyComponent } from "./components/verify/verify.component";

const routes: Routes = [
    { path: '', redirectTo: "login", pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignUpComponent },
    { path: 'forget-password', component: ForgetPasswordComponent },
    { path: 'verify', component: VerifyComponent },
    {
        path: 'dashboard',
        component: DashboardComponent,
        loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [DashboardAuthGuard],
    }
];

export const routing = RouterModule.forChild(routes);
