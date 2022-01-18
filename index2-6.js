// 一、算術運算子: +、-、*、/、%、**
let n1 = 5;
let n2 = 2;
let s1 = "1";
// console.log(n1 + n2);
// console.log(n1 - n2);
// console.log(n1 * n2);
// console.log(n1 / n2);
// console.log(typeof n1);
// console.log(typeof s1);
console.log(n1 + s1);
console.log(n1 + parseInt(s1));

// 餘數
console.log(n1 % n2);

//         0 1 2 3 4 5 6 7 8 9
let arr = [1,2,3,4,5,6,7,8,9,10];
// 條件式 if(){

// }
// i++ => i = i+1
for(let i=0; i < arr.length; i++){
    if(arr[i] % 2){
        console.log(arr[i] + ":奇數");
    }
}

// console.log(2 ** 10);
let r = 5;
let a = r ** 2 * 3.14;
console.log(a);

let myName = "嘉";
let age = 25;
console.log(myName + age + "歲");

// 四、比較運算子：==、!=、<、<=、>、>=、===、!==
let x = 5;
let y = "5";
// console.log(!(x == y));
// console.log(!(x === y));

// 五、邏輯運算子：&&、||、!
//                且  或  反向
// console.log(true && true);
// console.log(false && false);
// console.log(true && false);
console.log(true || false);
console.log(true || true);
console.log(false || false);

// 六、條件運算子：?:
let score = 59;
let show = (score >= 60) ? "及格" : "不及格";
console.log(score,show);