const {Router} = require('express');
const variables = require('../midleware/variables');
const Users = require('../models/user')
const router = Router();
router.post('/auth/register', async (req, res) => {

    const {login, name, email, password} = req.body
    const candidate = await Users.findOne({ email })
    if(candidate) {
        res.json("Користувач вже існує")
    } else{
        const user = new Users({
            login: req.body.login,
            userName: req.body.name,
            email: req.body.email,
            password: req.body.password,
            photoUrl: "https://st.depositphotos.com/2218212/2938/i/450/depositphotos_29387653-stock-photo-facebook-profile.jpg"
        })
        await user.save();   
        res.json("Ригістрація пройшла успішно")
    }
})


router.post('/auth/login' , async (req, res) => {
    const {login, password} = req.body;
    const candidate = await Users.findOne({ login })

    if(candidate) {
        if(candidate.password == password) {
            res.json(candidate)
        } else {
            res.status(400).json({message: "Пароль не правильний"})
        }
    } else{
        res.status(400).json({message: "Користувача не знайдено"})
    }

})  




module.exports = router