import { Outlet } from "react-router";
import Header from "../components/header";
import Footer from "../components/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow p-6 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
export default Layout;
