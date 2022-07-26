import axios from "axios";
import { useState } from "react";
import Avatar from "../../Resourse/avatar.jpg";
import './acaunt.scss'
const Acaunt = ({user}) => {

    
    return(
        <div className="container">
            <div className="header--acaunt uk-background-primary uk-light uk-padding uk-panel"></div>
            <div class="header--flex_acaunt">
                <div class="header--panels">
                    <div className="header--avatar">
                        <img src={user.photoUrl} alt="dasdsa" />
                    </div>
                    <h1 className="uk-heading-small title-name">{user.userName}</h1>
                    <span>{user.login}</span>
                    <div className="statistic">
                        <span>Рейтинг: 30</span>
                        <span>Продуктів: 5</span>
                        <span>Продаж: 10</span>
                    </div>
                </div>
                <div class="header__body">
                    <ul uk-tab={toString()}>
                        <li class="uk-active"><a href="#">Інформація про Користувача</a></li>
                        <li><a href="#">Паниль розробника</a></li>
                        <li><a href="#">Портфоліо</a></li>
                        <li><a href="#">Настройки</a></li>
                    </ul>
                </div>
            </div>
         
        </div>
    )
} 
export default Acaunt