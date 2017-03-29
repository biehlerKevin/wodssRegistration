import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { TranslateService } from './translation/translate.service';

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
        // refresh translation when language change
        this.translatedText = this._translate.instant('Einloggen');
        this.translatedText = this._translate.instant('Bla');
        this.translatedText = this._translate.instant('Seminaruebersicht');
    }



}
