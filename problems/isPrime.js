const isPrime = (n) => {
  if (n <= 3) return n > 1;
  if (n % 2 === 0 || n % 3 === 0) return false;

  let i = 5;

  while (i * i <= n) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
    i = i + 6;
  }

  return true;
};

console.log("10", isPrime(10));
console.log("20", isPrime(20));
console.log("3", isPrime(3));
console.log("4", isPrime(4));
console.log("5", isPrime(5));
console.log("17", isPrime(17));
