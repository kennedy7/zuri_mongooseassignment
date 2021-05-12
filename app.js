const express = require('express');
const app = express();
const port = process.env.PORT  ||4000;
const bodyparser = require('body-parser');
const mongoose = require('mongoose')
app.use(bodyparser.json());
const { isAbsolute } = require('path');
const connectionstring = 'mongodb+srv://kennedy:kennedy12@cluster0.rvmzf.mongodb.net/users?retryWrites=true&w=majority'
const {createUser, updateUser, deleteUser} = require('./controller/user_controller')


app.post('/create', createUser);
app.patch('/:id/update', updateUser);
app.delete('/:id/delete', deleteUser);

mongoose.connect(connectionstring, {
     useNewUrlParser: true,
     useUnifiedTopology: true,
     useFindAndModify: false
    }).then((app.listen(port, () => console.log(`app listening on port ${port}`)))).catch((err)=>console.log(err))
