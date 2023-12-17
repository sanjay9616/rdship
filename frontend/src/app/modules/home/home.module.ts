import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { routing } from "./home-routing.module";
import { HomeLayoutComponent } from "./components/home-layout.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AppMaterialModule } from "src/app/material-module";
import { SharedModule } from "../shared/shared.modules";
import { NgxPaginationModule } from "ngx-pagination";
import { HomeComponent } from "./components/home/home.component";
import { ItemsComponent } from "./components/items/items.component";
import { ViewCartComponent } from "./components/view-cart/view-cart.component";
import { ViewItemComponent } from "./components/view-item/view-item.component";
import { NgImageSliderModule } from "ng-image-slider";
import { RateProductsComponent } from './components/rate-products/rate-products.component';
import { NgxMatSelectSearchModule } from "ngx-mat-select-search";
import { AskQaestionsComponent } from './components/ask-qaestions/ask-qaestions.component';

@NgModule({
    declarations: [
        HomeLayoutComponent,
        HomeComponent,
        ItemsComponent,
        ViewCartComponent,
        ViewItemComponent,
        RateProductsComponent,
        AskQaestionsComponent,
    ],
    imports: [
        routing,
        CommonModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
        SharedModule,
        NgxPaginationModule,
        NgImageSliderModule,
        NgxMatSelectSearchModule
    ],
    exports: []
})
export class HomeModule { }