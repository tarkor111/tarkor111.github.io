export class Dog {
    name: string;

    constructor(name: string = "bobik") {
        this.name = name;
    }

    bark(sound: string) {
        if (sound.toLocaleLowerCase() === this.name.toLocaleLowerCase()) {
            console.log("woof woof!")
        } else {
            console.log("...")
        }
    }
}

