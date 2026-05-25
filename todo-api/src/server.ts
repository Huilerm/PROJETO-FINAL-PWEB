import express from "express";
import { taskRouter } from "./routes/task.routes";

const app = express();
app.use(express.json());
app.use(taskRouter);


const PORT = 3000; //Criei isso na aula de hoje
app.get("/", (req, res) => {
    res.send("Api teste");
});

app.listen(PORT, () => { //Modifiquei isso na aula de hoje
    console.log(`http://localhost:${PORT}`);
});