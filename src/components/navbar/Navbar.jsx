import React from 'react'
import "./navbar.scss"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
import { Link } from 'react-router-dom';
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { dispatch } = useContext(DarkModeContext);
    const navigate = useNavigate();
    const { dispatch: logoutDispatch } = useContext(AuthContext);
    const handleSignOut = async () => {
        try {
        const auth = getAuth();
        await auth.signOut();
        console.log('User signed out successfully');
        logoutDispatch({ type: "LOGOUT" });
        navigate('/login');
        } catch (error) {
        console.error('Error signing out:', error);
        }
    };

  return (
    <div className='navbar'>
        <div className="top">
            <Link to="/" style={{ textDecoration: "none" }}>
            <span className="logo">FoodFrenzy</span>
            </Link>
        </div>
        <div className="wrapper">
            <div className="items">
                <div className="item">
                    <DarkModeOutlinedIcon
                    className="icon"
                    onClick={() => dispatch({ type: "TOGGLE" })}
                    />
                </div>   
            </div>
            <div className="center">
                <ul>
                    <li onClick={handleSignOut}>
                        <ExitToAppIcon className="icon" />
                        <span>Logout</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar