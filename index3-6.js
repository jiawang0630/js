let card = {
    name: "++++",
    tel: "0912345678",
    addr: "台南市東區",
    "職稱": "abc"
};
// console.log(card.name);

for(let i in card){
    // console.log(i);
    console.log(card[i]);
}