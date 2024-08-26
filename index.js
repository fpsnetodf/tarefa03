import express from "express"
import nunjucks from "nunjucks"
import * as path from 'path'


const app = express()
const port = 5000

const dirname = path.dirname("/home/neto/Área de trabalho/tarefa03/templates/")

app.set('view engine', 'nunjucks')

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
app.use(express.static(path.join(dirname, "public")))

app.get("/", (req, res) =>{
    const user = {
        nome : "Francisco", 
        lastName : "Paulo da silva neto",
        age: 51
    }
    res.render("home.html", {user})
})

app.get("/contatos", (req, res) =>{
    const frutas = ["maça", "abacate", "manga", "pera", "goiaba"]
    res.render("contatos.html", {frutas})
    // res.render("contatos.html", {"frutas": frutas })
})



app.listen(port, () => {
    console.log("Servidor rodando em: ", "http://127.0.0.1:5000")
})