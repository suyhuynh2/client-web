
import { MdLocalShipping } from "react-icons/md";
import { CgUserlane } from "react-icons/cg";

const BannerBottom = () => {
    return (
        <div className="w-full bg-white border-b-[1px] py-4 border-b-gray-200 px-4">
            <div className="max-w-container mx-auto h-20 flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center gap-2 w-72 ">
                <span className="text-xl text-center w-6 ml-1">
                        <CgUserlane />
                    </span>
                    <p className="text-base font-bold">NGON</p>
                </div>
                <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
                    <span className="text-xl text-center w-6 ml-1">
                        <CgUserlane />
                    </span>
                    <p className="text-base font-bold">CHẤT LƯỢNG</p>
                </div>
                <div className="flex md:w-auto items-center gap-2 w-72 shadow-sm hover:shadow-md duration-300">
                    <span className="text-2xl text-center w-6">
                        <CgUserlane />
                    </span>
                    <p className="text-base font-bold">ĐỈNH NÓC KỊCH TRẦN</p>
                </div>
            </div>
        </div>
    );
};

export default BannerBottom;
