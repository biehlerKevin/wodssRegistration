//Here the translations are concated
//see https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1 for further information


import { OpaqueToken } from '@angular/core';

//import translations
import { LANG_DE_NAME, LANG_DE_TRANS } from './lang-de';
import { LANG_EN_NAME, LANG_EN_TRANS } from './lang-en';


//translation token
export const TRANSLATIONS = new OpaqueToken('translations');


//all translations
//export const dictionary = {
//    [LANG_DE_NAME]: LANG_DE_TRANS,
//    [LANG_EN_NAME]: LANG_EN_TRANS,
//};

export const dictionary = {};
dictionary[LANG_DE_NAME] = LANG_DE_TRANS;
dictionary[LANG_EN_NAME] = LANG_EN_TRANS;

//providers
export const TRANSLATION_PROVIDERS = [
    {
        provide: TRANSLATIONS, useValue: dictionary
    },
];