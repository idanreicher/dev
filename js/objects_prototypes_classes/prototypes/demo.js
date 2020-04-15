'use strict'; 
(function() {

  let person = {

      first: 'Jim',
      last: 'Cooper',
      age: 29
  };

  for(let prpperatyName in person){
    display(prpperatyName + ': ' + person[prpperatyName]);
  }

  display(Object.getOwnPropertyDescriptor(person, "first"));
  Object.defineProperty(person, 'first', {writable: false});
  display(Object.getOwnPropertyDescriptor(person, "first"));
  //person.first = 'not';// error
  display(person.first);

// when proparty in object it is wriratble
  let person2 = {
    name: {
      first: 'Jim',
      last: 'Cooper'
    },
    age: 29
  };

  display(Object.getOwnPropertyDescriptor(person2, "name"));
  Object.defineProperty(person2, 'name', {writable: false});
  display(Object.getOwnPropertyDescriptor(person2, "name"));
  person2.name.first = 'can be changed';
  // person2.name = {};//error
  display(person2.name);
  Object.freeze(person2.name);
  // person2.name.first = 'cannot be changed after freeze'; // error

  // enumerable

  let person3 = {

    first: 'Jim',
    last: 'Cooper',
    age: 29
};

display('show all keys ');
for(let prpperatyName in person3){
  display(prpperatyName + ': ' + person3[prpperatyName]);
}

Object.defineProperty(person3 , 'first', {enumerable: false});
// first not showing
display('show all keys exept first');
for(let prpperatyName in person){
  display(prpperatyName + ': ' + person3[prpperatyName]);
}

// outside the loop it can be shown
display('outside the loop - ' + person3.first);

//  {enumerable: false} prevents serialisation of the key
// display('{enumerable: false} prevents serialisation of the key - ' + JSON.stringify(person3));// error

// configure
let person4 = {
  name:{
    first: 'Jim',
    last: 'Cooper',
  
  },
  age: 29
};

// cant modify property
//Object.defineProperty(person4 , 'first', {configurable: false});
//Object.defineProperty(person4 , 'first', {configurable: true});//error
// Object.defineProperty(person4 , 'first', {writable: true});// {configurable: false} ca be modified back only on writable

delete person4.first; 

display(person4);

// getter and setters

let person5 = {
  name:{
    first: 'Jim',
    last: 'Cooper',
  
  },
  age: 29
};


Object.defineProperty(person5 , "fullName",
{
  get: function(){
    return this.name.first + ' ' + this.name.last ; 
  },

  set: function(value){

    let nameParts = value.split(' ');
    this.name.first = nameParts[0];
    this.name.last = nameParts[1];

  }
});

display('person5.fullName ' + person5.fullName);

person5.fullName = 'set fullName';
display('person5.fullName ' + person5.fullName);//set fullName and the obj.name.first & obj.name.last



})();