export function grabscrab(anagram: string, dictionary: string[]): string[] {
    let sortedString = anagram.split('').sort().join('')
    let matches = [""]

    for (let index = 0; index < dictionary.length; index++) {
        let sortedDictionary = dictionary[index].split('').sort().join('')
        if (sortedDictionary === sortedString) {
            matches.push(sortedDictionary)
        }

    }
    return matches
}





