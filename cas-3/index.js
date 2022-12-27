// ??
let a = null;
let b = null;
console.log(a ?? b);

let aa;
let bb;

let res = (aa !== null) & (aa !== undefined) ? aa : bb;

// false, 0, "", null, undefined -> ||
let x = (1 && 2) ?? 3;

function f() {
  for (let i = 0; i < 9; i++) {
    if (i == 6) {
      return;
    }
    if (i % 2 == 0) {
      console.log(i);
    }
  }
  console.log("ciklusot zavrshi!");
}

f();

console.log("c3");
// core moduli
// http, assert, fs, path, process, os, querystring, url ...

// local moduli

// third-party
// mongoose, express, angular, react...

const kalkulator = require("./kalkulator.js");

const { mnozhenje, delenje } = require("./kalkulator.js");

console.log(kalkulator.sobiranje(3, 4));
console.log(kalkulator.ostatok(3, 4));

console.log(mnozhenje(3, 4));
console.log(delenje(10, 5));

// promena na .js vo .mjs
// export function add(a, b) {return a + b;};
// import { add } from "./kalkulator.js"
// da se dodade "type": "module" vo package.json

const { textConverter, textStats } = require("./konverter.js");

// let orig = "rezultatot od ovoj tekst kje bide kirilichen tekst";
// let conv = textConverter("lat2cyr", orig);
// console.log(orig);
// console.log(conv);

let orig = "резултатот од овој текст ќе биде латиничен текст";
let conv = textConverter("cyr2lat", orig);
console.log(orig);
console.log(conv);

const randomText =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a lectus at sapien fringilla interdum sed id lorem. In nec interdum leo, non imperdiet nulla. Sed elementum est vitae sem vulputate, non ornare est facilisis. Mauris eget leo at lectus aliquet elementum sit amet a ligula. Integer quis metus vel odio dictum suscipit a vel mauris. Ut nec nibh a turpis mattis ultrices. Etiam venenatis est id ante pulvinar vulputate. Vivamus elementum ullamcorper consectetur. Donec tempus tortor non justo maximus, interdum imperdiet enim viverra. Donec ultricies commodo efficitur. Sed vel augue dolor. Proin aliquam eros eget ligula cursus tempus. Proin efficitur sem quis ipsum placerat consectetur. Praesent malesuada est sed massa ornare consequat. Nulla massa ligula, finibus ac erat vitae, posuere blandit leo.";

let stats = textStats(randomText);
console.log(stats);

// za doma
// 1. Da se proshiri funckionalnosta na funkcijata textConverter,
// so toa shto koga konvertirame od latinica vo kirilica,
// da se zemat vo predvid bukvite "ch", "kj", "dz" i sl.
// 2. Da se proshiri funckionalnosta na textStats,
// so toa shto kje se presmeta brojot na rechenici vo
// daden tekst (ne samo onie koi zavrshuvaat so .)
