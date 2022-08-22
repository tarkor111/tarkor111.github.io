// MY SOLUION https://www.codewars.com/kata/59df2f8f08c6cec835000012/typescript

export function meeting(s: string): string {
    return s.toUpperCase()
        .split(";")
        .map(v => {
            let splitted = v.split(":")
            return `${splitted[1]}, ${splitted[0]}`
        })
        /*.sort((a, b) => {
            let splittedA = a.split(", ")
            let splittedB = b.split(", ")
            if (splittedA[0] > splittedB[0]) {
                return 1
            } else if (splittedA[0] < splittedB[0]) {
                return -1
            } else if (splittedA[1] > splittedB[1]) {
                return 1
            } else if (splittedA[1] < splittedB[1]) {
                return -1
            } else {
                return 0
            } 
        }) */
        .sort()
        .map(v => `(${v})`)
        .join("")
}
console.log(meeting("Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill"))
 

// BEST SOLUTION 
export function best_meeting(s: string): string {
    return s.toUpperCase()
            .split(';')
            .map(n => '(' + n.split(':').reverse().join(', ') +')')
            .sort() 
            .join('');
  }