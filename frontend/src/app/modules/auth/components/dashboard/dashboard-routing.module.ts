import { Routes, RouterModule } from "@angular/router";
import { AllNotificationsComponent } from "./all-notifications/all-notifications.component";
import { MyCouponsComponent } from "./my-coupons/my-coupons.component";
import { MyOrdersComponent } from "./my-orders/my-orders.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { MyWishlistComponent } from "./my-wishlist/my-wishlist.component";

const routes: Routes = [
    { path: '', redirectTo: "my-profile", pathMatch: 'full' },
    { path: 'my-profile', component: MyProfileComponent},
    { path: 'my-orders', component: MyOrdersComponent},
    { path: 'my-wishlist', component: MyWishlistComponent},
    { path: 'my-coupons', component: MyCouponsComponent},
    { path: 'my-coupons', component: MyCouponsComponent},
    { path: 'all-notifications', component: AllNotificationsComponent},
];

export const routing = RouterModule.forChild(routes);
