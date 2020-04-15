'use strict'; 
(function() {

    let myFanction = function(){};
    //every function has a ptototype
    display(myFanction.prototype);

    let person = {firsName: 'kjh'};
    //undefiend
    display(person.prototype);
    // object
    display(person.__proto__);

    // obj prototype points to the same memmory sapce for all instanses

    function PersonNew(first ,last) {
        this.first = first,
        this.last = last
    }

    PersonNew.prototype.age = 98;// this will change all instances of PersonNew

    display(PersonNew.prototype);
    PersonNew.prototype.age = 22;
    let jim = new PersonNew('jim' , 'cooper');
    let asd = new PersonNew('lkj' , 'ljh');

    display(jim.__proto__);
    display(asd.__proto__);

    display(PersonNew.prototype === jim.__proto__);

   // asd.__proto__.age = 11;// this will change all instances of PersonNew

    
    //display(jim.age);//shows prototype age
    //display(jim.hasOwnProrerty('age'));



    function PersonNew2(first ,last) {
        this.first = first,
        this.last = last
    }

    PersonNew2.prototype.age = 23;//creates a portotype object in memmory
    let idan = new PersonNew2('idan', 'reicher');// new insrtance with pointer to the portotype object in memmory that has age property
    let asf = new PersonNew2('fs', 'lkjgh');// new insrtance with pointer to the portotype object in memmory that has age property
    
    PersonNew2.prototype = {age: 24};// create new prototype instance of the PersonNew2 obj in a new memmory location
    
    display(idan);//23
    display(asf);//23

    let newIdan = new PersonNew2('newIdan', 'hgjhg');
    display(PersonNew2.prototype);// 24
    display(idan);//23 pointes to the old prototype 
    display(asf);//23 pointes to the old prototype
    display(newIdan);//24 pointes to the new prototype


    //  inharitance prototype chain

    display(idan.__proto__);// PersonNew2
    display(idan.__proto__.__proto__);//empty object
    display(idan.__proto__.__proto__.__proto__);// null


    function Person(first, last, age) {
        this.first = first;
        this.last = last;
        this.age = age;
        Object.defineProperty(this, 'Full',{
            get: function () {
                return this.first + ' ' + this.last;    
            },

            enumerable: true
        });
    }

    function Student(first, last, age) {
        
        Person.call(this, first, last, age);
        this._enrolledCourded = [];
        
        this.enroll = function (courseId) {
            this._enrolledCourded.push(courseId);
        }

        this.getCourses = function () {
            return this.Full + "'s enrollled courses are: " + 
            this._enrolledCourded.join(', ')
        }
    }
 
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.cunstructor = Student;

    let jimProto = new Student('Jim', 'Cooper', 29);
    jimProto.enroll('course1');
    jimProto.enroll('course2');
    jimProto.enroll('course3');
    display(jimProto.getCourses());
    display(jimProto);
    display(jimProto.__proto__);
    display(jimProto.__proto__.__proto__);
})();