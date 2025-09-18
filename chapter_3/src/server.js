import express from 'express'
import path, {dirname} from 'path'
import { fileURLToPath } from 'url'

const app = express()
const PORT = process.env.PORT || 5003  

//GEt the file path from the url of the current module
const __filename = fileURLToPath(import.meta.url)
// Get the directory name from the file path
const __dirname = dirname(__filename)

//serves the html file from the /public directoyr
// tells express to serve all files from the public folder as static assets
// /file. any request for the css files will be resolved to the public directory.

app.use(express.static(path.join(__dirname, '../public')))

// serving up the html file from public directory
app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
})


app.listen(PORT, ()=>{
    console.log(`Server has started on: ${PORT}`)
})