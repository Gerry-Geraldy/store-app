import Navbar from "../components/User/Navbar";
import Footer from "../components/User/Footer";
import { Outlet } from "react-router-dom";
const UserLayout = () => {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen py-2 px-4 ">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default UserLayout;
