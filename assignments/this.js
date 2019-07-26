/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global object binding
        "this" is pointing to the window or console object

* 2. Implicit Binding
        When a function is called by a preceding dot, the object before the dot is what "this" is referring to in the function

* 3. New Binding
        A constructor function, which creates a new object, is used.  The "this" points to the constructor function, and the keyword "new" is used to call the function and then create a new object

* 4. Explicit Binding
        A .call or .apply method can be used to explicitly define "this" and override the constructor objects.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this)
function windowBound(name){
    console.log(this)
    return name;
}

windowBound('name');

// Principle 2

// code example for Implicit Binding

const person ={
    greeting: 'hello',
    sayHello: function(name){
        console.log(this)
        console.log(`${this.greeting}, my name is ${name}`);
        
    }
}

let obj = {}
person.sayHello('Roman');


// Principle 3

// code example for New Binding


function newBinding(obj){
    this.greeting = obj.greeting;
    console.log(this.greeting)
    return name;
}

const person2 ={
    greeting: 'hello',
    sayHello: function(name){
        console.log(this)
        console.log(`${this.greeting}, my name is ${name}`);
        
    }
}

const person3 ={
    greeting: 'helloeee',
    sayHello: function(name){
        console.log(this)
        console.log(`${this.greeting}, my name is ${name}`);
        
    }
}


let roman = new newBinding(person2);
let roman2 = new newBinding(person3);

// Principle 4

// code example for Explicit Binding

let customer1 = { name: 'Leo', email: 'leo@gmail.com' };
let customer2 = { name: 'Nat', email: 'nat@hotmail.com' };

function greeting(text, text2) {
    console.log("text",text);
    console.log("text2",text2);
    console.log("this", this);
   console.log(`${text} ${this.name}, ${text2}`);
}
greeting.apply(customer1, ['Hello', 'How are you?']); // output Hello Leo, How are you?
greeting.apply(customer2, ['Hello', 'How are you?']); // output Hello Natm How are you?

// .bind .call .apply