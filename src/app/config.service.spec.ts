import { TestBed, async, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';


import { ConfigService } from './config.service';

describe('ConfigService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ConfigService]
    }).compileComponents();
  });

  it('should be created', () => {
    const service: ConfigService = TestBed.inject(ConfigService);
    expect(service).toBeTruthy();
  });
  it('should have getApiUrls', inject([ConfigService], (service: ConfigService) => {
    expect(service.getApiUrls()).toBeTruthy();
  }))
  it('should have getCoinList', inject([ConfigService], (service: ConfigService) => {
    expect(service.getCoinList()).toBeTruthy();
  }))
  it('should have getCurrency', inject([ConfigService], (service: ConfigService) => {
    expect(service.getCurrency()).toBeTruthy();
  }))
  it('should have getNewCurrencyData', inject([ConfigService], (service: ConfigService) => {
    expect(service.getNewCurrencyData('USD', 'BTC')).toBeTruthy();
  }))
});
