import { useState } from 'react';
import Panel from './AcauntPages/Panel'
import './acaunt.scss'
const Acaunt = ({user}) => {
    const [tabs , setTabs] = useState(<Panel />);




    function changeBody(event) {
        const target = event.target
        if(target.id == "panel") {
            setTabs(<Panel />)
        } else if (target.id == "portfolio"){
            setTabs("Портфоліо")
        } else if(target.id == "masenge"){
            setTabs("masenge")
        }
    }



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
                        <span>Підписки: 0</span>
                        <span>Підписники: 0</span>
                        <span>Продаж: 10</span>
                    </div>
                </div>
                <div className="header__body">
                    <div className="acaunt__nav">
                        <ul uk-tab={toString()} onClick={changeBody}>
                            <li className="uk-active"><a href="#" id="panel">Паниль розробника</a></li>
                            <li><a href="#" id="portfolio">Портфоліо</a></li>
                            <li><a href="#" id="masenge">Повідомлиння</a></li>
                        </ul>
                    </div>
                    <div class="body__content">
                        {tabs}
                    </div>
                </div>
            </div>
         
        </div>
    )
} 
export default Acaunt