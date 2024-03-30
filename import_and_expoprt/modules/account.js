export default function(){
    console.log("Default function called.....");
}


const account_no = 183647563749;
const account_type = "Saving";

// single exports
// export function withdrawal(){
//     console.log("Amount withdrawal saving....");
// }

// export function Balance(){
//     console.log("Low balance your account.....")
// }


function withdrawal(){
    console.log("Amount withdrawal saving....");
}

function Balance(){
    console.log("Low balance your account.....")
}

export {withdrawal , Balance};  //double and thrple and more export