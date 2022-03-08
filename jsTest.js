// [1] it is a programing language, it works on broujers.

/*[2] this is key worlds to define a variable.

with var we can declear a global variable, 
we can change it wheneaver we want to change.

with var we can declear a loacale  variable.

with the const key world we can make a anchangele variable, if we are chaging it then we wll get.

we cang writer it like 
var variable name= variable value;
let variable name= variable value;
cost variable name= variable value;

[3] a= primetive 
    b=representive
*/


// 4] a)
const friends=['roshan','akash','vikash']
friends.push('pratik','vijay')
var b=friends.pop()
friends.unshift(b)
// console.log(friends)

// 4] b)

const dict={
    name:'satish',
    LastNmae:'Mungusmare',
    Age:20,
    Place:'lobhi',
    Agenda:"JavaScript",
    others:friends
}
// console.table(dict)

// [5]
var myArray=['satish','Es6','python'];
var n=friends.concat(myArray)
// console.log(n)


/* [6]
a) if we are using switch statment then we have to use eatch time break statment. and each 
we have to give case so it take much space in our code. 
b) -

[7]-

*/

// 9


var s=[1,2,3]
var v=[2,1,4]
var j=[]
for (let a=0; a<s.length; a++ ){
    if(!v.includes(s[a])){
        j.push(s[a])
    }
}
for (let b=0; b<v.length; b++ ){
    if(!s.includes(v[b])){
        j.push(v[b])
    }
}
// console.log(j)


//8

const gig={
    contact:{
        name:'satish',
        mail:'satish@gmail.com',
        password:"1234"
    }
}

// console.log(gig)


// const { readlinkSync } = require('fs')
// var nin=require('readlineSynk')
// const rin=readlinkSync.question('enter your option :')
// console.log(rin)


// [10]

var r= [1, 2, 3, 3]
var t= [2, 1, 4,1] 
for(let a=0; a<r.length;a++){
    if(!t.includes(r[a])){
        t.push(r[a])
    }
}

console.log(t)