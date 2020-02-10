const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World')
    console.log('hit home')
});

app.get('/api/courses', (req, res) => {
    res.send([1,2,3])
    console.log('hit courses')
});

app.get('/api/courses/:id',(req, res) => {
    console.log('hit courses/:id')
    console.log(req.params)
    console.log(req.query)
    res.send(req.params)
});
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on ${port}`))