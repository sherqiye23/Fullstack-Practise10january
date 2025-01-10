import Container from 'react-bootstrap/Container';
import { FaPhone } from "react-icons/fa6";
import { IoChevronDown } from "react-icons/io5";
import { NavLink } from 'react-router';

export default function Navbar() {

    return (
        <div >
            <div className='border-bottom'>
                <Container >
                    <div className='flex justify-between items-center'>
                        <div className='font-semibold w-[17%]'>We believe we helps people
                            for happier lives</div>
                        <div><img src="https://preview.colorlib.com/theme/immigration/img/logo.png.webp" alt="" /></div>
                        <div className='flex items-center'>
                            <span className='mr-2'>+880 123 12 658 439</span>
                            <span className='bg-[#F6214B] text-white text-3xl p-4'><FaPhone /></span>
                        </div>
                    </div>
                </Container>
            </div>
            <Container>
                <div className='flex items-center justify-center py-3 gap-3 text-sm font-semibold'>
                    <NavLink to={"/"}
                        style={({ isActive }) => {
                            return isActive ? { color: "#f6214b", textDecoration:"none" } : { color: "#000", textDecoration:"none" };
                        }}>
                        <span className='hover:text-[#f6214b] delay-150 transition-all ease-in'>HOME</span>
                    </NavLink>
                    <NavLink to={"/add"}
                        style={({ isActive }) => {
                            return isActive ? { color: "#f6214b", textDecoration:"none" } : { color: "#000", textDecoration:"none" };
                        }}>
                        <span className='hover:text-[#f6214b] delay-150 transition-all ease-in'>ADD PAGE</span>
                    </NavLink>
                    <NavLink to={"/favorites"}
                        style={({ isActive }) => {
                            return isActive ? { color: "#f6214b", textDecoration:"none" } : { color: "#000", textDecoration:"none" };
                        }}>
                        <span className='hover:text-[#f6214b] delay-150 transition-all ease-in'>FAVORITES</span>
                    </NavLink>
                    <span className='hover:text-[#f6214b] delay-150 transition-all ease-in'>COURSE</span>
                    <span className='hover:text-[#f6214b] delay-150 transition-all ease-in'>COUNTRY</span>
                    <span className='flex items-center hover:text-[#f6214b] delay-150 transition-all ease-in'>BLOG <IoChevronDown /></span>
                    <span className='hover:text-[#f6214b] delay-150 transition-all ease-in' >CONTACT</span>
                    <span className='hover:text-[#f6214b] delay-150 transition-all ease-in'>ELEMENTS</span>
                </div>
            </Container>
        </div>
    )
}