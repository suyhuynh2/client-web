import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const About = () => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState("");
    useEffect(() => {
        setPrevLocation(location.state.data);
    }, [location]);
    return (
        <div className="max-w-container mx-auto px-4">
            <Breadcrumbs title="Giới thiệu" prevLocation={prevLocation} />
            <div className="pb-10">
                <h1 className="custom-h1 text-lightText">
                    <span className="custom-span">Suy Coffee</span>{" "}
                    is one of the world is leading ecommerce brands and is internationally
                    recognized for celebrating the essence of classic Worldwide cool
                    looking style.
                </h1>
                <Link to="/shop">
                    <button className="custom-button">
                        Xem cửa hàng
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default About;
