// Link https://www.codewars.com/kata/5266876b8f4bf2da9b000362
export function likes(a: string[]): string {
  if (a.length === 0) {
    return "no one likes this";
  }
  if (a.length === 1) {
    return `${a[0]} likes this`;
  }
  if (a.length === 2) {
    return `${a[0]} and ${a[1]} like this`;
  }
  if (a.length === 3) {
    return `${a[0]}, ${a[1]} and ${a[2]} like this`;
  }
  else {
    return `${a[0]}, ${a[1]} and ${a.length - 2} others like this`
  }
}

// Best Solution

export function solution(names: string[]): string {
  switch (names.length) {
    case 0:
      return 'no one likes this';
    case 1:
      return `${names[0]} likes this`;
    case 2:
      return `${names[0]} and ${names[1]} like this`;
    case 3:
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    default:
      return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
  }
}
