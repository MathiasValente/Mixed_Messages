class RandomPhrases {

    constructor() {
        this._pronoun = ['I'];
        this._verb = ['am'];
        this._adjective = ['good'];
    }

    static _validateArray(array, type) {

        const arrayType = Array.isArray(array);
        const elementsType = array.every(element => typeof element === 'string');
        const arrayLength = array.length > 0;

        if (!arrayType) {
            throw new Error(`System Malfunction: ${type} is not an array!`)
        } else if (!elementsType) {
            throw new Error(`System Malfunction: ${type} elements are not strings!`)
        } else if (!arrayLength) {
            throw new Error(`System Malfunction: ${type} is an empty array!`)
        }

        return array;
    }

    static _setterSuccess(type) {
        console.log(`${type} updated successfully`)
    }

    static _randomIndex(array, type) {

        if (!RandomPhrases._validateArray(array, type)){
            throw new Error('Message was not generated')
        }
        return Math.floor(Math.random() * array.length);
    }

    get pronoun() {
        try {
            RandomPhrases._validateArray(this._pronoun, 'pronoun');
            return this._pronoun;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    get verb() {
        try {
            RandomPhrases._validateArray(this._verb, 'verb');
            return this._verb;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    get adjective() {
        try {
            RandomPhrases._validateArray(this._adjective, 'adjective');
            return this._adjective;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    set pronoun(array) {
        try {
            this._pronoun = RandomPhrases._validateArray(array, 'pronoun');
            RandomPhrases._setterSuccess('pronoun');
        } catch(e) {
            console.error(e.message);
        }
    }

    set verb(array) {
        try {
            this._verb = RandomPhrases._validateArray(array, 'verb');
            RandomPhrases._setterSuccess('verb');
        } catch(e) {
            console.error(e.message);
        }
    }

    set adjective(array) {
        try {
            this._adjective = RandomPhrases._validateArray(array, 'adjective');
            RandomPhrases._setterSuccess('adjective');
        } catch(e) {
            console.error(e.message);
        }
    }

    randomPhrase() {
        try {

            if (this.pronoun.length === 0 || this.verb.length === 0 || this.adjective.length === 0) {
                throw new Error('Phrase cannot be generated: One or more arrays are empty due to invalid setting.')
            }

            const randomPronounIndex = RandomPhrases._randomIndex(this.pronoun);
            const randomVerbIndex = RandomPhrases._randomIndex(this.verb);
            const randomAdjectiveIndex = RandomPhrases._randomIndex(this.adjective);

            return `${this.pronoun[randomPronounIndex]} ${this.verb[randomVerbIndex]} ${this.adjective[randomAdjectiveIndex]}`
        } catch(e) {
            console.error(e.message);
        }       
    }
}

export default RandomPhrases;