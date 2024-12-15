import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Banner = () => {
    const [dotActive, setDotActive] = useState(0);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        beforeChange: (prev, next) => {
            setDotActive(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    bottom: "20px",
                    width: "100%",
                    textAlign: "center",
                }}
            >
                <ul style={{ margin: "0", padding: "0", display: "flex", justifyContent: "center", gap: "10px" }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={{
                    width: "30px",
                    height: "30px",
                    lineHeight: "30px",
                    textAlign: "center",
                    borderRadius: "50%",
                    background: i === dotActive ? "#262626" : "#cccccc",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                }}
            >
                {i + 1}
            </div>
        ),
    };

    return (
        <div className="w-full bg-white">
            <Slider {...settings}>
                <div>
                    <img
                        src="https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Image 1"
                        style={{
                            width: "100%",
                            height: "600px",
                            objectFit: "cover",
                        }}

                    />
                </div>
                <div>
                    <img
                        src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Image 2"
                        style={{
                            width: "100%",
                            height: "600px",
                            objectFit: "cover",
                        }}

                    />
                </div>
                <div>
                    <img
                        src="https://images.pexels.com/photos/129207/pexels-photo-129207.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="Image 3"
                        style={{
                            width: "100%",
                            height: "600px",
                            objectFit: "cover",
                        }}

                    />
                </div>
            </Slider>
        </div>
    );
};

export default Banner;
