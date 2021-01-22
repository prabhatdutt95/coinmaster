import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  private coinApi = "https://netfour.apphb.com/api/coin/";
  private currencyApi = "https://free.currconv.com/api/v7/currencies?apiKey=634535f436833039cfeb";

  constructor(private http: HttpClient) { }

  getCoinList (): Observable<any[]> {
    return this.http.get<any>(this.coinApi).pipe(map(response => response.data));
  }

  getCurrency (): Observable<any> {
    return this.http.get<any>(this.currencyApi);
  }

  getNewCurrencyData(fromCurrency, toCurrency):  Observable<any> {
    return this.http.get<any>("https://free.currconv.com/api/v7/convert?q="+fromCurrency+"_"+toCurrency+"&compact=ultra&apiKey=634535f436833039cfeb");
  }
}
