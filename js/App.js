var content_nav=document.getElementById('content-nav');
var content_info=document.getElementById('content-info');

var nacimiento={
	titulo:"Nacimiento",
	texto:"Mi nombre es Julio César Villanueva Ontiveros.<br>Nací el 19 de Agosto del 2002 en Hidalgo, México.<br>Mis padre se llama Vicente Villanueva Jarillo.<br>Mi madre es Nancy Fabiola Ontivetos.<br>Tengo 2 hermanos y 4 hermanas, 1 de ellos en menor de edad."
};

var infancia={
	titulo:"Infancia, Preescolar y Primaria",
	texto:"Comenze a caminar a los 6 Meses<br>En el Preescolar no recuendo que hací, pero mi madre dice que me dormia con frecuencia, practicamente no aprendí nada en Preescolar, lo que se aprende a esa etapa como, empezar a escribir y a leer, me lo enseño mi madre. Erá de aprendizaje lento por esa época.<br>A los 6 años entre a las Primaria llamada Gustavo I. Madero, en este momento de mi vida, no me acuerdo... fue hace muchos años, solo recuerdo que aprendí las tablas de multiplicar, por mera competencia, aligual que las operaciones matemáticas básicas.<br>En 3 año me cambiarón de Primaria llamada Gustavo Baz en Tecámac, por que la anterior erá de tiempo completo (8:00 - 16:00) haí estuve los 3 años restante, fui un tiempo en el turno matutino, despues es vespertino<br>Cuando termine la Primaria, la institución organizo una viaje a Six Flash, recuendo que me subí a una atracción me marie y me senti mal esl resto del día, pero gané un peluche (que aún conservó) en una juego de disparar."
};

var estudios_formacion={
	titulo:"Estudios y hobbies",
	texto:"Al entrar al la Secundaria llamada... (no me acuerdo). Por estos años fur la primera vez que tuvo un ordenador personal Windows 8.1 después tuvo otras con WIndows 7 y XP. Aquí aprendí a usar Office, lo enseñabán en la Primaria.A los 12 años compenze a aprender a tocar la guitarra, veía libros que había en Internet (muy teoricos), gran parte de lo que entiendo de música es por esos libros, no me acuerdo ni con se llaman pero erán muy buenos.<br><br>Al entrar a la Preparatoria llamada CECyTem, fue en parte porque erá sercana a mi casa, y tenía una especialdad (Técnico en Programación) a simple vista interesante, note que se me daba más o menos bien, pero no me convencia eso de continuar la Universidad, por que hay mucho relleno.<br>Así que pense en entrar al ejercito, investigo como entrar y encontré que podía estudiar una Universidad dentro del ejercito, especializandome en un aréa, a demás de ser gratis el ingreso (solo comprar libros necesario) parecía bastante interesante, pero suspendí las pruebas de natación asi que, no hice gran cosas durante un año.<br><br>Ahora estudio en la UPTecámac y sigó se vez en cuando estudiando y haciendo algo de música, solo como hobbie."
};

var datos=[
	new Dato(nacimiento.titulo,nacimiento.texto),
	new Dato(infancia.titulo,infancia.texto),
	new Dato(estudios_formacion.titulo,estudios_formacion.texto)
];

var menu=new Menu(this.datos);