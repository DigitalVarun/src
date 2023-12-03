let a = 1;
if (a<20 && a>10){
    console.log("You lies b/w 10 & 20.");
}
else {
    console.log("You r not lies b/w 10 & 20")
}

switch (a){
    case 1 : {
    console.log("You are 1");
    }
    break;
}

let  c = 2;

if ((c%2) == 0 && (c%3) == 0) {
    console.log("This c is divided by 2 and 3.")
}
else if((c%2) == 0 && (c%3) != 0){
    console.log("This number is divided by 2 but not divided by 3")
}
else if((c%3) == 0 && (c%2) != 0){
    console.log("This number is divided by 3 cut not divided by 2")
}
else {
    console.log("This number is not divided by 2 & 3.")
}

let age = 10;

console.log("You can" + ((age < 18)? " not " :" ") + "drive.");