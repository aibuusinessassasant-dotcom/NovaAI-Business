import {
  FaSearch,
  FaBell,
  FaMoon,
  FaUserCircle
} from "react-icons/fa";

import "../styles/navbar.css";
import NotificationBell from "../components/NotificationBell";
import ProfileDropdown from "../components/ProfileDropdown";


<div className="header-right">


<NotificationBell/>


<ProfileDropdown/>


</div>

export default function Navbar() {

  return (

    <header className="navbar">

      {/* LEFT */}

      <div className="navbar-left">

        <h2>
          AI Business Assistant
        </h2>

      </div>


      {/* CENTER */}

      <div className="search-box">

        <FaSearch className="search-icon"/>

        <input
          type="text"
          placeholder="Search customers, sales, reports..."
        />

      </div>


      {/* RIGHT */}

      <div className="navbar-right">

        <button className="icon-btn">

          <FaMoon/>

        </button>


        <button className="icon-btn notification-btn">

          <FaBell/>

          <span className="badge">
            3
          </span>

        </button>


        <div className="profile">

          <FaUserCircle className="avatar"/>

          <div>

            <h4>Admin</h4>

            <p>AI Manager</p>

          </div>

        </div>

      </div>

    </header>

  );

}