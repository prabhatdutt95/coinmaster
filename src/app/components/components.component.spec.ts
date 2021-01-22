import { TestBed, async } from '@angular/core/testing';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ComponentsComponent } from './components.component';
import { NumberSuffixPipe } from '../shared/custom-number.pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CryptoConverterComponent } from './crypto-converter/crypto-converter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ComponentsComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    }).compileComponents();
  }));

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(ComponentsComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(ComponentsComponent);
    const app = fixture.debugElement.componentInstance;
    app.ngOnInit();
    app.showPrice('1h');
    app.changeCurrency('BTC')
  }));

});
