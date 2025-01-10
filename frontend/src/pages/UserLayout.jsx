import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router"
export default function UserLayout() {
    return(
        <>
        <Navbar/>  
        <Outlet/>
        <Footer/>
        </>
    )
}