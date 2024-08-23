const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
app.use(express.json())

mongoose.connect(process.env.MONGO_DB_URI, {

})

    .then(() => console.log("Mongo Connected"))

    .catch(err => console.log(err));

//config Routes
const productRoutes = require('./routes/product');
app.use('/api', productRoutes);

const authRoute = require('./routes/auth');
app.use('/api/user', authRoute);



const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));