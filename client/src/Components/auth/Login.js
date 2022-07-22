import axios from "axios";
import { useState } from "react"
import { Navigate } from "react-router-dom";
const Login = ({onSesion , getUser}) => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');


    

    function onChange(event) {
        if(event.target.name == "login"){
            setLogin(event.target.value);
        } else if (event.target.name == "password") {
            setPassword(event.target.value)
        }
    }


  async function onSubmit(e) {
        e.preventDefault();
        const obj = {
            login: login,
            password: password
        }
     await axios.post('/auth/login', obj)
     .then(res => getUser(res.data))
     .then(onSesion)
     .catch(err => console.log(err.response.data.message))
    }

    return(
        <div className="Login">
          <form onSubmit={onSubmit}>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon" uk-icon="icon: user"></span>
                        <input className="uk-input" type="text" value={login} name="login" onChange={onChange}/>
                    </div>
                </div>
                <div className="uk-margin">
                    <div className="uk-inline">
                        <span className="uk-form-icon uk-form-icon-flip" uk-icon="icon: lock"></span>
                        <input className="uk-input" type="Password" value={password} name="password"  onChange={onChange}/>
                    </div>
                </div>
                <button class="uk-button uk-button-primary">Вхід</button>
            </form>
        </div>
    )
}

export default Login