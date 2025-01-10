import Container from "react-bootstrap/esm/Container";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { CiBasketball } from "react-icons/ci";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
    return(
        <Container className="flex items-center justify-between py-2 flex-col md:flex-row">
            <span>Copyright ©2025 All rights reserved | This template is made with ❤️ by Colorlib</span>
            <div className="flex items-center gap-2 text-lg">
                <span className="p-2 bg-[#F9F9FF] delay-100 transition-all ease-in hover:bg-[#f6214b] hover:text-white"><FaFacebookF /></span>
                <span className="p-2 bg-[#F9F9FF] delay-100 transition-all ease-in hover:bg-[#f6214b] hover:text-white"><FaTwitter /></span>
                <span className="p-2 bg-[#F9F9FF] delay-100 transition-all ease-in hover:bg-[#f6214b] hover:text-white"><CiBasketball /></span>
                <span className="p-2 bg-[#F9F9FF] delay-100 transition-all ease-in hover:bg-[#f6214b] hover:text-white"><FaBehance /></span>
            </div>
        </Container>
    )
}