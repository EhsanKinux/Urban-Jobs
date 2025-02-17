import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";

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
