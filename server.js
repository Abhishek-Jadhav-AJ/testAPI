//updated

let express = require('express')
let mongoose = require('mongoose')
let app = express();
let mongoStr = "mongodb://127.0.0.1:27017/pune";
let userRoutes = require('./routes/userRoutes')

mongoose.connect(mongoStr , {
    useNewUrlParser : true,
    useUnifiedTopology : true
})
.then(() => {
    console.log("connected to Mongo");

})
.catch( (err) => console.log(err));

app.use(express.json())

app.use("/api", userRoutes)


app.listen(4000 , ()=>{
    console.log('server started on port 4000');
});


