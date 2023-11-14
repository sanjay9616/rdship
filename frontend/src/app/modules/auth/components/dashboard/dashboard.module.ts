import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "src/app/material-module";
import { MyProfileComponent } from './my-profile/my-profile.component';
import { routing } from "./dashboard-routing.module";
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { MyWishlistComponent } from './my-wishlist/my-wishlist.component';
import { SharedModule } from "src/app/modules/shared/shared.modules";
import { MyCouponsComponent } from './my-coupons/my-coupons.component';
import { AllNotificationsComponent } from './all-notifications/all-notifications.component';

@NgModule({
    declarations: [
        MyProfileComponent,
        MyOrdersComponent,
        MyWishlistComponent,
        MyCouponsComponent,
        AllNotificationsComponent
    ],
    imports: [
        routing,
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
        SharedModule
    ],
    exports: []
})
export class DashboardModule { }