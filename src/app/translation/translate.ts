//Here the translations are concated
//see https://scotch.io/tutorials/simple-language-translation-in-angular-2-part-1 for further information


import { OpaqueToken } from '@angular/core';

//import translations
import { LANG_DE_NAME, LANG_DE_TRANS } from './lang-de';
import { LANG_PE_NAME, LANG_PE_TRANS } from './lang-pe';


//translation token
export const TRANSLATIONS = new OpaqueToken('translations');


//all translations
export const dictionary = {
    [LANG_DE_NAME]: LANG_DE_TRANS,
    [LANG_PE_NAME]: LANG_PE_TRANS,
};


//providers
export const TRANSLATION_PROVIDERS = [
    {
        provide: TRANSLATIONS, useValue: dictionary
    },
];