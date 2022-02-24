const express = require('express');
const app = express();
require('dotenv').config()
const cors = require('cors');

const { dbConnect } = require('./config/index');
const  usersRouter  = require('./routes/usersRoutes');

PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/user", usersRouter)


dbConnect()
app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
});

