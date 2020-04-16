'use strict'; 
(function() {

    class Person{
        constructor(first,  last, age){
            this.first = first;
            this.last = last;
            this.age = age;
        }
        static GED = 888;

        get fullName(){
            return this.first + ' ' + this.last;
        }

        set fullName(fullName){
            let fullNameParam = fullName.split(' ' );
            this.first = fullNameParam[0];
            this.last = fullNameParam[1];
        }

        isOld(){
            return this.age >= 90;
        }
    }    

    // seters & getters belongs to the prototpe
    Object.defineProperty(Person.prototype,'fullName', {enumerable: true});

    let jim = new Person('jim', 'cooper', 78);
    display(jim);
    display(jim);
    display(jim.fullName);

    jim.fullName = 'set method';
    display(jim.fullName);
    display(jim.isOld());

    // by defalt geters & seters and method ara not enurable 
    display(jim);
    
    class Student extends Person{
        constructor(first,  last, age){
            super(first,  last, age);// Person (parent = super) cunstractor
            this._enrollClasses = [];
        }

        // static do not need an instance
        static fromPerson(person){
            return new Student(person.first, person.last, person.age);
        }
        
        enrollClass(clessId){
            this._enrollClasses.push(clessId);
        }

        getClasses(){
            return this.fullName + "enrolled classes: " + this._enrollClasses.join(', '); 
        }
    }    

    
    // static proparty call no need for instanse
    display(Person.GED);
    // static do not need an instance
    let jimPerson1 = new Person('jimS', 'cooperS', 58);
    // call static methood whiout instaning Sutend class returns a Student instance of student with jimPerson1 as super (parrent) 
    let jimStudentStatic = Student.fromPerson(jimPerson1);
    display(jimStudentStatic);

    let jimPerson = new Person('jim', 'cooper', 78);
    let jimStudent = new Student('jim', 'cooper', 78);

    jimStudent.enrollClass('class 1');
    display(jimStudent.getClasses());

    display(jimStudent.fullName);//Person (parent = super) method
    // display(jimPerson.getClasses());// Error Person does not has this method

  


})();