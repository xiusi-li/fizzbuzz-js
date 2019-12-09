

// Here, we create our main function.
function fizzbuzz() {
    
    console.log('Welcome to FizzBuzz!');

    for (i=1; i<200; i++){
        
        let x=i


        if (i%3===0 && i%5 ===0){
            x='FizzBuzz'
        }
        else if ( i%3 === 0){
            x= 'Fizz'
        }


        else if ( i%5 === 0){
            x='Buzz'
        }
        

        if (i%7 ===0 && x!=i){
            x=x+'Bang'
        }

        if(i%7===0 && x==i){
            x='Bang'
        }

        if(i%11 ===0){
            x='Bong'
        }

        if (i%13 ===0){
            if(x==i){
                x='Fezz'
            }
            else if (x.search('B')!=-1){
                x=[x.slice(0,x.search('B')),'Fezz',x.slice(x.search('B'))].join('')
            }

            else {
                x=x+'Fezz'
            }

        }




        
    console.log(x)
    }


    
}

// Now we run the main function...
fizzbuzz();
