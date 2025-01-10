import Container from "react-bootstrap/esm/Container";
import { Helmet } from "react-helmet";
import { useNavigate, useParams } from "react-router";
import { useGetImmigrationByIdQuery } from "../../redux/slices/ImmigrationSlice";

export default function Detail() {
    let { id } = useParams()
    let { data, isLoading } = useGetImmigrationByIdQuery(id)
    let navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title>Detail Page</title>
            </Helmet>

            {
                isLoading ? (
                    <div className="flex items-center justify-center h-[75vh]">
                        <h1>...Loading</h1>
                    </div>
                ) : (
                    <Container className="my-5 h-[60vh]">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="mr-5 md:w-[40%]">
                                <img className="w-full h-full" src={data.image} />
                            </div>
                            <div>
                                <button className="bg-[#222222] text-white py-1 px-2 my-1">{data.country}</button>
                                <p className="font-bold text-2xl">{data.title}</p>
                                <p>{data.description}</p>
                                <button 
                                onClick={() => navigate("/")}
                                className="bg-gray-500 text-white py-1 px-2 my-1">Back</button>
                            </div>
                        </div>
                    </Container>
                )
            }
        </>
    )
}