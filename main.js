// return funkcije
function return_test(a, b) {
  var c = a + b;
  return c;
}
document.write(return_test(3, 5));
alert(return_test(4, 7));

// funkcija u funkciji

function prva() {
  document.write("sunce sija");
}
function linija() {
  document.write("<hr>");
}
function druga() {
  document.write("kisa pada");
}
function pozivaPrvuiDrugu() {
  linija();
  prva();
  linija();
  druga();
  document.write("<hr>");
}
pozivaPrvuiDrugu();

// globalne i lokalne varijable

var proba = 456; // globalna- izvan funkcije-moze da se zove svuda

function printanje() {
  var proba = "hello Danilo"; // lokalna- unutar funkcije- moze da se zove samo u sklopu funkcije
  document.write(proba); // ovaj poziv ima prednost zato sto je var lokalna unutar te funkcije, i pokazace samo hello
}

function drugaFunkcija() {
  document.write("<hr>");
  document.write(proba); // ovaj poziv pokrece samo globalnu var 456 zato sto je ona globalna
}

printanje();
drugaFunkcija();

// endless loop: treca funkcija poziva prve dve i vrti ih u krug zato je loop
function prvaf() {
  document.write("<hr>");
  document.write("bilo sta-----");
  drugaf();
}

function drugaf() {
  document.write("*******neka glupost");
  prvaf();
}

function kojaPozivaObe() {
  prvaf();
  drugaf();
}

kojaPozivaObe();
