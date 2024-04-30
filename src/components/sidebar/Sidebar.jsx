import "./sidebar.scss";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { getAuth } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../context/AuthContext";

const Sidebar = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleSignOut = async () => {
    try {
      const auth = getAuth();
      await auth.signOut();
      console.log('User signed out successfully');
      dispatch({ type: "LOGOUT" });
      navigate('/login');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };
    
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">FoodFrenzy</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <li onClick={handleSignOut}>
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;