// start mongo server
// mongod --dbpath="c:\data\db"

// mongosh
// mongosh

// listanje na bazi preku mongosh
// show dbs

// listanje na kolekcii preku mongosh
// show collections

// novabaza
// use novabaza

// listanje na dokumenti vo kolekcija preku mongosh
// db.imeNaKolekcija.find()

// kreiranje na db/kolekcija/dokument
// db.imeNaKolekcija.insertOne({ a: 1, b: 2 })
// db.imeNaKolekcija.insertMany([{f: 12, g: 17}, {h: 12, i: 17}])

// azhuriranje na dokumenti
// db.imeNaKolekcija.updateOne( { _id: ObjectId("63d8183871a476b61c7c286a") }, { $set: { c: 7 } } )
// db.imeNaKolekcija.updateMany( { a: 1 }, { $set: { a: 17 } } )
// db.imeNaKolekcija.replaceOne( { _id: ObjectId("63d818c871a476b61c7c286c") }, { replaced: true } )

// brishenje na dokumenti
// db.imeNaKolekcija.deleteOne( { f: 12 } )
// db.imeNaKolekcija.deleteMany( { a: 17 } )

// mongoose
// npm install mongoose
const mongoose = require("mongoose");

const connectionString = "mongodb://127.0.0.1:27017/studenti";

const connect = (connectionString) => {
  return new Promise((success, fail) => {
    mongoose.connect(connectionString, (err) => {
      if (err) return fail(err);
      console.log("Connection to MongoDB OK!");
      return success();
    });
  });
};

const Studenti = mongoose.model(
  "studenti", // model
  {
    ime: String,
    prezime: String,
    prosek: Number,
  },
  "studenti" // collection
);

connect(connectionString)
  .then(() => {
    return Studenti.find({});
  })
  .then((res) => {
    console.log(res);
    let s = new Studenti({
      ime: "pero",
      prezime: "peroski",
      prosek: 10,
    });
    return s.save();
  })
  .then((res) => {
    console.log("SAVED!");
    return Studenti.updateOne(
      { _id: "63d82bade3e193cd1b1c0782" },
      { prezime: "trajkoski" }
    );
  })
  .then((res) => {
    console.log("UPDATED!");
    return Studenti.deleteOne({ _id: "63d8293756a39d0ac01ed24c" });
  })
  .then((res) => {
    console.log("DELETED!");
    return Studenti.find({ ime: "pero" }, { prezime: 1 });
  })
  .then((res) => {
    console.log("FILTERED DATA 1: ", res);
    return Studenti.find({ prosek: { $gte: 11 } }, { prezime: 1, ime: 1 }).sort(
      { prezime: 1 }
    );
  })
  .then((res) => {
    console.log("FILTERED DATA 2:", res);
  })
  .catch((err) => {
    console.log(err);
  });

/* async/await alternativa
main().catch(err => console.log(err));
async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/studenti");
    console.log("CONNECTION OK!");

    let siteStudenti = await Studenti.find({});
    console.log(siteStudenti);

    ...
}
*/

/* async/await alternativa
(async () => {
    await mongoose.connect("mongodb://127.0.0.1:27017/studenti");
    console.log("CONNECTION OK!");

    let siteStudenti = await Studenti.find({});
    console.log(siteStudenti);

    ...
})();
*/

/* async/await alternativa
(async () => {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/studenti");
        console.log("CONNECTION OK!");

        let siteStudenti = await Studenti.find({});
        console.log(siteStudenti);

        ...
    }
    catch(err)
    {
        console.log(err);
    }

})();
*/

// 1. Додадете најмалку 20 уникатни записи (документи) во колекцијата studenti.
// 2. Секој запис треба да се состои од следниве податоци:
// {
//     ime: String,
//     prezime: String,
//     prosek: Number,
//     lokacija: {
//         grad: String,
//         drzava: String
//     }
// }
// 3. Извршете ги следниве барања (queries):
// - Топ 5 студенти според просек. Приказ на име, презиме и просек.
// - Најлоши 3 студенти од Скопје
// - Најдобри 10 студенти од Скопје
// - Најдобри 3 студенти од Македонија. Приказ на име, презиме и град.
// - Најлоши 5 студенти од Битола. Приказ на презиме и просек
// - Приказ на студенти од Битола подредени по презиме
// - Приказ на студенти од Куманово подредени по име
// - Приказ на најдобриот студент од Македонија
