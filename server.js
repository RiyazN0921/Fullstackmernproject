const express = require('express');
const bodyParser = require('body-parser');
const taskRouter = require('./src/routes/taskRoutes');
const dbConnection = require('./config/db.config');
const app = express();
app.use(bodyParser.json());
app.use('/api' , taskRouter);

app.listen(3000, async ()=>{
    console.log("server listening on port 3000");
    await dbConnection();
});