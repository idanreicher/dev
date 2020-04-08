function printAll() {
    for(let i = 0; i < arguments.length ; i++){
        console.log(arguments[i]);
    }
}

//printAll(1,2,3,4);

 // nested function

 function greetings(){
     let message = 'hello';
     let sayHi = function hi(){
         console.log (message);
     };
     sayHi();
 }

 greetings();

 function greetings(){
    let message = 'hello';
    let sayHi = function hi(){
        let massage = 'kj';  
    };
    sayHi();
    console.log(message);
}

//greetings();

// parent scope

let message;

function greeting(){
    let message = 'hello';
}
//greeting();
//console.log(message);

// block scope

let message2 = 'hello';

if(message2 === 'hello'){
    let message2 = 'inside if block';
    console.log(message2);
}

console.log(message2);

// IIFE - immidiateley invoked function expresion

(function (){
   console.log('invoked immidiatlaly'); 
})();

// cloasures

let greetings3 = (function(){

    let message3 = 'hello';
    let getMessage3 = function () {
        return message3;
    }

    return {
        getMessage3 : getMessage3
    };

})();

console.log(greetings3.getMessage3());

// return an reusibble anonymouse function  

function setupCounter( val ) {
    return function counter() {
        return val++;
    }
}
let counter1 = setupCounter(0);
console.log(counter1()); 
console.log(counter1()); 
let counter2 = setupCounter(10);
console.log(counter2()); 
console.log(counter1());