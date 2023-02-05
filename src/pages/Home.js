import React from 'react';
// import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import emoji from 'react-easy-emoji';
// import {Mail as MailIcon} from "@material-ui/icons";
// import {LinkedIn as LinkedinIcon} from "@material-ui/icons";
// import {GitHub as GitHubIcon} from "@material-ui/icons";
// import {Image as ImageIcon} from "@material-ui/icons";
import '../styles/Home.css';


function Home() {

    // const navigate = useNavigate();
  
    // const ResumeLink = () => {
    //     navigate('https://drive.google.com/drive/folders/1gpCAePxaSGhXb8AGL1Vulh-n9Rdv6u9n');
    // }

    return (
        <div className='home'>
            <div className='about'>
                <h2>Hello, My name is Lakshay Kumar {emoji("👋")}</h2>
                <div className='prompt'>
                    <p>A Competitive Programmer and Full Stack Developer with a passion of learning new technologies and solving different problems.</p>
                    <br/> <br/>
                    {/* <Link to='https://www.linkedin.com/in/lakshay05/'>
                        <LinkedinIcon />
                    </Link>
                    <Link to='mailto:lakshaykumar0510@gmail.com'>
                        <MailIcon />
                    </Link>
                    <Link to='https://github.com/lakshaykumar05'>
                        <GitHubIcon />
                    </Link> */}
                    <a href="https://drive.google.com/drive/folders/1gpCAePxaSGhXb8AGL1Vulh-n9Rdv6u9n" target="_blank" rel="noopener noreferrer">
                    <button class="btn" ><i class="fa fa-download"></i> 
                    Resume
                    </button>
                    </a>

                    {/* <h3>Coding Profiles</h3>
                    
                    <i class="cib-leetcode"></i> */}

                </div>
            </div>
            <div className='skills'>
               <u> <h3>Skills</h3> </u>
                <ol className='list'>
                    <li className='item'>
                        <span>
                        <h2>
                            Languages:
                        </h2>
                        <span>
                            C, C++, Python, Java, Javascript, SQL, HTML, CSS
                        </span>
                        </span>
                    </li>
                    <li className='item'>
                    <span>
                        <h2>
                            Technologies:
                        </h2>
                        <span>
                            Django(Backend), MySQL(Database), React JS(Frontend)
                        </span>
                        </span>
                    </li>
                    <li className='item'>
                    <span>
                        <h2>
                            Programming:
                        </h2>
                        <span>
                            Data Structures and Algorithms, Problem Solving, Competitive Programming
                        </span>
                        </span>
                    </li>
                    <li className='item'>
                    <span>
                        <h2>
                            CS Fundamentals:
                        </h2>
                        <span>
                            Database Management System, Object Oriented Programming, Operating System
                        </span>
                        </span>
                    </li>
                </ol>
            </div>
            {/* <div className='skills'>
               <u> <h3>Achievements</h3> </u>
               <ol className='list'>
                <li className='item'>
                    <span>
                       <h3>2 times ACM ICPC Amritapuri Regionalist with College Rank 1</h3>
                    </span> 
                    <span>
                        <h3>Expert at Codeforces and 5 {emoji("⭐")} at Codechef </h3>
                    </span>
                    <span>
                        <h3>
                        Indian Rank 234 in Google Hash Code 2022.
                        </h3>
                    </span>
                </li>
               </ol>
            </div> */}
        </div>
    );
}

export default Home;