    
/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding:  Left of the dot at call time.
* 2. Explicit Binding: Call, apply, bind properties.
        * call: calls a function with a given this value and arguments provided individually.
        * apply: calls a function with a given this value and arguments provided as an array or array-like object.
        * bind: creates a new function that when called as its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called. 
* 3. "new" Binding: When a constructor function is used, this refers to the specific instance of the object that is created and returned byt the constructor function.
* 4. Window Binding:
*   when in the global scope, the value of "this" will be the window/console object.  This means that the "this" refers to something outside the function its nested in.

* write out a code example of each explanation above
*/

// Principle 1
function greetMe(name) {
    console.log('Hello' + name);
    console.log(this);
}

greetMe ('Corderosa');

// Principle 2
    var greetMe = {
        greeting: 'Hello',
        speak: function(name) {
            console.log(this.greeting + name);
            console.log(this);
        }
    }

    greetMe.speak('Corderosa');

// Principle 3
   function GoTeamCheer (teamName) {
       this.chant = "GO!";
       this.teamName = teamName;
       this.cheer = function () {
           console.log(`{this.chant}, ${this.teamName}, ${this.chant}!`);
           console.log(this);
       }
   }

   const arsenal = new GoTeamCheer('Arsenal');
   const liverpool = new GoTeamCheer('Liverpool');

   arsenal.cheer();
   liverpool.cheer();
   
// Principle 4

// code example for Explicit Binding
var stacey = {
    name: 'Stacey',
    age: 34,
    sayName: function(){
        console.log('My name is' + this.name);
    }
};
stacey.sayName();