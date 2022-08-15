import { Kata } from "../kata/vowel_count";
import { likes } from "../kata/who_likes_it";
import { Dog } from "./classes/dog";

console.log(Kata.getCount("aaaaabb"))

function sum(a: number, b: number): number {
    return a + b
}
console.log(sum(3,5))
console.log(likes(["s"]))

let dogA = new Dog()
dogA.bark("bobik")
let dogB = new Dog("Dodge")
dogB.bark("bobik")
dogB.bark("dodgE")