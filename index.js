function fizzBuzz() {
	for (let n = 1; n <= 100; n++) {
		if (n % 3 === 0 && n % 5 === 0) {
			console.log(n, " - FizzBuzz")
		} else if (n % 3 == 0) {
			console.log(n, " - Fizz")
		} else if (n % 5 == 0) {
			console.log(n, " - Buzz")

		} else {
			console.log(n)
		}
	}
}
fizzBuzz()

function isPrime(n){
    for (let i=2; i<n ; i++){
        if ( n % i !==0){
        return true;
        } 
        
        
    }
    return false
}
console.log(isPrime(13))

function isEvenOdd(n) {
    if (n % 2 == 0){
        return "Even";
    } else {
        return "Odd"
    }
}
console.log(isEvenOdd(30))