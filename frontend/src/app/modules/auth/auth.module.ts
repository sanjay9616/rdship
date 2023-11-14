import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { routing } from "./auth-routing.module";
import { LoginComponent } from "./components/login/login.component";
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { VerifyComponent } from './components/verify/verify.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.modules";
import { AppMaterialModule } from "src/app/material-module";

@NgModule({
    declarations: [
        LoginComponent,
        SignUpComponent,
        ForgetPasswordComponent,
        VerifyComponent,
        DashboardComponent,
    ],
    imports: [
        routing,
        AppMaterialModule,
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        SharedModule,
    ],
    exports: []
})
export class AuthModule { }