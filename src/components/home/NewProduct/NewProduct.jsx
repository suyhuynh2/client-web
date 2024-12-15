import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import NextArrow from "./NextArrow";
import PrevArrow from "./PrevArrow";

const NewProduct = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <div className="w-full pb-16">
            <Heading heading="Sản phẩm mới" />
            <Slider {...settings}>
                <div className="px-2">
                    <Product
                        _id="100001"
                        img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                        productName="Round Table Clock"
                        price="44.00"
                        color="Black"
                        badge={true}
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    />
                </div>
                <div className="px-2">
                    <Product
                        _id="100002"
                        img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                        productName="Smart Watch"
                        price="250.00"
                        color="Black"
                        badge={true}
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    />
                </div>
                <div className="px-2">
                    <Product
                        _id="100003"
                        img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                        productName="cloth Basket"
                        price="80.00"
                        color="Mixed"
                        badge={true}
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    />
                </div>
                <div className="px-2">
                    <Product
                        _id="100004"
                        img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                        productName="Funny toys for babies"
                        price="60.00"
                        color="Mixed"
                        badge={false}
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    />
                </div>
                <div className="px-2">
                    <Product
                        _id="100005"
                        img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                        productName="Funny toys for babies"
                        price="60.00"
                        color="Mixed"
                        badge={false}
                        des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                    />
                </div>
            </Slider>
        </div>
    );
};

export default NewProduct;
