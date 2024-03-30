console.log("Expots");

// The export declaration is used when creating JavaScript modules to export live bindings to functions, objects, 
// or primitive values from the module so they can be used by other programs with the import declaration. 

/*
Syntax
There are two types of exports:
Named Exports (Zero or more exports per module)
Default Exports (One per module)
*/

/*
Exporting individual features
export let name1, name2, name3, .. ,nameN;  //also var, const
export let name1 = ... , name2 ... , ..., nameN;
export function functionname() {...};
export class classNmae {...}
*/

/*
Export list
export {name1,name2, ... , nameN};
*/

/*
Renaming exports
export { varible1 as name1 , variable2 as name2 , ... , nameN};
export { varible1 as "string mode"};
*/

/*
Exporting destructured assignments with renaming
export const { name1, name2: bar } = o;
export const [ name1, name2 ] = array;
*/

/*
Default exports
export default expression;
export default function (…) { … } // also class, function*
export default function name1(…) { … } // also class, function*
export { name1 as default, … };
*/

/*
Aggregating modules
export * from …; // does not set the default export
export * as name1 from …; // ECMAScript® 2020
export { name1, name2, …, nameN } from …;
export { import1 as name1, import2 as name2, …, nameN } from …;
export { default, … } from …;
*/


// There are two different types of export, named and default. 

//name exports
// export {myfunction , myvarible};

// export let myvarible = Math.sqrt(2);

// export function myfunction(){
//     let name = `This is exports modula`;
//     console.log(name);
// }

/*
// Default exports:
// export feature declared earlier as default
// export feature declared earlier as default
export { myFunction as default };
// export individual features as default
export default function () {  }
export default class { }
// each export overwrites the previous one
*/


// But a default export can be imported with any name for example:
// let k;
// export default k = 30;




