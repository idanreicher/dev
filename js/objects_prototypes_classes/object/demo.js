'use strict'; 
(function() {

  let person = {
    firstName : 'jim',
    lastName : 'kiu'
  };

  person.age = 88;
  person.isOld = function(){return this.age <= 60;}

  display(person.isOld());

  let person2 = {
    firstName : 'jim',
    lastName : 'kiu',
    age : 22,
    isOld : function(){return this.age <= 60;}

  };
  display(person2.isOld());

// short hande

function registerUser(firstName , lastName) {
  let person = {
    firstName, 
    lastName ,
    age : 22,
    isOld() {return this.age <= 60;}

  };

  display(person);
  display(person.isOld());
  display(Object.keys(person)); /*equal to*/ for (const propartyName in person) {
                                                display(propartyName);
                                              } 
}

registerUser('hri' , 'kjhdfs');

// equality betewen objects reffers to the ram pointer not the obj properties 
// ulike in primatives

let person1 = {
  firstName : 'jim',
  lastName : 'kiu'
};

let personSame = {
  firstName : 'jim',
  lastName : 'kiu'
};

//  all false
display(person1 == personSame);
display(person1 === personSame);
display(Object.is(person1 , personSame));

let firstName = 'jim';
let firstName2 = 'jim';
//  all true
display(firstName == firstName2);
display(firstName === firstName2);
display(Object.is(firstName , firstName2));

// object asign 
let person5 = {
  firstName : 'jim',
  lastName : 'kiu',
  age : 22,
  isOld : function(){return this.age <= 60;}
};

let person6 = {};
// mutates the object
Object.assign(person6 , person5);
display(person6);

let healthStats = {
  height : 897,
  weight : 56
};

Object.assign(person5,healthStats );
display(person5);

// creting a new object from assign
let mregePersonWithHelrhStats = Object.assign({} , person6 , healthStats );
display('new obj merged - -' );
display( mregePersonWithHelrhStats);
display('first obj did not changed' );
display( person6); 

// constructor Obj

function Person(firstName, lastName, age){
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.isOld = function(){return this.age <= 60;}

};

let jim = new Person('jim' , "bo" , 23);
let abd = new Person('abd' , "jh" , 663);

display(jim);
display(abd);

// Object.create() dont use unless has to 

let Person2 = Object.create(
  Object.prototype,
  {
    firstName: {value:'jij', enumerable: true , writable: true , configurable: true},
    lastName: {lastName:'sfda', enumerable: true , writable: true , configurable: true},
    age: {age:33, enumerable: true , writable: true , configurable: true}
  }
)

display(Person2);

})();


