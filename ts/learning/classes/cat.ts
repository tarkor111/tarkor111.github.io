export class Cat {
    name: string;
    food: string;

    constructor(name: string = "Cat") {
        this.name = name;
        this.food = "fish";
    }

    meauw(sound: string) {
        if (sound.toLocaleLowerCase() === this.name.toLocaleLowerCase()) {
            console.log("meauw")
        } else {
            console.log("frrrrrrrrrrr")
        }
    }
    eat(food: string) {
        if (food.toLocaleLowerCase() === "mouse") {
            console.log("Mmmm...")
        } else {
            console.log("...")
        }


    }
}

