try {
    let x =5;
    let z = x % y;
    console.log(z);
  } catch (error) {
    console.error(error);
    // expected output: y is not defined
    // Note - error messages will vary depending on browser
  }
