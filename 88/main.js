// install - express, nodemon
const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

// app.get or app.post or app.put or app.delete(path, handler)
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('About Us')
})

app.get('/contact', (req, res) => {
    res.send('Contact Us')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog')
})

/*
app.get('/blog/intro-to-js', (req, res) => {
    //  logic to fetch blog post from DB
    res.send('Introduction to JavaScript')
})

app.get('/blog/intro-to-python', (req, res) => {
    //  logic to fetch blog post from DB
    res.send('Introduction to Python')
})
*/
app.get('/blog/:slug', (req, res) => {
    // logic to fetch {slug} post from DB
    // For URL : http://localhost:3000/blog/HTML?mode=dark&region=in
    console.log(req.params) // Output : { slug: 'HTML' }
    console.log(req.query) // Output : { mode: 'dark', region: 'in' }
    res.send(`Introduction to ${req.params.slug}`)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})