const express = require('express')
const app = express()
const PORT = 8383

let data =['james']

//Middleware
app.use(express.json())

// HTTP verbs(methods) and routes (paths)
// The method informs the nature of request and the route is a further subdirectory  (basically we direct the request  to the body of code to respond appropriately, and these locations or routes are called endpoints)


// TYPE 1: Website endpoints (sending back html , when user enters a url in browser)
app.get('/', (req, res)=>{
    res.send(
        `
        <body
        style="background:pink;
        color:blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
        </body>
        `
    )
})

app.get('/dashboard', (req, res)=>{
    res.send('<h1>Dashboard</h1>')
})



// TYPE 2: Api endpoints (non visual)

// CRUD-Method : create: post, read-get, update-put, delete-delete
app.get('/api/data', (req, res)=>{
    console.log('this was for data')
    res.send(data)
})


app.post('/api/data', (req, res)=>{
    //someone wants to create an user (foreg. when they click a signup button)
    //exter credentials clicks signup: browser send out a network request to the server to handle that action

    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})


app.delete('/api/data', (req, res)=>{
    data.pop()
    console.log('we deleted the element off the end of the array')
    res.sendStatus(203)
})
 app.listen(PORT, ()=> console.log(`server has started on: ${PORT}`))