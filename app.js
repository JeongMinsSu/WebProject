const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true})); //for parsing

let user = 1;
const todoList = [
    {
        username: '익명'+user,
        text: '할일 : 청소',
        title: '제목1',
        content: '',
    },
];

app.get('/api/todo',(req, res) => {
    res.json(todoList);
})
app.post('/api/todo',(req, res) => {
    const {text,title,username,content} = req.body;

    console.log('req.body:',req.body);
    todoList.push({
        text,
        title,
        username,
        content,
    })
    return res.send('success');
})

app.listen(3001, () => {
    console.log('server please start')
})