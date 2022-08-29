/* SOLUTION FOR https://www.codewars.com/kata/52b305bec65ea40fe90007a7/typescript */

export function grabscrab(anagram: string, dictionary: string[]): string[] {
    let sortedString = anagram.split('').sort().join('')
    let matches: string[] = []

    for (let index = 0; index < dictionary.length; index++) {
        let sortedDictionary = dictionary[index].split('').sort().join('')
        if (sortedDictionary === sortedString) {
            matches.push(dictionary[index])
        }

    }
    return matches
}
/* BEST SOLUTION */

export function grabscrabsolution(anagram: string, dictionary: string[]): string[] {
    let s: string = [...anagram].sort().join("")
    return dictionary.filter(x => [...x].sort().join("") === s)
  }