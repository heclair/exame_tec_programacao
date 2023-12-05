import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DataBase, Student, Teacher } from "./Classes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.get("/student/:name", (req: Request, res: Response) => {
//completar
});

app.get("/teacher/:name/:age", (req: Request, res: Response) => {
//completar
});

app.get("/", (_: Request, res: Response) => {
    res.json({ message: "Rodando" });
});

//aceita qualquer método HTTP ou URL
app.use((_: Request, res: Response) =>
res.json({ message: "Requisição desconhecida" })
);