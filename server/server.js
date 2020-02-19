import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import next from "next";

import api from "./router";

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();
    server.use(cors());
    server.use(bodyParser.json());
    server.use("/api", api);
    server.get("*", (req, res) => handle(req, res));

    server.listen(8082, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:8082");
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
