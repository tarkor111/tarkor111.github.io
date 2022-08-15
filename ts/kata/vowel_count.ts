// Link to Kata https://www.codewars.com/kata/54ff3102c1bad923760001f3/typescript
export class Kata {

  static getCount(str: string): number {
    let count = 0;
    let vowel = ["a", "e", "i", "o", "u"]
    for (let letter of str) {
      if (vowel.includes(letter)) {
        count++
      }    
    }
    return count
  }
}

// Best Solution 

export class BestSolution {
  static getCount(str: string) {
    let list = str.match(/[aeiou]/gi);
    return list ? list.length : 0;
  }
}