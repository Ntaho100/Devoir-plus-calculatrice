
let a=10;
let b=20;
let c=30;

if (a<b<c)       {
    console.log('c est max');
}else{
    console.log('a est min')
    console.log('b est min')
}


let b=true;
let result=b && (1/0);
console.log(result);

let b=false;
let result=b && (1/0);
console.log(result);
