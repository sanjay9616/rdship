import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppMaterialModule } from '../../material-module';
import { CurrencyPipe } from './pipes/currency.pipe';
import { AbsolutePipe } from './pipes/absolute.pipe';
import { DecimalPipe } from './pipes/decimal.pipe';
import { DecimalDirective } from './_directives/decimal-directive';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NaturalNumberDirective } from './_directives/natural-number-directive';
import { WholeNumberDirective } from './_directives/whole-number-directive';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        CurrencyPipe,
        AbsolutePipe,
        DecimalPipe,
        DecimalDirective,
        NaturalNumberDirective,
        WholeNumberDirective
    ],
    imports: [
        CommonModule,
        RouterModule,
        AppMaterialModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        CurrencyPipe,
        AbsolutePipe,
        DecimalPipe,
        DecimalDirective,
        NaturalNumberDirective,
        WholeNumberDirective
    ],
    providers: []
})

export class SharedModule { }
