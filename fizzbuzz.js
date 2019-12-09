

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    for (i=1; i<300; i++){
        
        let output=[];


        if ( i%3 === 0){
            output.push('Fizz');
        }

        if ( i%5 === 0){
            output.push('Buzz');
        }
        

        if (i%7 === 0){
            output.push('Bang');
        }

        if(i%11 ===0){
            output=['Bong'];
        }

        if (i%13 === 0){
            let lengthBeforeFezz=output.length;
            let fezzAdded = false;
            
            for (j=0; j<lengthBeforeFezz; ++j) {
                let wordInOutput=output[j];
                if (wordInOutput.substring(0,1)==='B'){
                    output=output.slice(0,j).concat(['Fezz']).concat(output.slice(j));
                    fezzAdded = true;
                    break;
                }
            }

            if (fezzAdded === false){
                output.push('Fezz');
            }
        }

        if (i%17 ===0){
            output.reverse();
        }

    if (output.length===0){
        console.log(i);
    }
    else{
        console.log(output.join(''));
    }
    }


    
}

// Now we run the main function...
fizzbuzz();
