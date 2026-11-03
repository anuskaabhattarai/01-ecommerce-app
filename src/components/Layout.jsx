import Header from "@/components/Header";
import SearchForm from "@/components/SearchForm";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Outlet } from "react-router-dom";


export default function Layout({
  searchQuery,
  handleSearchChange
}) {

  return (
    <>
      <div className="page">
        <ToastContainer />
        <Header>
          <SearchForm
            searchQuery={searchQuery}
            onSearchChange={handleSearchChange}
          />
          <NavBar  />
        </Header>

        <Outlet />

        {/* <Products searchQuery={searchQuery} /> */}
        <Footer />
      </div>
    </>
  );
}