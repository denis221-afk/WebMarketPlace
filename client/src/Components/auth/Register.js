import axios from "axios";
import { useState } from "react";
import { Navigate } from "react-router-dom";
const Register = () => {
    const [login, setLogin] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [Err, setError] = useState("")
    const [navigate, setNavigate] = useState(null)



   

    function onChange(event) {
        if(event.target.id == 'login') {
            setLogin(event.target.value)
        } else
        if(event.target.id == 'name') {
            setName(event.target.value)
        } else 
        if(event.target.id == 'email') {
            setEmail(event.target.value)
        } else 
        if(event.target.id == 'password') {
            setPassword(event.target.value)
        }
    } 
  
    
    function validation(e) {
        e.preventDefault();
        if(login == "" || name == "" || email == "" || password == "") {
            setError("Всі форми мають бути заповнині")
            return
        } else if (password.length < 4) {
            setError("Пароль не підходить")
            return
        } else if(!email.includes("@") ) {
            setError("Видіть правильний емаіл")
            return
        } else {
            setError("")
            onSubmit();
            clearInput();
        }
    }

    function clearInput() {
        setLogin('');
        setName('');
        setEmail('');
        setPassword('');
    }

    async function onSubmit(e) {
         const obj = await {
            name: name,
            login: login,
            email: email,
            password: password
        }

       await axios.post('/auth/register', obj)
       .then(res => alert(res.data))
       .then(setNavigate(<Navigate to="/auth/login" replace={false} />))
       .catch(err => console.log(err))
    }


    return(
        <div className="Register">
            <form onSubmit={validation}>
                <div className="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: user"></span>
                        <input class="uk-input" type="text" id="login" value={login} name="login" onChange={onChange} placeholder="Псевдонім користувача" />
                    </div>
                </div>
                <div className="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: pencil"></span>
                        <input class="uk-input" type="text" id="name" value={name} onChange={onChange} placeholder="повне ім'я" />
                    </div>
                </div>
                <div className="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon:  mail"></span>
                        <input class="uk-input" type="text" id="email" value={email} onChange={onChange} placeholder="Електрона пошта" />
                    </div>
                </div>
                <div className="uk-margin">
                    <div class="uk-inline">
                        <span class="uk-form-icon" uk-icon="icon: lock"></span>
                        <input class="uk-input" type="password" id="password" value={password} onChange={onChange} placeholder="Пароль" />
                    </div>
                </div>
                <button class="uk-button uk-button-primary">Ригістрація</button>
                <div class="uk-alert-primary uk-animation-fade" uk-alert>
                    <a class="uk-alert-close" uk-close></a>
                    <p>{Err}</p>
                </div>
            </form>
            {navigate}
        </div>
    )
}

export default Register