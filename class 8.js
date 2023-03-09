// use logical operator to find whether the age of a person lies between 10 and 20 ?

const age = (personAge)=>{
 if (personAge > 10 && personAge <20 ){
    console.log("your age is between 10 and 20")
 }else{
    console.log(personAge)
 }

}
age(20)

// with ternary operators 

const age2 = (personAge)=>{
    console.log(personAge>10 && personAge <20 ? "you are child":"your age is "+(personAge) )
}

age2 (20)


// explore switch case in js


let age3= 12 ;
switch (age3) {
    case 12: console.log("your age is 12")
        
        break;
    case 13: console.log("your age is 13")
        
        break;
    case 14: console.log("your age is 14")
        
        break;
    case 15: console.log("your age is 15")
        
        break;
   

    default: console.log("you are not special")
        break;
}


// write a function to chack the number is / by 2 and 3  or not

const chack = (number) => {
    console.log(number%2 === 0 && number%3 === 0?"your number is divisible by 2 and 3" : "your number is wrong" )
}

chack(12)

// write a function to chack the number is / by 2 or 3 

const chack2 = (number) => {
    console.log(number%2 === 0 || number%3 === 0?"your number is divisible by 2 or 3" : "your number is wrong" )
}

chack2(4)


// using ternary operatior write a function that you can drive or not  based on age 18 

const age4 = (age)=>{
  console.log(age>= 18 ? "you can drive " : "you can't Drive")
}
age4(19)
