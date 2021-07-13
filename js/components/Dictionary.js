class Dictionary {
    constructor(selector, pavadinimas, list) {
        // console.log('zodynas pasileido...');
        // console.log(name);
        this.selector = selector;
        this.name = pavadinimas;
        this.dictionaryList = list;
        
        // tai elementas, kuriame generuosim visa turini
        this.DOM = null;
    }

    init() {
        // 1) patikriname, jog validus "selector"
        // 2) patikriname, jog validus this.dictionaryList'as
        if () {
            return false
        }
        // document.querySelector('a')

        // 3) random this.DOM
        this.render();
        // 4) generuojame turini
    }

    isValidSelector() {
        if (typeof this.selector !== "string" ||
        this.selector === ''){
            console.error('ERROR: Selector turi buti ne tuscias tekstas');
            return false;
        }
        return true;
    }
    isValidDictionary() {
        if (!Array.isArray(this.dictionaryLis) || 
        this.dictionaryList === 0) {
            console.error('ERROR: zodynas turi buti ne tuscias array');
            console.warn('ERROR: zodynas turi buti ne tuscias array');
            return false;
        }
        return true;
    }

    findTargetElement() {
        // console.log('ieskome elemento');
        // console.log('pagal:', this.selector);

        // const elementDOM = document. querySelector(this.selector);
        // console.log(elementDOM);

        // if(elementDOM) {
        //     console.log(elementDOM);
        // } else {
        //     console.log('elemento rasti nepavyko');
        // }
        this.DOM = document.querySelector(this.selector);
        if (!this.DOM) {
            console.error('ERROR: pagal pateikta selector, norimo elemento nepavyko rasti');
            return false;
        }
        return true;
    }

    render() {
        console.log('piesim turini...');
        console.log(this.DOM);
        console.log(this.dictionaryList);

        const HTML = '<div class = "rytas">labas rytas</div>';

        this.DOM.innerHTML = HTML;
    }
}

export { Dictionary }