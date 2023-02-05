import React, {useEffect, useState} from "react";
import { Link, useLocation } from "react-router-dom";
import '../styles/Navbar.css';
// import { Reorder as ReorderIcon } from "@material-ui/icons";
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {

    const [expandNavbar, setExpandNavbar] = useState(false);

    const location = useLocation();

    function changeExpandNavbarStatus() {
        setExpandNavbar((cur) => !cur);
        console.log(expandNavbar);
    }

    useEffect(() => {
        setExpandNavbar(false);
    },[location]);

    return (
        <div className="navbar" id={expandNavbar ? "open" : "close"}>
            <div className="toggleButton">
                <button onClick={changeExpandNavbarStatus}>
                    <ReorderIcon/>
                </button>
            </div>
            <div className="links">
                <Link to='/'> Home </Link>
                <Link to='/projects'> Projects </Link>
                <Link to='/experience'> Experience </Link>
            </div>
        </div>
    );
}

export default Navbar;