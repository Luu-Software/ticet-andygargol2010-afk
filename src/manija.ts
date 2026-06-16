
export function generarLorem(n: number): string {
if (n === 1) {
    return "Lorem Ipsum.";
  } else {
    return "Lorem Ipsum " + generarLorem(n - 1);
  }
}

console.log(generarLorem(5));