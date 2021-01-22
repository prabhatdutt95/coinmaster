import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'app/config.service';
@Component({
    selector: 'app-components',
    templateUrl: './components.component.html',
    styles: []
})

export class ComponentsComponent implements OnInit {
    coinList = [];
    selectedPrice = 'percent_change_1h';
    selectedCrypto;
    prevSelectedCurrency = 'USD';
    currencyList: any = [];
    multiplyingFactor = 1;
    selectedCurrencySymbol = '$';
    selectedInterval = '1h change';
    constructor( private configService: ConfigService) {}

    ngOnInit() {
        this.configService.getCoinList().subscribe((response) => {
            response.forEach((coin) => {
                coin.id_icon = 'https://cryptoicon-api.vercel.app/api/icon/' + coin.symbol.toLowerCase();
            });
            this.coinList = response;
            console.log('coinlist is',this.coinList)
        });

        this.configService.getCurrency().subscribe((response) => {
            this.currencyList = response;
            this.currencyList = Object.entries(this.currencyList.results);
            console.log('currencylist is',this.currencyList)
        });
    }
    showPrice(price) {
        this.selectedPrice = 'percent_change_' + price;
        this.selectedInterval = price + ' change';
    }
    filter() {
        console.log(this.selectedCrypto);
    }
    changeCurrency(selectedCurrency) {
        this.configService.getNewCurrencyData(this.prevSelectedCurrency, selectedCurrency.id).subscribe((response) => {
            console.log(response);
            this.multiplyingFactor = response[this.prevSelectedCurrency + '_' + selectedCurrency.id];
            this.selectedCurrencySymbol = selectedCurrency.currencySymbol ? selectedCurrency.currencySymbol : selectedCurrency.id + ' ';
            this.prevSelectedCurrency = selectedCurrency.id;
        });
    }
}
