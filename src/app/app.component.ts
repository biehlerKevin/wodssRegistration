import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { TranslateService } from './shared/translation/translate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    public translatedText: string;
    public supportedLanguages: any[];

    constructor(private _translate: TranslateService) { }

    ngOnInit() {
        // standing data
        this.supportedLanguages = [
            { display: 'Deutsch', value: 'de' },
            { display: 'English', value: 'en'},
        ];

        // set current langage
        this.selectLang('de');
    }

    isCurrentLang(lang: string) {
        // check if the selected lang is current lang
        return lang === this._translate.currentLang;
    }

    selectLang(lang: string) {
        // set current lang;
        this._translate.use(lang);
        this.refreshText();
    }

    refreshText() {
        //Not needed ?????? works whitout it ???????

        // refresh translation when language change 
        this.translatedText = this._translate.instant('LOGIN');
        this.translatedText = this._translate.instant('OVERVIEW SEMINARS');
        this.translatedText = this._translate.instant('FHNW');
        this.translatedText = this._translate.instant('ROOM');
    }

 

}
 