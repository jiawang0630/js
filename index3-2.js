const EXPR = 'Papayas';
switch (EXPR) {
  case 'Oranges':
    Oranges();
    break;
  case 'Mangoes':
  case 'Papayas':
    Papayas();
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    Deafult();
}

// CURD
function Oranges(){
    console.log('Oranges are $0.59 a pound.');
}

function Papayas(){
    console.log('Mangoes and papayas are $2.79 a pound.');
}

function Deafult(){
    console.log(`Sorry, we are out of ${EXPR}.`);
}