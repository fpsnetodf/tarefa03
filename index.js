import express from "express"
import nunjucks from "nunjucks"



const app = express()
const port = 5000



app.set('view engine', 'nunjucks')

nunjucks.configure('templates', {
    autoescape: true,
    express: app
});
app.use(express.static("public"))

app.get("/", (req, res) =>{
    const users = [{
        nome : "John", 
        lastName : "Doe",
        age: 34
    }, 
    {
        nome: "Jane",
        lastName: 'Doe', 
        age: 30
    }]
    res.render("home.html", {users})
})

app.get("/contatos", (req, res) =>{
    const frutas = ["maça", "abacate", "manga", "pera", "goiaba"]
    res.render("contatos.html", {frutas})
    // res.render("contatos.html", {"frutas": frutas })
    
})



app.listen(port, () => {
    console.log("Servidor rodando em: ", "http://127.0.0.1:5000")
})