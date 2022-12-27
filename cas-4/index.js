const fs = require("fs");

// // zapisuvanje vo datoteka
// fs.writeFile("iminja.txt", "Petko, Stanko", (err) => {
//   if (err) {
//     console.log(err);
//   }
// });
// let promiseExample = new Promise(function (resovle, reject) {
//   // executor - kodot shto proizveduva neshto
// });

// /*  resovle (value)
//     reject (error)

//     interni svojstva na promise objektot
//     - state(pending, fulfilled, rejected)
//     result (undefined, value, error)
// */

// let promise = new Promise(function (resolve, reject) {
//   // se izvrsuva avtomatski
//   console.log("Executor zapocnuva");
//   setTimeout(() => {
//     resolve("done");
//     console.log("Uspesna operacija");
//   }, 3000);
// });
// console.log("Drug kod");

// let p = new Promise((resolve, reject) => {
//   setTimeout(() => reject(new Error()), 3000); // Dava OK
//   //   setTimeout(() => reject("done"), 3000); dava NOK
// });

/*Za pristap na resolve ili reject povejke koristeno za resovle
p.then(
  function (result) {
    console.log("OK");
  },
  function (error) {
    console.log("NOK");
  }
);*/

/* p.then((result) => {
//   console.log("OK");
// }); // Resolve
// p.then(null, () => {}); //Reject
// // Ova i
// p.catch((error) => {
//   console.log("err");
// });
//  Ova e kompletno isto*/
const fileWrite = (filename, data) => {
  return new Promise((success, fail) => {
    fs.writeFile(filename, data, (err) => {
      if (err) {
        return fail(err);
      }
      return success;
    });
  });
};
fileWrite("ocenki.txt", "2, 5, 5, 5, 3, 3, 5")
  .then(() => {
    console.log("success 1");
    return fileWrite("boi.txt", "bela, crna, zholta");
  })
  .then(() => {
    console.log("success 2");
    return fileWrite("boi2.txt", "crvena, zelena, plava");
  })
  .then(() => {
    console.log("success 3");
  })
  .catch((err) => {
    console.log(err);
  });

// async / await

async function ff() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Result from async ff(): done!");
    }, 1000);
  });
  let result = await promise;
  console.log(result);
}
ff();
const main = async () => {
  try {
    await fileWrite("fajl1.txt", "file one");
    await fileWrite("fajl2.txt", "file two");
    await fileWrite("fajl3.txt", "file three");
  } catch (err) {
    console.log(err);
  }
};
main();
const fileRead = (filename) => {
  return new Promise((success, fail) => {
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        return fail();
      }
      return success(data);
    });
  });
};
(async () => {
  try {
    let boi = await fileRead("boi.txt");
    console.log("BOI: ", boi);
  } catch (err) {
    console.log(err);
  }
})();
