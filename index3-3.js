try {
    let x =5;
    let z = x % y;
    console.log(z);
  } catch (e) {
    console.error(e);
    // expected output: y is not defined
    // Note - error messages will vary depending on browser
  }
