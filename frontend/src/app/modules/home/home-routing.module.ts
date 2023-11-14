import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./components/home/home.component";
import { ItemsComponent } from "./components/items/items.component";
import { ViewCartComponent } from "./components/view-cart/view-cart.component";
import { ViewItemComponent } from "./components/view-item/view-item.component";

const routes: Routes = [
    // { path: '', redirectTo: 'category', pathMatch: 'full' },
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'category/:category',
        component: ItemsComponent,
    },
    {
        path: 'category',
        component: ItemsComponent,
    },
    {
        path: 'searchStr/:searchStr',
        component: ItemsComponent,
    },
    {
        path: 'searchStr',
        component: ItemsComponent,
    },
    {
        path: 'view-cart',
        component: ViewCartComponent,
    },
    {
        path: 'category/:category/subCategory/:subCategory/itemId/:itemId',
        component: ViewItemComponent,
    }
];

export const routing = RouterModule.forChild(routes);