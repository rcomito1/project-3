// jshint eversion: 6
let phrase = "Hello!";

let demoFn = () => {

  if (true) {
    alert(phrase);
  }
  else{
    alert(phrase); // Hello!
  }
}

demoFn();
alert(phrase); // Error, no such variable!
