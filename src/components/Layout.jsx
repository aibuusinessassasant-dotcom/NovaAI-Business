import { useState } from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import Hamburger from "./Hamburger";
import AIFloatingButton from "./AIFloatingButton";

import "../styles/layout.css";

export default function Layout() {

  const [sidebar, setSidebar] = useState(false);

  return (
    <div className="app-layout">

      <Hamburger
        open={sidebar}
        setOpen={setSidebar}
      />

      <Sidebar
        mobileOpen={sidebar}
      />

      {sidebar && (
        <div
          className="sidebar-overlay"
          onClick={() => setSidebar(false)}
        />
      )}

      <Topbar />

      <main className="main-content">
        <Outlet />
      </main>

      <AIFloatingButton />

    </div>
  );
}