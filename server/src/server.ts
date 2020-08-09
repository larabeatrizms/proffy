import express from "express";
import routes from "./routes";

const app = express();

app.use(express.json());
app.use(routes);

// app.get("/users", (request, response) => {
//   return response.json({ message: "hello live" });
// });

app.listen(3333);
