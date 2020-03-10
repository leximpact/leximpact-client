import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import next from "next";
import path from "path";

const dev = process.env.NODE_ENV !== "production";
const port = parseInt(process.env.PORT, 10) || 9001;

const app = next({ dev });
const handle = app.getRequestHandler();

async function start() {
  await app.prepare();

  const server = express();
  server.use(bodyParser.json());
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cookieParser());
  /* ------------------------------------

    !!! NE PAS RE-AGENCER

  ------------------------------------ */
  server.get("/bbbc03c2d698ea7ec1194fab549115f1.txt", (req, res) => {
    res.set("Content-Type", "text/plain").sendStatus(200);
  });
  server.use("/", express.static(path.join(__dirname, "public")));
  server.use("/static", express.static(path.join(__dirname, "static")));
  // Ouverture de la popin de confirmation de connexion
  // depuis l'URL /connection/:token
  // recue via le mail contenant le magic-link
  server.get("/connection/:token", (req, res) => {
    const { token } = req.params;
    const popin = "confirmation-connexion";
    const query = { popin, token };
    return app.render(req, res, "/", query);
  });
  server.get("*", handle);
  /* ------------------------------------ */
  server.listen(port);

  return server;
}

start();
