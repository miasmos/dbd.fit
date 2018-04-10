import { Languages } from '../data';
import * as LanguageText from './Languages';

class i18nClass {
    constructor() {
        this.language = Languages.EN;
    }

    setLanguage(language) {
        this.language = language;
    }

    set text(value) {
        // not implemented
    }

    get text() {
        return LanguageText[this.language];
    }
}

export const i18n = new i18nClass();
