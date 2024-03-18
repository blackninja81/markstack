import Navbar from "./Navbar";
import Footer from "./Footer";
import Landing from "../Landing";
import "./layout.scss";

import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Landing/>
      <div className="main-children">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
