import Footer from "../../Shared/Footer/Footer";
import Navbar_one from "../../Shared/Navbar/Navbar_one/Navbar_one";
import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar_two/Navbar_two";

const Main = () => {
  return (
    <>
      {/* <Navbar_one /> */}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
