import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NumberSuffixPipe } from '../shared/custom-number.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';
@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        Ng2SearchPipeModule
    ],
    declarations: [
        ComponentsComponent,
        NumberSuffixPipe,
        CryptoConverterComponent
    ],
    entryComponents: [],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
