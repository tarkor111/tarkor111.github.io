// my solution https://www.codewars.com/kata/541c8630095125aba6000c00/
function digit_sum(n:number) :number {
   let sum = 0
   if (n > 9) {
     let arr = n.toString().split("")
     //console.log(arr)
     for (let val of arr){
       sum += parseInt(val)
     }
     return digit_sum(sum)
   } else {
    return n
   }

 }
console.log(digit_sum(26670690608686))
// better solution
export const digitalRoot = (n:number):number => {
  while (n >= 10) {
    n = n.toString()
      .split('')
      .map(x => parseInt(x))
      .reduce((a, b) => a + b, 0)
  }
  return n
};
