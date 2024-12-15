import Banner from "../../components/Banner/Banner";
import BannerBottom from "../../components/Banner/BannerBottom";
import Sale from "../../components/Sale/Sale";
import NewProduct from "../../components/home/NewProduct/NewProduct";
import BestSeller from "../../components/home/BestSeller/BestSeller";
import YearProduct from "../../components/home/YearProduct/YearProduct";
import SpecialOffer from "../../components/home/SpecialOffer/SpecialOffer";

const Home = () => {
    return (
        <div className="w-full mx-auto">
            <Banner />
            <BannerBottom />
            <div className="max-w-container mx-auto px-4">
                <Sale />
                <NewProduct />
                <BestSeller />
                <YearProduct />
                <SpecialOffer />
            </div>
        </div>
    );
};

export default Home;