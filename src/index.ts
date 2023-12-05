import express, { Request, Response } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { DataBase, People, Student, Teacher } from "./Classes";

dotenv.config();

const PORT = process.env.PORT || 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.listen(PORT, () => console.log(`Rodando na porta ${PORT}...`));

app.get("/student/:name", (req: Request, res: Response) => {
    const studentName = req.params.name;
    const newStudent = new Student (studentName);
    res.json(newStudent.toJSON());
});

app.get("/teacher/:name/:age", (req: Request, res: Response) => {
    const teacherName = req.params.name;
    const teacherAge = parseInt(req.params.age);
    const newTeacher = new Teacher(teacherName,teacherAge);
    res.json(newTeacher.toJSON());
});

app.get("/", (_: Request, res: Response) => {
    res.json(DataBase.list());
  });
  

//aceita qualquer método HTTP ou URL
app.use((_: Request, res: Response) =>
res.json({ message: "Requisição desconhecida" })
);