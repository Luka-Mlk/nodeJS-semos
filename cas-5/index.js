const { fail } = require("assert");
const fs = require("fs");
const { json } = require("stream/consumers");
// funk za chitanje na datoteka

const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf-8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};
(async () => {
  try {
    // vcituvanje datoteka
    let dataString = await fileRead("studenti.json");
    // konverzija od string vo JSObjekt
    let studenti = JSON.parse(dataString);
    // log
    console.log("Inicijalni studenti", studenti);
    console.log(...studenti);
    let sortProsek = [
      ...studenti.sort((a, b) => {
        if (a.prosek > b.prosek) {
          return 1;
        } else if (a.prosek < b.prosek) {
          return -1;
        }
      }),
    ];
    console.log(studenti);
    let sortIme = [
      ...studenti.sort((a, b) => {
        if (a.ime < b.ime) {
          return -1;
        } else if (a.ime > b.ime) {
          return 1;
        }
        return 0;
      }),
    ];
    console.log(studenti);
    // najv prosek
    let najvisokProsek = sortProsek[0];
    let najnizokProsek = sortProsek[sortProsek.length - 1];
    let firstIme = sortIme[0];
    let lastIme = sortIme[sortProsek.length - 1];
    console.log(najvisokProsek, najnizokProsek, firstIme, lastIme);

    let gradovi = {};

    for (let s of studenti) {
      if (!gradovi[s.grad]) {
        gradovi[s.grad] = s.prosek;
      } else {
        gradovi[s.grad] = (gradovi[s.grad] + s.prosek) / 2;
      }
    }
    let gradoviNiza = [];

    for (let c in gradovi) {
      gradoviNiza.push({
        grad: c,
        prosek: gradovi[c],
      });
    }
    gradoviNiza.sort((a, b) => {
      if (a.prosek > b.prosek) {
        return -1;
      } else if (a.prosek < b.prosek) {
        return 1;
      }
      return 0;
    });
    console.log(gradovi, gradoviNiza);
  } catch (err) {
    console.log(err);
  }
})();
