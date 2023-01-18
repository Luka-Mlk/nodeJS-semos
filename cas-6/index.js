const http = require("http");
const fs = require("fs");
const url = require("url");
const fileRead = (filename) => {
  return new Promise((success, fail) => {
    // resolve, reject
    fs.readFile(filename, "utf8", (err, data) => {
      if (err) {
        return fail(err);
      }
      return success(data);
    });
  });
};

const render = async (page, data) => {
  let content = await fileRead(`./${page}.html`);
  return content.replace("{{res}}", data);
};

const pages = {
  "/": async (req, res) => {
    res.end(await render("index", "pochetna"));
  },
  "/doma": async (req, res) => {
    res.end("doma");
  },
  "/korisnici": (req, res) => {
    res.end("korisnici");
  },
  "/sobiranje": async (req, res) => {
    let result = `${Number(req.query.a) + Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/odzemanje": async (req, res) => {
    let result = `${Number(req.query.a) - Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/mnozhenje": async (req, res) => {
    let result = `${Number(req.query.a) * Number(req.query.b)}`;
    res.end(await render("index", result));
  },
  "/delenje": async (req, res) => {
    let result = `${Number(req.query.a) / Number(req.query.b)}`;
    res.end(await render("index", result));
  },
};

const server = http.createServer((req, res) => {
  let [path, _] = req.url.split("?");
  console.log("URL: " + req.url);
  console.log("PATH: " + path);
  if (pages[path]) {
    const qs = url.parse(req.url, true).query;
    console.log(qs);
    req.query = qs;
    pages[path](req, res);
  } else {
    res.end("NEVALIDA OPERACIJA");
  }
});
server.listen(3000);
