export function grabscrab(anagram: string, dictionary: string[]): string[] {
    let sortedString = anagram.split('').sort().join('');
    let matches = []

    for (let index = 0; index < dictionary.length; index++) {
        if (dictionary[index] === sortedString) {
            let current = dictionary[index]
            matches.push(current)
        }

    }
    return matches
}





