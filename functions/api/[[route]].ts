import { Hono } from "hono";

const api = new Hono();

api
  .get("/hello", (c) => c.text("Hello from Hono!"))
  .get("/greeting/:name", (c) => c.text(`My name is ${c.req.param("name")}!`));

const app = new Hono();
app.route("/api", api);

export const onRequest: PagesFunction = ({ request }) => app.fetch(request);
