import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(private http: HttpClient) { }

  getApiUrls() {
    return this.http.get<any>('assets/config.json').toPromise();;
  }

  getCoinList (): Observable<any[]> {
    const coinApi = sessionStorage.getItem('coinApi');
    return this.http.get<any>(coinApi).pipe(map(response => response.data));
  }

  getCurrency (): Observable<any> {
    const currencyApi = sessionStorage.getItem('currencyApi');
    return this.http.get<any>(currencyApi);
  }

  getNewCurrencyData(fromCurrency, toCurrency):  Observable<any> {
    const newCurrencyDataPrefix = sessionStorage.getItem('newCurrencyDataPrefix');
    const newCurrencyDataSuffix = sessionStorage.getItem('newCurrencyDataSuffix');
    return this.http.get<any>(newCurrencyDataPrefix+fromCurrency+"_"+toCurrency+newCurrencyDataSuffix);
  }
}
