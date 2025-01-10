import Container from "react-bootstrap/esm/Container";
import { useDeleteImmigrationMutation, useGetImmigrationQuery } from "../../redux/slices/ImmigrationSlice";
import { CiUser } from "react-icons/ci";
import { RiInfoCardLine } from "react-icons/ri";
import { PiPhoneDisconnect } from "react-icons/pi";
import { IoDiamondOutline, IoRocketOutline } from "react-icons/io5";
import { FaRegComment } from "react-icons/fa";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router";

export default function Home() {
    let { data, refetch, isLoading } = useGetImmigrationQuery()
    let [deleteImmigration] = useDeleteImmigrationMutation()

    const handleDelete = async (id) => {
        await deleteImmigration(id)
        refetch()
    }

    return (
        <>
            <Helmet>
                <title>Immigration</title>
            </Helmet>
            {
                isLoading ? (
                    <div className="flex items-center justify-center h-[75vh]">
                        <h1 className="">...Loading</h1>
                    </div>
                ) : (
                    <>
                        <div className="bg-[#f6214b] h-[600px] relative">
                            <div className="z-10 absolute text-white sm:max-w-[550px] sm:mx-[15%] h-full justify-center flex flex-col ">
                                <div>PROCESS VISA WITHOUT WITHIN HOURS</div>
                                <h1 className="text-3xl sm:text-6xl font-bold my-3">Immigrations & Visa Consultation</h1>
                                <button className="py-2 px-4 bg-white text-black font-semibold max-w-[200px]">Book Consultancy</button>
                            </div>
                            <div className="z-0 absolute bottom-0 right-0 max-w-[300px] h-[300px] sm:max-w-[600px] sm:h-[600px]">
                                <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp" className="z-0 w-full h-full" />
                            </div>
                        </div>

                        <div className="my-5">
                            <Container>
                                <div className="flex items-center justify-center flex-col my-4">
                                    <h1>Requirements to be Immigrants</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                    {
                                        data.length ? (
                                            data.map((element) => (
                                                <div key={element._id}>
                                                    <div className="w-full">
                                                        <img className="w-full" src={element.image} /></div>
                                                    <div className="my-4">
                                                        <button className="bg-[#222222] text-white py-1 px-2 my-1">{element.country}</button>
                                                        <p className="font-bold text-2xl">{element.title}</p>
                                                        <p>{element.description}</p>
                                                        <NavLink
                                                            to={`/detail/${element._id}`}>
                                                            <button className="bg-[#5a81a8] text-white py-1 px-2 my-1 mr-2">Detail</button>
                                                        </NavLink>
                                                        <button
                                                            onClick={() => handleDelete(element._id)}
                                                            className="bg-[#ea6767] text-white py-1 px-2 my-1">Delete</button>
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <></>
                                        )
                                    }
                                </div>
                            </Container>
                        </div>

                        <div className="my-5">
                            <Container>
                                <div className="flex items-center justify-center flex-col my-4">
                                    <h1>Our Unique Features that can impress you</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                                    <div>
                                        <div className="flex gap-2 items-center text-xl my-3 hover:text-[#f6214b] delay-100 ease-in transition-all">
                                            <span><CiUser /></span>
                                            <span className="font-semibold">Expert Technicians</span>
                                        </div>
                                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center text-xl my-3 hover:text-[#f6214b] delay-100 ease-in transition-all">
                                            <span><RiInfoCardLine /></span>
                                            <span className="font-semibold">Professional Service</span>
                                        </div>
                                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center text-xl my-3 hover:text-[#f6214b] delay-100 ease-in transition-all">
                                            <span><PiPhoneDisconnect /></span>
                                            <span className="font-semibold">Great Support</span>
                                        </div>
                                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center text-xl my-3 hover:text-[#f6214b] delay-100 ease-in transition-all">
                                            <span><IoRocketOutline /></span>
                                            <span className="font-semibold">Technical Skills</span>
                                        </div>
                                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center text-xl my-3 hover:text-[#f6214b] delay-100 ease-in transition-all">
                                            <span><IoDiamondOutline /></span>
                                            <span className="font-semibold">Highly Recomended</span>
                                        </div>
                                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                    </div>
                                    <div>
                                        <div className="flex gap-2 items-center text-xl my-3 hover:text-[#f6214b] delay-100 ease-in transition-all">
                                            <span><FaRegComment /></span>
                                            <span className="font-semibold">Positive Reviews</span>
                                        </div>
                                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                                    </div>
                                </div>
                            </Container>
                        </div>

                        <div className="my-5">
                            <Container>
                                <div className="flex items-center justify-center flex-col my-4">
                                    <h1>Latest News from our Blog</h1>
                                    <p>Who are in extremely love with eco friendly system.</p>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <div className="w-full">
                                            <img className="w-full" src="https://preview.colorlib.com/theme/immigration/img/b1.jpg.webp" alt="" />
                                        </div>
                                        <div className="my-4 flex flex-col gap-2">
                                            <div>
                                                <button
                                                    className="bg-[#f6214b] px-2 text-white mr-2">
                                                    Travel
                                                </button>
                                                <button
                                                    className="bg-[#f6214b] px-2 text-white">
                                                    Life style
                                                </button>
                                            </div>
                                            <h3>Portable latest Fashion for young women</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                            <span>31st January, 2018</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="w-full">
                                            <img className="w-full" src="https://preview.colorlib.com/theme/immigration/img/b2.jpg.webp" alt="" />
                                        </div>
                                        <div className="my-3 flex flex-col gap-2">
                                            <div>
                                                <button
                                                    className="bg-[#f6214b] px-2 text-white mr-2">
                                                    Travel
                                                </button>
                                                <button
                                                    className="bg-[#f6214b] px-2 text-white">
                                                    Life style
                                                </button>
                                            </div>
                                            <h3>Portable latest Fashion for young women</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
                                            <span>31st January, 2018</span>
                                        </div>
                                    </div>
                                </div>

                            </Container>
                        </div>
                    </>
                )
            }
        </>
    )
}