import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CryptoConverterComponent } from './crypto-converter.component';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NumberSuffixPipe } from 'app/shared/custom-number.pipe';
import { ComponentsComponent } from '../components.component';

describe('CryptoConverterComponent', () => {
  let component: CryptoConverterComponent;
  let fixture: ComponentFixture<CryptoConverterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        RouterModule,
        Ng2SearchPipeModule,
        HttpClientTestingModule
      ],
    declarations: [
        ComponentsComponent,
        NumberSuffixPipe,
        CryptoConverterComponent
    ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CryptoConverterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const currency = {
      quote: {
        USD: {
          last_updated: "2021-01-22T02:59:02.000Z",
          market_cap: 571022127880.4302,
          percent_change_1h: 3.07477656,
          percent_change_7d: -21.45963965,
          percent_change_24h: -11.69369761,
          price: 30688.710081524016,
          volume_24h: 88117845512.09673
        }
      }
    }
    component.fromCurrency = currency
    component.toCurrency = component.fromCurrency
    component.exchangeRates();
    component.changeFromCurrency(currency);
    component.changeToCurrency(currency);
    component.filter();
    component.roundOffDigit(100,1);
    expect(component).toBeTruthy();
  });
});
