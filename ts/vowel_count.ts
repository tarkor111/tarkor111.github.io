export class Kata {
    static getCount(str: string): number {
      let count = 0;
      let vowel = ["a", "e", "i", "o", "u"]


      
      for (let letter of str) {

        if (vowel.includes(letter))
        count++

        
        
    }
    return count
    }
  }