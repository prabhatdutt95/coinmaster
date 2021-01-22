import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'app/config.service';

@Component({
  selector: 'app-crypto-converter',
  templateUrl: './crypto-converter.component.html',
  styleUrls: ['./crypto-converter.component.css']
})
export class CryptoConverterComponent implements OnInit {

  coinList = []
  fromCurrency;
  toCurrency;
  amountSelected = 1;
  exchangeAmt = this.amountSelected;
  constructor(private configService: ConfigService) { }

  ngOnInit(): void {
    this.configService.getCoinList().subscribe((response) => {
      this.coinList = response;
      this.fromCurrency = this.coinList[1];
      this.toCurrency = this.coinList[0];
      this.exchangeRates();
    });
  }

  exchangeRates() {
    console.log(this.fromCurrency, this.toCurrency);
    this.exchangeAmt = this.roundOffDigit(this.amountSelected * (this.fromCurrency.quote.USD.price  / this.toCurrency.quote.USD.price), 4);
  }

  roundOffDigit(digit, places) {
    places = Math.pow(10, places);
    return (Math.floor(digit* places) / places);
  }

  changeFromCurrency(currency) {
    this.fromCurrency = currency;
    this.exchangeRates();
  }

  changeToCurrency(currency) {
    this.toCurrency = currency;
    this.exchangeRates();
  }

  filter() {
    console.log(this.amountSelected);
    this.exchangeRates()
  }

}
