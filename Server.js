 require("dotenv").config()
 
 const express = require ("express");
 const workoutRoutes = require ("./routes/workout")
 const mongoose = require ('mongoose');
 
 const userRoutes = require('./routes/user')


 const app = express();

 app.use(express.json())

 app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
 })

 app.use("/api/workout",workoutRoutes)
 app.use('/api/user', userRoutes)
 
 

 
 mongoose.connect(process.env.MONGO_URL)
 .then(() => {
    app.listen(process.env.PORT, () => {
        console.log("listen on port", process.env.PORT)
     })
 })
 .catch((error) => {
    console.log((error))
 })

 