import './header.scss';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <div className="container">
            <div className="header header-flex">
                <Link to="/" className="header-logo">
                    Web<span>MarketPlace</span>
                </Link>
                <div className="panel">
                    <Link to="/auth/Register" className="uk-button uk-button-primary uk-margin-small-right">Ригістрація</Link>    
                    <Link  to="/auth/login" className="uk-button uk-button-primary">Вхід</Link>
                </div>
            </div>
        </div>
    )
}

export default Header