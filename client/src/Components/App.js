import axios from "axios";
import { Component } from "react";
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Header from "./header/Header";
import Navbar from "./header/Nav-bar";
import Main from "./Main/Main";
import { Navigate } from "react-router-dom";
import Acaunt from "./acaunt/Acaunt";
import ItemPages from "./Main/item-page/Item-page";


class App extends Component {
    constructor() {
        super();
        
        
        this.state = {
            auth: false,
            user: null
        }
    }


   onSesion = () => {
    const auth = this.state.auth
        this.setState({
            auth: !auth
        })
    }
    getUser = (user) => {
         this.setState({
            user: user
        })
    }
    render() {
        const {user, auth} = this.state
        if(auth) {
            return(
            <div className="App">
                <BrowserRouter>
                   <Navbar  user={user}/>
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/auth/login" element={<Navigate to="/" replace={false} />} />
                        <Route path="/acaunt/:acauntId" element={<Acaunt user={user}/>} />
                        <Route path="/item/:itemid" element={<ItemPages />} />
                        <Route path="*" element={<Main />} />
                    </Routes>
                </BrowserRouter>
            </div>
            )
        } else {
            return(
                <div className="App">
                    <BrowserRouter>
                        <Header />
                        <Routes>
                            <Route path="/" element={<Main />} />
                            <Route path="/auth/Register" element={<Register />} />
                            <Route path="/auth/login" element={<Login  onSesion={this.onSesion} getUser={this.getUser}/> } />
                            <Route path="/item/:itemid" element={<ItemPages />} />
                            <Route path="*" element={<Main />} />
                        </Routes>
    
                    </BrowserRouter>
                </div>
            )
        }
       
    }
}
 export default App