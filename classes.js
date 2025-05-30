class RandomPhrases {

    constructor() {
        this._characters = ['Aragorn', 'Gandalf', 'Frodo', 'Bilbo', 'Sam', 'Pippin', 'Merry'];
        this._actions = ['ventured into', 'escaped from', 'fought bravely in', 'discovered ancient ruins within','was ambushed at', 'rode swiftly across', 'uncovered a hidden artifact in'];
        this._locations = ['Anduin River', 'Dead Marshes', 'Pelennor Fields', 'Mirkwood', 'Fangorn Forest'];
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

    get characters() {
        try {
            RandomPhrases._validateArray(this._characters, 'characters');
            return this._characters;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    get actions() {
        try {
            RandomPhrases._validateArray(this._actions, 'actions');
            return this._actions;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    get locations() {
        try {
            RandomPhrases._validateArray(this._locations, 'locations');
            return this._locations;
        } catch (e) {
            console.error(e.message);
            return [];
        }
    }

    set characters(array) {
        try {
            this._characters = RandomPhrases._validateArray(array, 'characters');
            RandomPhrases._setterSuccess('characters');
        } catch(e) {
            console.error(e.message);
        }
    }

    set actions(array) {
        try {
            this._actions = RandomPhrases._validateArray(array, 'actions');
            RandomPhrases._setterSuccess('actions');
        } catch(e) {
            console.error(e.message);
        }
    }

    set locations(array) {
        try {
            this._locations = RandomPhrases._validateArray(array, 'locations');
            RandomPhrases._setterSuccess('locations');
        } catch(e) {
            console.error(e.message);
        }
    }

    randomPhrase() {
        try {

            if (this.characters.length === 0 || this.actions.length === 0 || this.locations.length === 0) {
                throw new Error('Phrase cannot be generated: One or more arrays are empty due to invalid setting.')
            }

            const randomcharactersIndex = RandomPhrases._randomIndex(this.characters);
            const randomactionsIndex = RandomPhrases._randomIndex(this.actions);
            const randomlocationsIndex = RandomPhrases._randomIndex(this.locations);

            return `${this.characters[randomcharactersIndex]} ${this.actions[randomactionsIndex]} ${this.locations[randomlocationsIndex]}`
        } catch(e) {
            console.error(e.message);
        }       
    }
}

export default RandomPhrases;