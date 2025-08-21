import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
