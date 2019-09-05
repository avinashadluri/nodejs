const express = require('express');
const app = express();

const courses = [
    {
        id:1,
        name:'course1'
    },
    {
        id:2,
        name:'course2'
    },
    {
        id:3,
        name:'course3'
    },
]
app.get('/',(req, res) => {
    res.send('Hello world');
});
app.get('/api/courses',(req, res) => {
    res.send(courses);
});
app.get('/api/courses/:id',(req, res) => {
    // let params = req.params;
    // let query = req.query;
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) {
        res.status(404, 'The course with the given ID is not found');
    }
    res.send(course);
    res.send(query);
});
const port = process.env.PORT || 3000;
app.listen(port, () => { 
    console.log(`Listening on port ${port}...`)
});
