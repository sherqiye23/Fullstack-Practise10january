import Container from "react-bootstrap/esm/Container";

export default function Home() {
    return (
        <>
            <div className="bg-[#f6214b] h-[600px] relative">
                <div className="text-white max-w-[550px] mx-[15%] h-full justify-center flex flex-col">
                    <div>PROCESS VISA WITHOUT WITHIN HOURS</div>
                    <h1 className="text-6xl font-bold my-3">Immigrations & Visa Consultation</h1>
                    <button className="py-2 px-4 bg-white text-black font-semibold max-w-[200px]">Book Consultancy</button>
                </div>
                <div className="absolute bottom-0 right-0 max-w-[600px] h-[600px]">
                    <img src="https://preview.colorlib.com/theme/immigration/img/header-img.png.webp" className="w-full h-full" />
                </div>
            </div>
            <div>
                <Container>
                    <div className="flex items-center justify-center flex-col my-4">
                        <h1>Requirements to be Immigrants</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="grid grid-cols-4 gap-6">
                        <div>
                            <div className="w-full">
                                <img className="w-full" src="https://preview.colorlib.com/theme/immigration/img/s1.jpg.webp" alt="" /></div>
                            <div className="my-4">
                                <button className="bg-[#222222] text-white py-1 px-2 my-1">United states</button>
                                <p className="font-bold text-2xl">Addiction When Gambling Becomes A Problem</p>
                                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <img className="w-full" src="https://preview.colorlib.com/theme/immigration/img/s1.jpg.webp" alt="" /></div>
                            <div className="my-4">
                                <button className="bg-[#222222] text-white py-1 px-2 my-1">United states</button>
                                <p className="font-bold text-2xl">Addiction When Gambling Becomes A Problem</p>
                                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <img className="w-full" src="https://preview.colorlib.com/theme/immigration/img/s1.jpg.webp" alt="" /></div>
                            <div className="my-4">
                                <button className="bg-[#222222] text-white py-1 px-2 my-1">United states</button>
                                <p className="font-bold text-2xl">Addiction When Gambling Becomes A Problem</p>
                                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                        <div>
                            <div className="w-full">
                                <img className="w-full" src="https://preview.colorlib.com/theme/immigration/img/s1.jpg.webp" alt="" /></div>
                            <div className="my-4">
                                <button className="bg-[#222222] text-white py-1 px-2 my-1">United states</button>
                                <p className="font-bold text-2xl">Addiction When Gambling Becomes A Problem</p>
                                <p>inappropriate behavior ipsum dolor sit amet, consectetur.</p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}