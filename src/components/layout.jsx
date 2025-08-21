import { Outlet } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import Footer from "./footer.jsx";
import VirtualAssistant from "./VirtualAssistant.jsx";

function Layout() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <Outlet /> 
      </main>
      <VirtualAssistant />  
      <Footer />
    </div>
  );
}

export default Layout;
