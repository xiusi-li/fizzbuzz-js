

// Here, we create our main function.
function fizzbuzz() {
    console.log('Welcome to FizzBuzz!');
    var readline = require('readline-sync');
    const maxNumber = readline.question('What should the maximum number be?');
    const Fizz = readline.question("implement Fizz rule? If so, type y   ") === 'y'
    const Buzz = readline.question("implement Buzz rule? If so, type y   ") === 'y'
    const Bang = readline.question("implement Bang rule? If so, type y   ") === 'y'
    const Bong = readline.question("implement Bong rule? If so, type y   ") === 'y'
    const Fezz = readline.question("implement Fezz rule? If so, type y   ") === 'y'


    for (i = 1; i < maxNumber; i++) {

        let output = [];


        if (i % 3 === 0 && Fizz) {
            output.push('Fizz');
        }

        if (i % 5 === 0 && Buzz) {
            output.push('Buzz');
        }


        if (i % 7 === 0 && Bang) {
            output.push('Bang');
        }

        if (i % 11 === 0 && Bong) {
            output = ['Bong'];
        }

        if (i % 13 === 0 && Fezz) {
            let lengthBeforeFezz = output.length;
            let fezzAdded = false;

            for (j = 0; j < lengthBeforeFezz; ++j) {
                let wordInOutput = output[j];
                if (wordInOutput.substring(0, 1) === 'B') {
                    output = output.slice(0, j).concat(['Fezz']).concat(output.slice(j));
                    fezzAdded = true;
                    break;
                }
            }

            if (fezzAdded === false) {
                output.push('Fezz');
            }
        }
        
        if (i % 17 === 0) {
            output.reverse();
        }

        if (output.length === 0) {
            console.log(i);
        } else {
            console.log(output.join(''));
        }
    }



}

// Now we run the main function...
fizzbuzz();