import { useState } from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
// import FooterListTitle from "./FooterListTitle";
// import { paymentCard } from "../../../assets/images";
// import Image from "../../designLayouts/Image";

const Footer = () => {
    const [emailInfo, setEmailInfo] = useState("");
    const [subscription, setSubscription] = useState(false);
    const [errMsg, setErrMsg] = useState("");

    const emailValidation = () => {
        return String(emailInfo)
            .toLocaleLowerCase()
            .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
    };

    const handleSubscription = () => {
        if (emailInfo === "") {
            setErrMsg("Please provide an Email !");
        } else if (!emailValidation(emailInfo)) {
            setErrMsg("Please give a valid Email!");
        } else {
            setSubscription(true);
            setErrMsg("");
            setEmailInfo("");
        }
    };
    return (
        <div className="w-full bg-[#F5F5F3] py-20">
            <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-4 gap-10">
                <div className="col-span-2">
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">SUY COFFEE</h3>
                    <div className="flex flex-col gap-6">
                        <p className="text-base w-full xl:w-[80%]">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
                            ab ullam, numquam nesciunt in.
                        </p>
                        <ul className="flex items-center gap-2">
                            <a
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaYoutube />
                                </li>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaFacebook />
                                </li>
                            </a>
                            <a
                                href=""
                                target="_blank"
                                rel="noreferrer"
                            >
                                <li className="w-7 h-7 bg-primeColor text-gray-100 hover:text-white cursor-pointer text-lg rounded-full flex justify-center items-center hover:bg-black duration-300">
                                    <FaInstagram />
                                </li>
                            </a>
                        </ul>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">Cửa hàng</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Cà phê
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Trà
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Đá xay
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Bánh ngọt
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Thức ăn
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">Tài khoản của bạn</h3>
                    <ul className="flex flex-col gap-2">
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Thông tin
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Đặt hàng
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Địa chỉ
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Chi tiết tài khoản
                        </li>
                        <li className="font-titleFont text-base text-lightText hover:text-black hover:underline decoration-[1px] decoration-gray-500 underline-offset-2 cursor-pointer duration-300">
                            Phương thức thanh toán
                        </li>
                    </ul>
                </div>
                <div className="col-span-2 flex flex-col items-center w-full px-4">
                    <h3 className="text-xl font-bodyFont font-semibold mb-6">Đăng ký để nhận thông tin</h3>
                    <div className="w-full">
                        <p className="text-center mb-4">
                            SUY COFFEE
                        </p>
                        {subscription ? (
                            <motion.p
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="w-full text-center text-base font-titleFont font-semibold text-green-600"
                            >
                                Subscribed Successfully !
                            </motion.p>
                        ) : (
                            <div className="w-full flex-col xl:flex-row flex justify-between items-center gap-4">
                                <div className="flex flex-col w-full">
                                    <input
                                        onChange={(e) => setEmailInfo(e.target.value)}
                                        value={emailInfo}
                                        className="w-full h-12 border-b border-gray-400 bg-transparent px-4 text-primeColor text-lg placeholder:text-base outline-none"
                                        type="text"
                                        placeholder="Điền email tại đây..."
                                    />
                                    {errMsg && (
                                        <p className="text-red-600 text-sm font-semibold font-titleFont text-center animate-bounce mt-2">
                                            {errMsg}
                                        </p>
                                    )}
                                </div>
                                <button
                                    onClick={handleSubscription}
                                    className="bg-white text-lightText w-[30%] h-10 hover:bg-black hover:text-white duration-300 text-base tracking-wide rounded"
                                >
                                    Đăng ký
                                </button>

                            </div>
                        )}

                        <img className={`w-[80%] lg:w-[60%] mx-auto ${subscription ? "mt-2" : "mt-6"
                            }`} src="" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
