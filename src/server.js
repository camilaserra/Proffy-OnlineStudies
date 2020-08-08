//Dados

const proffys = [
  {
    name:"Wilson Montelo", 
    avatar: "https://avatars3.githubusercontent.com/u/12366938?s=460&u=d7daefc54ad036add2b1f0bf394cb59739091afe&v=4", 
    whatsapp: "99999999999", 
    bio: "Hi, I'm Wilson and I work as a Front-end developer.<br><br>I participated in the development of several digital products,development specifically, task automation, software architecture,responsive design and html semantics.", 
    subject: "Inglês", 
    cost:"80", 
    weekday: [0], 
    time_from:[720], 
    time_to:[1220]
  },

  { 
    name:"Camila Serra", 
    avatar: "https://avatars1.githubusercontent.com/u/66450896?s=460&u=186f4616de4290975d1dd5722f6a293c837ee6f2&v=4", 
    whatsapp: "99999999999", 
    bio: "Hi, I'm Wilson and I work as a Front-end developer.<br><br>I participated in the development of several digital products,development specifically, task automation, software architecture,responsive design and html semantics.", 
    subject: "Inglês", 
    cost:"80", 
    weekday: [0], 
    time_from:[720], 
    time_to:[1220]
  },

  { 
    name:"Victor Hugo", 
    avatar: "https://avatars1.githubusercontent.com/u/66450896?s=460&u=186f4616de4290975d1dd5722f6a293c837ee6f2&v=4", 
    whatsapp: "99999999999", 
    bio: "Hi, I'm Wilson and I work as a Front-end developer.<br><br>I participated in the development of several digital products,development specifically, task automation, software architecture,responsive design and html semantics.", 
    subject: "Alemão", 
    cost:"80", 
    weekday: [0], 
    time_from:[720], 
    time_to:[1220]
  }
]

const subjects = [
  "Alemão",
  "Árabe",
  "Coreano",
  "Chinês",
  "Espanhol",
  "Francês",
  "Inglês",
  "Italiano",
  "Japonês",
  "Russo",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]

function getSubjects(subjectNumber) {
  const position = +subjectNumber -1
  return subjects[position]
}

function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query


  return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
  const data = req.query

  const isNotEmpty = Object.keys(data).length != 0

  if(isNotEmpty) {

    data.subject = getSubjects(data.subject)
    proffys.push(data)
    
    return res.redirect("/study")
  }

  return res.render("give-classes.html", { subjects, weekdays })
}

const express = require('express');
const server = express();


const nunjucks = require('nunjucks');
nunjucks.configure('src/views', {
  express: server,
  noCache: true,
})

server.use(express.static("public"))
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)
