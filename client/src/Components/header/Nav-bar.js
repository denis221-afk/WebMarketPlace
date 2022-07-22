import { Link } from 'react-router-dom';
const NavBar = ({user}) => {
    return(
        <div className="container">
            <div className="header header-flex">
                <Link to="/" className="header-logo">
                    Web<span>MarketPlace</span>
                </Link>
                <div className="panel">
                   <span uk-icon="sign-out"></span>
                   <span uk-icon="heart"></span>
                   <span uk-icon="bag"></span>
                   <Link to={`/acaunt/${user._id}`} className='avatar'></Link>
                </div>
            </div>
        </div>
    )
} 
 export default NavBar