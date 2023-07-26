let app = document.getElementById('typewriter');

let typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Montserrat Castillo')
  .pauseFor(300)
  .deleteChars(10)
  .start();

// document es el documento HTML al que esta ligado el archivo.
//el operador . me permite acceder a propiedades o metodos(acciones) de un elemento.
//Write es un metodo(funcion que le pertenece a alguien)
//document.write(funcionx);