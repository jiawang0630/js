let n1 = 9;
let n2 = 0.1;
let n3 = 0.2;
let n4 = n2 + n3;
console.log(n1);
console.log(n4 == 0.3);

let n5 = "9";
let n6 = 9;
console.log(n5 == n6);
console.log(n5 === n6);

let s1 = "666666";
let s2 = "asdf";
console.log(s1);
console.log(s1 +" " + s2);

let s3 = "\"國文\"";
let s4 = 80;
let s5 = `你
國文
分數 ${s4}`;
console.log(s3 + s4);
console.log(s5);

let s6 = "你的\n";
s6 += "國文\n";
s6 += "分數為" + s4;
console.log(s6);

// Boolean
console.log(10 > 5);
console.log(10 < 5);

// undefined
let u;
console.log(u);

let u1 = {};
console.log(u1.name);

let u2 = function(x,y){
    return x + y;
}
console.log(u2(3,4));

let nu1 = null;
console.log(nu1);

let x1 = 59;
let x2 = 100;
let x3 = 77;
let x4 = 84;
let x5 = 66;
console.log(x1);

//        0   1    2   3   4
let xx = [59, 100, 80, 40, 90];
// index value
console.log(xx[2]);

for(let i = 0; i < xx.length; i++){
    console.log(xx[i]);
}