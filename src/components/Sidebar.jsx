import { NavLink, useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";

import ThemeToggle from "./ThemeToggle";

import {
  FaHome,
  FaUsers,
  FaShoppingCart,
  FaBoxOpen,
  FaClipboardList,
  FaChartBar,
  FaRobot,
  FaBell,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

import "../styles/sidebar.css";


export default function Sidebar({ mobileOpen }) {

  const navigate = useNavigate();


  const logout = async () => {

    await supabase.auth.signOut();

    navigate("/login");

  };



  const menu = [
       
    {
      name: "Dashboard",
      icon: <FaHome />,
      path: "/"
    },

    {
      name: "CRM",
      icon: <FaUsers />,
      path: "/crm"
    },
       {
 name:"AI Customers",
 icon:<FaUsers />,
 path:"/ai-customers"
},
    {
      name: "Sales",
      icon: <FaShoppingCart />,
      path: "/sales"
    },

    {
      name: "Inventory",
      icon: <FaBoxOpen />,
      path: "/inventory"
    },

    {
      name: "Products",
      icon: <FaBoxOpen />,
      path: "/products"
    },

    {
      name: "Orders",
      icon: <FaClipboardList />,
      path: "/orders"
    },

    {
      name: "Reports",
      icon: <FaChartBar />,
      path: "/reports"
    },

    {
      name: "AI Assistant",
      icon: <FaRobot />,
      path: "/ai-assistant"
    },
             {
 name:"AI Inventory",
 icon:<FaBoxOpen />,
 path:"/ai-inventory"
},
    {
      name: "Notifications",
      icon: <FaBell />,
      path: "/notifications"
    },

    {
      name: "Profile",
      icon: <FaUser />,
      path: "/profile"
    },

    {
      name: "Settings",
      icon: <FaCog />,
      path: "/settings"
    },

  ];



  return (

    <aside
      className={
        mobileOpen
        ? "sidebar mobile-open"
        : "sidebar"
      }
    >


      <div className="sidebar-logo">


        <div className="logo-icon">
          🤖
        </div>


        <div>

          <h2>
            AI Business
          </h2>

          <span>
            Assistant
          </span>

        </div>


        <div className="sidebar-theme">

          <ThemeToggle />

        </div>


      </div>





      <nav className="sidebar-menu">
        
        

        {menu.map((item)=>(

          <NavLink

            key={item.name}

            to={item.path}

            className={({isActive}) =>
              isActive
              ? "menu-item active"
              : "menu-item"
            }

          >

            <span className="menu-icon">
              {item.icon}
            </span>


            <span>
              {item.name}
            </span>


          </NavLink>

        ))}


      </nav>





      <div className="sidebar-footer">


        <button

          className="logout-btn"

          onClick={logout}

        >

          <FaSignOutAlt />


          <span>
            Logout
          </span>


        </button>


      </div>



    </aside>

  );

}