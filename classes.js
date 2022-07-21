console.log("class");

/************************************Class static initialization blocks**************************************************/
// Class static initialization blocks are a special feature of a class that enable more flexible initialization of static properties than can be achieved using per-field initialization.

// Syntax
// static { /* ... */ }


class ClassWithStaticInitializationBlock {
    static staticProperty1 = "Property 1";
    static staticProperty2;

    static {
        this.staticProperty2 = "Property 2"
    };
};


console.log(ClassWithStaticInitializationBlock.staticProperty1);
console.log(ClassWithStaticInitializationBlock.staticProperty2);

// The scope of the variables declared inside the static block is local to the block.
// Since var , function , const or let declared in a static {}
// initialization block are local to the block, any var declarations in the block are not hoisted.

var y = "Outer Y";

class A {
    static field = "Inner y";
    static {
        var y = this.field;
    }
}

// var defined in static block is not hoisted 
console.log(y);  //Outer Y

// Multiple blocks
class Myclass {
    static field1 = console.log("field1 called");
    static {
        console.log("Class static block #1 called");
    }
    static field2 = console.log("field2 called");
    static {
        console.log("Class static block #1 called");
    }
}

/*
>	"field1 called"
>	"Class static block #1 called"
>	"field2 called"
>	"Class static block #2 called"
*/


// Using this and super.property

// The this inside a static block refers to the constructor object of the class.

class B {
    static field = "A static field";
    static {
        var y = this.field;
    }
};

console.log(B.field);  //A static field


// The super.property can be used inside a static block to reference properties of a super class.

class C {
    static fieldC = "C.fieldC";
}

class D extends C {
    static {
        let x = super.fieldC;
        //// 'A.fieldA'
    }
}



/*****************************************************************constructor********************************************/
// The constructor method is a special method of a class for creating and initializing an object instance of that class.

// Syntax
// constructor() { /* ... */ }
// constructor(argument0) { /* ... */ }
// constructor(argument0, argument1) { /* ... */ }
// constructor(argument0, argument1, ... , argumentN) { /* ... */ }

class Polygon {
    constructor() {
        this.name = "Polygon";
    }
};

const Pol = new Polygon();

console.log(Pol.name);   //Polygon


class Person {

    constructor() {
        this.name = "Chandan";
    }

    introduce() {
        console.log(`Hello, my name ia ${this.name}`)
    }
}

const per = new Person();

console.log(per.introduce()); //Hello, my name ia Chandan

// If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided:


// constructor(...args) { super(...args);
// }



// The constructor follows normal method syntax, so parameter default values, rest parameters, etc. can all be used.

class Person1 {

    constructor(name = "Tilak") {
        this.name = name;
    }

    introduce1() {
        console.log(`Hello, my name ia ${this.name}`)
    }
}

const per1 = new Person1();

console.log(per1.introduce1()); //Hello, my name ia Tilak


// 1. Creating a new class (declaration-form)
class Polygon2 {
    constructor(height, width) {
        this.name = "Polygon";
        this.height = height;
        this.width = width;
    }

    // Simple class instance methods using short-hand method
    // declaration
    sayName() {
        console.log("Hi, I am a", this.name + ".");
    }

    sayhistory() {
        console.log('"Polygon" is derived from the Greek polus (many) ' +
            'and gonia (angle).')
    }

    cal() {
        return this.height * this.width;
    }
}


let p = new Polygon2(300, 400);
console.log(p.sayName());  //Hi, I am a Polygon.
console.log(p.sayhistory());  //"Polygon" is derived from the Greek polus (many) and gonia (angle).
console.log(p.cal()); //120000



// Example 2: Creating a new class (expression-form)
const Mypoly = class poly {
    getPolyName() {
        console.log("Hi. I was created with a Class expression. My name is " + poly.name);
    }
};

let inst = new Mypoly();
console.log(inst.getPolyName());  //Hi. I was created with a Class expression. My name is poly



// Example 3: Extending an existing class
class Square extends Polygon2 {
    constructor(length) {
        super(length, length);

        this.name = "Square";
    }

    get area() {
        return this.height * this.width;
    }

    set area(values) {
        this.area = values;
    }
}

let s = new Square(5);

console.log(s.sayName());  //Hi, I am a Square.

console.log(s.area);  //25



// Example 4: Subclassing methods of a parent class
class Rectangle extends Polygon2 {
    constructor(height, width) {
        super(height, width);
        this.name = "Rectangle";
    }
    sayName() {
        console.log('Sup! My name is ', this.name + '.');
        super.sayName();
    }
};

let r = new Rectangle(50, 50);
console.log(r.sayName());  //Hi, I am a Rectangle.


// Example 5: Defining static methods

class Triple {
    static triple(n) {
        n = n || 1;
        return n * 3;
    }
}


class BiggerTriple extends Triple {
    static triple(n) {
        return super.triple(n) * super.triple(n);
    }
}

console.log(Triple.triple());  //3
console.log(Triple.triple(6));  //18
console.log(BiggerTriple.triple(3));  //81


// Example 6: Subclassing built-in classes and DOM
class MyDate extends Date {
    constructor() {
        super();
    }

    getFormattedDate() {
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec'];
        return this.getDate() + '-' + months[this.getMonth()] + '-' +
            this.getFullYear();
    }
}

var aDate = new MyDate();
console.log(aDate.getTime());
console.log(aDate.getFormattedDate());



/***************************************************************extends****************************************************/
// The extends keyword is used in class declarations or class expressions to create a class that is a child of another class.

// Syntax
// class ChildClass extends ParentClass { /* ... */ }

class DateFormatter extends Date {
    getFormattedDate() {
        let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        return `${this.getDate()} - ${months[this.getMonth()]} - ${this.getFullYear()}`;
    }
}

console.log(new DateFormatter('August 19, 1975 23:15:30').getFormattedDate());


class Square1 extends Polygon2 {
    constructor(length) {
        super(length, length);

        this.name = "Square";
    }

    get area() {
        return this.height * this.width;
    }
}

let s1 = new Square1(70);

console.log(s1.sayName());  //Hi, I am a Square.

console.log(s1.area);  //4900


/****************************************************static*************************************************/
// The static keyword defines a static method or property for a class, or a class static initialization block (see the link for more information about this usage). Neither static methods nor static properties can be called on instances of the class. Instead, they're called on the class itself.
// Syntax
// static methodName() { /* ... */ }
// static propertyName [= value];

// // Class static initialization block
// static {
// }

class ClassWithStaticMethod {
    static staticProperty = "someValue";
    static staticMethod() {
        return 'static method has been called.';
    }

    static {
        console.log('Class static initialization block called');
    }
}

// Class static initialization block called
console.log(ClassWithStaticMethod.staticProperty);  //someValue
console.log(ClassWithStaticMethod.staticMethod());  //static method has been called.

// The following example demonstrates several things:
// How a static member (method or property) is defined on a class.
// That a class with a static member can be sub-classed.
// How a static member can and cannot be called

class Triple1 {
    static customName = "Tripler";
    static description = 'I triple any number you provide';
    static calculate(n = 1) {
        return n * 3;
    }
}


class SquaredTriple extends Triple1 {
    static longDescription;
    static description = 'I square the triple of any number you provide';
    static calculate(n) {
        return super.calculate(n) * super.calculate(n);
    }
};


console.log(Triple1.customName); //Tripler
console.log(Triple1.description);  //I triple any number you provide
console.log(Triple1.calculate());  //3
console.log(Triple1.calculate(6));   //18

let tp = new Triple1();

console.log(SquaredTriple.calculate(3));  //81
console.log(SquaredTriple.description);  //I square the triple of any number you provide
console.log(SquaredTriple.longDescription);  //undefine
console.log(SquaredTriple.customName);  //Tripler

console.log(tp);

// This throws because calculate() is a static member, not an instance member.
// console.log(tp.calculate());                // 'tp.calculate is not a function'



// Calling static members from another static method
class StaticMethodCall {
    static staticProperty = 'static property';
    static staticMethod() {
        return 'Static method and ' + this.staticProperty + ' has been called';
    }
    static anotherStaticMethod() {
        return this.staticMethod() + ' from another static method';
    }
}

console.log(StaticMethodCall.staticMethod());
// 'Static method and static property has been called'

console.log(StaticMethodCall.anotherStaticMethod());
// 'Static method and static property has been called from another static method'



/*******************************************************************super**************************************************/
// The super keyword is used to access properties on an object literal or class's [[Prototype]], or invoke a superclass's constructor.
/*
Syntax
super([arguments]) // calls the parent constructor.
super.propertyOnParent
super[expression]
*/


// Here super() is called to avoid duplicating the constructor parts' that are common between Rectangle and Square.
// class Rectangle1 {
//     constructor(height, width) {
//         this.name = "Rectangle";
//         this.height = height;
//         this.width = width
//     }

//     sayName() {
//         console.log("Hi , I am a ", this.name, ".");
//     }

//     get area() {
//         return this.height * this.width;
//     }

//     set area(value) {
//         this._area = value;
//     }
// }

// class Square2 extends Rectangle1 {
//     constructor(length) {
//         this.height; //// ReferenceError, super needs to be called first!

//         // Here, it calls the parent class's constructor with lengths
//         // provided for the Rectangle's width and height
//         super(length, length);

//         // Note: In derived classes, super() must be called before you
//         // can use 'this'. Leaving this out will cause a reference error.
//         this.name = "Square";
//     }
// }
// extends me ho ekha h


// Super-calling static methods
class Rectangle1 {
     static logNbSides(){
        return "I have 4 side";
     }
};


class Square2 extends Rectangle1{
    static logDescription(){
        return super.logNbSides() + "which are all equal";
    }
}

console.log(Square2.logDescription());   //I have 4 sidewhich are all equal

// Accessing super in class field declaration
class Base {
    static baseStaticField  = 90;
    baseMethod(){
        return 10;
    }
};

class Extended  extends Base{
    extendedField  = super.baseMethod();
    static extendedStaticField  = super.baseStaticField;
};

console.log(Extended.extendedField); //undefine
console.log(Extended.extendedStaticField);  //90

// Using super.prop in object literals
const Obj1 = {
    method1(){
        console.log("method1");
    }
};


const Obj2 = {
    method2(){
        super.method1();
    }
}

Object.setPrototypeOf(Obj2, Obj1);
console.log(Obj2.method2()); //method1


// Methods that read super.prop do not behave differently when bound to other objects
class Base1 {
    baseGetX(){
        return 1;
    }
}

class Extended1 extends Base1{
    getX(){
        return super.baseGetX();
    }
}


let ext = new Extended1();
console.log(ext.getX());  //1
const { getX } = ext;
console.log(getX());  //1



// The same happens in object literals.
const parent1  = {prop:1};
const parent2 = {prop:1};

const child = {
    myParent(){
        console.log(super.prop)
    }
}

Object.setPrototypeOf(child, parent1);
child.myParent(); // logs "1"

const myParent = child.myParent;
myParent(); // still logs "1"

const anotherChild = { __proto__: parent2, myParent };
anotherChild.myParent(); // still logs "1"Object.setPrototypeOf(child, parent1);







/*****************************Project**************************/

class students{
    constructor(name,age,cls){
        this.Myname = name;
        this.Myage = age;
        this.Myclass = cls;
    }

    Biodate(){
        return `My name is ${this.Myname}. My age is ${this.Myage}. I read in class ${this.Myclass}`;
    }
}

// const st = new students("chandan",22,15);  
// console.log(st);
// console.log(st.Biodate());  //My name is chandan. My age is 22. I read in class 15


class Plyers extends students{
    constructor(name,age,cls,game){
        super(name,age,cls);
        this.Mygame = game;
    }

    Play_biodate(){
        // return `My name is ${this.Myname}. My age is ${this.Myage}. I read in class ${this.Myclass}. My fervite game ${this.Mygame}`;
        return `${super.Biodate()} My fervite game ${this.Mygame}`;
    }


}

// const st = new Plyers("chandan",22,15,"Football");
// console.log(st.Biodate());  //My name is chandan. My age is 22. I read in class 15

// console.log(st.Play_biodate()); //My name is chandan. My age is 22. I read in class 15 My fervite game Football

class Danser extends students{
    constructor(name,age,cls,danseform){
        super(name,age,cls);
        this.Mydanse = danseform;
    }

    Danser_biodate(){
        // return `My name is ${this.Myname}. My age is ${this.Myage}. I read in class ${this.Myclass}. My fervite game ${this.Mygame}`;
        return `${super.Biodate()} My fervite game ${this.Mydanse}`;
    }

}

const st1 = new Danser("chandan",22,15,"Hiphop");

console.log(st1.Danser_biodate());  //My name is chandan. My age is 22. I read in class 15 My fervite game Hiphop
