import Heading from "../Products/Heading";
import Product from "../Products/product";

const BestSellers = () => {
    return (
        <div className="w-full pb-20">
            <Heading heading="Best Seller" />
            <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
                <Product
                    _id="1011"
                    img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                    productName="Flower Base"
                    price="35.00"
                    color="Blank and White"
                    badge="Hot"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
                <Product
                    _id="1012"
                    img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                    productName="New Backpack"
                    price="180.00"
                    color="Gray"
                    badge="Hot"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
                <Product
                    _id="1013"
                    img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                    productName="Household materials"
                    price="25.00"
                    color="Mixed"
                    badge="Hot"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
                <Product
                    _id="1014"
                    img='https://i.pinimg.com/736x/93/80/6b/93806b4e411c8cd9d36e753f69cdd930.jpg'
                    productName="Travel Bag"
                    price="220.00"
                    color="Black"
                    badge="Hot"
                    des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
                />
            </div>
        </div>
    );
};

export default BestSellers;
