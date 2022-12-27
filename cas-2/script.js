console.log("Zdravo, ova e c2!");

console.log("ova e string");
console.log(123123123);
console.log(false);
console.log(["s1", "s2"]);
console.log({ a: "a1", b: "b1" });

console.log("Zdravo");
console.log("ova e c2");

console.log("Zdravo");
console.log("ova e c2");

console.log("Zdravo");
console.log("ova e c2");

console.log(3 + 1 + 2);

// komentari vo edna linija
/*
    komentar
    vo
    povekje
    linii
*/

// let
let poraka; // deklaracija na promenliva
poraka = "Zdravo!";
console.log(poraka);

let novaPoraka = "Zdr!";
console.log(novaPoraka);

let ime = "Petko",
  prezime = "Petkovski",
  godini = 100;

// var
var varporaka = "Zdravo var";
console.log(varporaka);

// const
const rodenden = "12.12.1212";
// rodenden = "";

let numvar = 12;
let strvar = "asdasd";
let boolvar = true;
console.log(numvar);
console.log(strvar);
console.log(boolvar);

console.log(12 + 15);
console.log(12 - 15);

// imame 3 tipovi
// edinechni ''
// dvojni ""
// backticks ``

let zbir = 11;
console.log(`Rezultatot e ${12 + 13 + 23}`);

console.log(typeof undefined);
console.log(typeof 230);
console.log(typeof 12n); // BigInt
console.log(typeof false);
console.log(typeof "undefined");
console.log(typeof null);
console.log(console.log);

let valuestr = true;
console.log(typeof valuestr);
valuestr = String(valuestr);
console.log(valuestr);

console.log("6" / "2");
let strnum = "123";
console.log(typeof strnum);
let num = Number(strnum);
console.log(typeof num);

let agein = Number("ova ne mozhe da se konvertira!");
console.log(agein);

console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean("1"));
console.log(Boolean(""));

console.log("my" + "string");
console.log("1" + 2);
console.log(2 + "1");
console.log(2 + 2 + "1");
console.log("1" + 2 + 2);

console.log(6 - "2");
console.log("6" / 2);

let xnum = 1;
console.log(+xnum);

console.log(+true); // Number(true)
console.log(+""); // Number("")

console.log(2 > 1);
console.log(2 == 1);
console.log(2 != 1);

// ||
// &&
// !
// ??
console.log(true || true);
console.log(false || true);
console.log(true || false);
console.log(false || false);

console.log(true && true);
console.log(false && true);
console.log(true && false);
console.log(false && false);

let godina = 2022;

if (godina < 2022) {
  console.log("rano");
} else if (godina > 2022) {
  console.log("docna");
} else {
  console.log("tochno");
}

let a = 4;

switch (a) {
  case 3:
    console.log("malku");
    break;
  case 4:
    console.log("tochno");
    break;
  case 5:
    console.log("mnogu");
    break;
  default:
    console.log("nemam poim");
}

// while
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do while
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for
for (let i = 0; i < 3; i++) {
  console.log(i);
}

function prikazhiPoraka(p = "obichna funkcija") {
  return console.log(p);
}
prikazhiPoraka("zdravo");

let fiprikazhiPoraka = function (p = "funkciski izraz") {
  return console.log(p);
};
fiprikazhiPoraka();

let afprikazhiPoraka = (p = "arrow funkcija") => {
  return console.log(p);
};
afprikazhiPoraka("zdravo arrow funkcija!");

let o1 = new Object();
let o2 = {};

const student = {
  ime: "Petko",
  prezime: "Petkovski",
};

// student = {};

console.log(student.ime);
student.ime = "Trajko";
console.log(student.ime);

function Student(ime, prezime) {
  this.ime = ime;
  this.prezime = prezime;
}

let trajko = new Student("trajko", "trajkovski");
console.log(trajko);

let petko = new Student("petko", "petkovski");
console.log(petko);

let rajko = petko;
console.log(rajko);
rajko.ime = "rajko";

console.log(petko.ime);

let bla = "bla";
let mla = bla;
bla = "blalba";
console.log(bla);
console.log(mla);

// za doma
// 1. ??
// 2. analiza na kodot; zoshto jamkata nema 10 iteracii?
for (let k = 0; k < 10; k++) {
  console.log("K: " + k);
  if (k == 6) {
    break;
  }

  if (k % 2 == 0) {
    console.log(k);
  }
}
