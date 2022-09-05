import { Animal } from "./animal"

export class Dog extends Animal{

    constructor(name: string = "bobik") {
        super(name)
    }

    bark(sound: string) {
        if (sound.toLocaleLowerCase() === this.name.toLocaleLowerCase()) {
            console.log("woof woof!")
        } else {
            console.log("...")
        }
    }
}

let dog = {
    name: 
}

