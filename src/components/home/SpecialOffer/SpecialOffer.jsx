import Heading from "../Products/Heading";
import Product from "../Products/product";


const SpecialOffers = () => {
    return (
        <div className="w-full pb-20">
            <Heading heading="Sản phẩm khuyến mãi" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
                <Product
                    _id="1101"
                    img='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    productName="Cap for Boys"
                    price="35.00"
                    color="Blank and White"
                    badge='Khuyến mãi'
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
                <Product
                    _id="1102"
                    img='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    productName="Tea Table"
                    price="180.00"
                    color="Gray"
                    badge='Khuyến mãi'
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
                <Product
                    _id="1103"
                    img='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    productName="Headphones"
                    price="25.00"
                    color="Mixed"
                    badge='Khuyến mãi'
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
                <Product
                    _id="1104"
                    img='https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    productName="Sun glasses"
                    price="220.00"
                    color="Black"
                    badge='Khuyến mãi'
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
            </div>
        </div>
    );
};

export default SpecialOffers;
