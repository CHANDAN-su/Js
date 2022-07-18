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
class Myclass{
    static field1 = console.log("field1 called");
    static {
        console.log("Class static block #1 called");
    }
    static field2 = console.log("field2 called");
    static{
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
    constructor (){
        this.name = "Polygon";
    }
};

const Pol = new Polygon();

console.log(Pol.name);   //Polygon


class Person {

    constructor (){
        this.name = "Chandan";
    }

    introduce(){
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

    constructor (name = "Tilak"){
        this.name = name;
    }

    introduce1(){
        console.log(`Hello, my name ia ${this.name}`)
    }
}

const per1 = new Person1();

console.log(per1.introduce1()); //Hello, my name ia Tilak


// Creating a new class (declaration-form)
class Polygon2 {
    constructor(height,width){
        this.name = "Polygon";
        this.height = height;
        this.width = width;
    }

    // Simple class instance methods using short-hand method
    // declaration
    sayName(){
        console.log("Hi, I am a" , this.name + ".");
    }

    sayhistory(){
        console.log('"Polygon" is derived from the Greek polus (many) ' +
        'and gonia (angle).')
    }

    cal(){
        return this.height * this.width;
    }
}


let p = new Polygon2(300,400);
console.log(p.sayName());  //Hi, I am a Polygon.
console.log(p.sayhistory());  //"Polygon" is derived from the Greek polus (many) and gonia (angle).
console.log(p.cal()); //120000



// Example 2: Creating a new class (expression-form)
const Mypoly = class poly{
    getPolyName(){
        console.log("Hi. I was created with a Class expression. My name is " + poly.name);
    }
};

let inst = new Mypoly();
console.log(inst.getPolyName());  //Hi. I was created with a Class expression. My name is poly



// Example 3: Extending an existing class
class Square extends Polygon2{
    constructor(length){
        super(length,length);

        this.name = "Square";
    }

    get area(){
        return this.height * this.width;
    }

    set area(values){
        this.area = values;
    }
}

let s = new Square(5);

console.log(s.sayName());  //Hi, I am a Square.

console.log(s.area);  //25



// Example 4: Subclassing methods of a parent class
class Rectangle  extends Polygon2{
    constructor(height,width){
        super(height,width);
        this.name = "Rectangle";
    }
    sayName(){
        console.log('Sup! My name is ', this.name + '.');
        super.sayName();
    }
};

let r = new Rectangle(50,50);
console.log(r.sayName());  //Hi, I am a Rectangle.


// Example 5: Defining static methods




