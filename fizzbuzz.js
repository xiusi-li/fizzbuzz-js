

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    for (i=1; i<100; i++){
        if (i%3===0 && i%5 ===0){
            console.log('FizzBuzz')
        }
        else if ( i%3 === 0){
            console.log('Fizz')
        }
        else if ( i%5 === 0){
            console.log('Buzz')
        }
        else{
            console.log(i)
        }
    }

    
}

// Now we run the main function...
fizzbuzz();
