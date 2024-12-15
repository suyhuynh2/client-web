import { Link } from "react-router-dom";


const YearProduct = () => {
    return (
        <Link to="">
            <div className="w-full h-80 mb-20 bg-[#f3f3f3] md:bg-transparent relative font-titleFont">
                <img className="w-full h-full object-cover hidden md:inline-block" src="https://thelovelycup.com/wp-content/uploads/khoa-hoc-barista-du-hoc-1-1.jpg" alt="" />
                <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
                    <h1 className="text-3xl font-semibold text-white">
                        Product of The year
                    </h1>
                    <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat
                        cupiditate modi amet! Facilis, aperiam quaerat.
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default YearProduct;
