import Navbar from "../../features/navbar/component";
// import Footer from "../footer/component";
import { Analytics } from "@vercel/analytics/react";

const Layout = ({ children }) => (
  <>
    <div className="wrapper">
      <Navbar />
      <main className="main-content">{children}</main>
      <Analytics />
    </div>
  </>
);

export default Layout;
