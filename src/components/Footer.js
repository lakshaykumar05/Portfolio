import React from "react";
import {Link} from 'react-router-dom';
// import {Instagram as InstagramIcon} from "@material-ui/icons";
// import {Mail as MailIcon} from "@material-ui/icons";
// import {LinkedIn as LinkedinIcon} from "@material-ui/icons";
// import {GitHub as GitHubIcon} from "@material-ui/icons";
import MailIcon from '@mui/icons-material/Mail';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedinIcon from '@mui/icons-material/LinkedIn';
import '../styles/Footer.css';


function Footer() {
    return (
        <div className="footer">
            <div className="socialMedia">
                <div className="links">
                    <Link to='https://www.linkedin.com/in/lakshay05/'>
                        <LinkedinIcon />
                    </Link>
                    <Link to='mailto:lakshaykumar0510@gmail.com'>
                        <MailIcon />
                    </Link>
                    <Link to='https://www.instagram.com/lakshayarora.1'>
                        <InstagramIcon />
                    </Link>
                    <Link to='https://github.com/lakshaykumar05'>
                        <GitHubIcon />
                    </Link>
                </div>
                {/* <LinkedinIcon />
                <InstagramIcon />
                <MailIcon />
                <GitHubIcon /> */}
            </div>
           <h3> Made with ❤️ by Lakshay Kumar </h3>
        </div>
    );
}

export default Footer;