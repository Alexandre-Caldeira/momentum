const express = require('express')
const server = express();

const cors = require('cors');

// para api receber e entregar info em json:
server.use(cors());
server.use(express.json());

// server.get('/teste', (req,res) => {
//     // res.send('AHA!');
//     res.send('Tudo certo em 3000/teste :) ');
// });

const TaskRoutes = require('./routes/TaskRoutes');

//injetando TaskRoutes.js na api
server.use('/task',TaskRoutes)

server.listen(3333, () => {
    console.log('API ONLINE');
});