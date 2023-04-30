import "./header.css";
import Logo from "../assests/instaclone.svg";
import Camera from "../assests/camera.gif";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <>
            <div className="nav">
                <a href="/"> <img src={Logo} alt="insta-logo" id="logo" title="Go to Home Page"></img></a>
                <Link to="/postform"><img src={Camera} alt="camera" id="camera" title="Post now your memories!"></img></Link>
            </div>
        </>
    )
}
export default Header;