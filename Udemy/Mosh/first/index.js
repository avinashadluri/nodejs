
const express = require('express');
const Joi = require('joi');
//validation schema

const app = express();

app.use(express.json()); 

const courses = [
    { id:1, name:'course1'},
    { id:2, name:'course2'},
    { id:3, name:'course3'},
]

app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/api/courses', (req, res) => {
    res.send(courses);
});

app.get('/api/courses/:id',(req, res) => {
    // res.send(req.params);
    // res.send(req.query);
    let course = courses.find((c)=>c.id === parseInt(req.params.id));
    if(!course) {
        return res.status(404) .send('The course with the given ID is not found');

    }
    res.send(course);
});

app.post('/api/courses', (req, res) => {
    const {error} =  validateCourse(req.body);
    console.log(error);

    if(error) {
        return res.status(400).send(error.details[0].message);
    }
    const course = {
        id: courses.length + 1,
        name : req.body.name
    }
    courses.push(course);
    res.send(course);
});


app.put('/api/courses/:id', (req, res) => {
    // look up the course
    // If not exists, return 404

    let course = courses.find((c)=>c.id === parseInt(req.params.id));
    if(!course) {
        // 404
        return res.status(404).send('The course with the given ID is not found');
    }

    //validate
    //If invalid, return 400 - Bad request
 
    const {error} =  validateCourse(req.body);
    console.log(error);
    if(error) {
        return res.status(400).send(error.details[0].message);
    }

    //If valid, Update course
    // Return the updated course

    course.name = req.body.name;
    res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
    let course = courses.find((c)=>c.id === parseInt(req.params.id));
    if(!course) {
        return res.status(404).send('The course with the given ID is not found');
    }
    // Delete
    const index = courses.indexOf(course);
    courses.splice(index,1);
    res.send(course);
});

const validateCourse = (course) => {
    const schema = {
        name : Joi.string().min(3).required()
    }; 
    const result = Joi.validate(course, schema);
    return result;
};


const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));