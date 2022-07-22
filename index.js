const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth');
const sesion = require('express-session');
const app = express();
const PORT = 5000
const url = "mongodb+srv://denys_mazuryk:den4ik17@cluster0.wtbbx.mongodb.net/?retryWrites=true&w=majority";
const varMidleware = require('./midleware/variables')




app.use(express.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(sesion({
    secret: 'some secret value',
    resave: false,
    saveUninitialized: false
}));
app.use(varMidleware);
app.use(authRouter);

app.get('/avarar', (req, res) => {
    res.json("https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg")
})

async function start() {
    try{
        await mongoose.connect(url, {useNewUrlParser:true})
        app.listen(PORT, (Err) => {
            if(Err) throw Err
            
            console.log('start server port 5000')
        })
    } catch{
        console.log('err')
    }

} 

start();



