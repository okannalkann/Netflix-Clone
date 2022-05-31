import { ArrowDropDown, Notifications, Search } from "@material-ui/icons"
import { useContext, useState } from "react"
import "./navbar.scss"
import {Link} from "react-router-dom";
import { AuthContext } from "../../authContext/AuthContext";
import { logout } from "../../authContext/AuthActions";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
 
    const { dispatch} = useContext(AuthContext)
    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src="data:image/png;base64,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" alt="" />
                    <Link to="/" className="link">
                    <span>Homepage</span>
                    </Link>
                    <Link to="/series" className="link">
                        <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                        <span>Movies</span>
                    </Link>
                    <span>New And Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icon" />
                    <span>KID</span>
                    <Notifications  className="icon"/>
                    <img src="data:image/jpeg;base64,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" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icon"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={() => dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar