import axios from "axios";
import { useState } from "react";
import Avatar from "../../Resourse/avatar.jpg";

const Acaunt = ({user}) => {

    
    return(
        <div className="container">
            <div className="header-acaunt">
                <img src={user.photoUrl}alt=""  className="main-avatar"/>
                <div class="info">
                    <h1>{user.userName}</h1>
                    <span>@{user.login}</span>
                </div>
            </div>
        </div>
    )
} 
export default Acaunt