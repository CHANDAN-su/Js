console.log("Object");

/**********************************************************JavaScript object basics*************************************/
// const person = {};  //empty object
// [object object]
// Object {}
// {}


// created your first object.
const person = {
    name: ["Chandan", "Thakur"],
    name1 : {
        first: "Ravi",
        last: "Gupta"
    },
    age: 12,
    bio: function () {
        console.log(`${this.name[0]} ${this.name[1]} is ${this.age} year old`);
    },
    introduceSelf: function () {
        console.log(`Hi ! I'M ${this.name[0]}`)
    }
};

console.log(person.name);
console.log(person.name[0]);
console.log(person.bio());
console.log(person.introduceSelf());


//  The syntax always follows this pattern:
/*
const objectName = {
    member1Name: member1Value,
    member2Name: member2Value,
    member3Name: member3Value
};
*/

/*
Dot notation
person.age
person.bio()

Objects as object properties
An object property can itself be an object. For example, try changing the name member from

name: ['Bob', 'Smith'],
name : {
    first: 'Bob',
    last: 'Smith'
  },


To access these items you just need to chain the extra step onto the end with another dot.
person.name.first
person.name.last
*/

console.log(person.age);  //12
console.log(person.name1.first);  //Ravi

// Bracket notation
console.log(person["age"]);  //12
console.log(person["name1"]["first"]);  //Ravi


// Setting object members
person.age = 52;
console.log(person.age);  //52

person["name1"]["last"] = "Mandal";
console.log(person.name1.last);  //Mandal


// you can also create completely new members
person["eyes"] = "hazel";
console.log(person["eyes"]);  //hazel

person.farewell = function (){
    console.log("Bye everybody!");
};

console.log(person.farewell());  //Bye everybody!


/*
const myDataName = nameInput.value;
const myDataValue = nameValue.value;

person[myDataName] = myDataValue;
*/

const myDataName = "height";
const myDataValue = "1.75m";

person[myDataName] = myDataValue;
console.log(person.height);  //1.75m


// Introducing constructors

function createPerson(name) {
    const obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
    return obj;
  }

console.log(createPerson("Chandan"));  //wrong

// a property name
// a method introduceSelf().

const salva = createPerson("Chandan"); 
console.log(salva.name);  //Chandan
console.log(salva.introduceSelf());  //Hi! I'm Chandan.

const frankie = createPerson("Frankie ");
console.log(frankie.name);  //Frankie 
console.log(frankie.introduceSelf());  //Hi! I'm Frankie .


function Person1(name) {
    this.name = name;
    this.introduceSelf = function() {
      console.log(`Hi! I'm ${this.name}.`);
    }
}


const salva1 = new Person1('Salva');
console.log(salva1.name);  //Salva
console.log(salva1.introduceSelf());  //Hi! I'm Salva.


const frankie1 = new Person1('Frankie');
console.log(frankie1.name);  //Frankie
console.log(frankie1.introduceSelf());  //Hi! I'm Frankie.



/*************************************************************Object() constructor********************************************/
// The Object constructor creates an object wrapper for the given value.
/*
Syntax
new Object()
new Object(value)
*/

let o = new Object();

o.sunject = "Math";
o.Marks = "95%";

console.log(o);  //{sunject: 'Math', Marks: '95%'}
console.log(o.sunject);  //Math
console.log(o.Marks);  //95%