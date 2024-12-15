import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
// import { HiOutlineMenuAlt4 } from "react-icons/hi";
import { FaSearch, FaUser, FaCaretDown, FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
    const products = useSelector((state) => state.orebiReducer.products);
    // const [show, setShow] = useState(false);
    const [showUser, setShowUser] = useState(false);
    // const navigate = useNavigate();
    // const ref = useRef();
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = (e) => {
        setSearchQuery(e.target.value);
    };

    return (
        <div className="w-full bg-[#F5F5F3] relative">
            <div className="max-w-container mx-auto">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between w-full px-4 pb-4 lg:pb-0 h-full lg:h-24">
                    <div className="flex h-14 cursor-pointer items-center gap-2 text-primeColor">
                        <h3 className="font-bold">SUY COFFEE</h3>
                    </div>
                    <div className="relative w-full lg:w-[600px] h-[50px] text-base text-primeColor bg-white flex items-center gap-2 justify-between px-6 rounded-xl">
                        <input
                            className="flex-1 h-full outline-none placeholder:text-[#C4C4C4] placeholder:text-[14px]"
                            type="text"
                            onChange={handleSearch}
                            value={searchQuery}
                            placeholder="Tìm kiếm"
                        />
                        <FaSearch className="w-5 h-5" />
                    </div>
                    <div className="flex gap-4 mt-2 lg:mt-0 items-center pr-6 cursor-pointer relative">
                        <div onClick={() => setShowUser(!showUser)} className="flex">
                            <FaUser />
                            <FaCaretDown />
                        </div>
                        {showUser && (
                            <motion.ul
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="absolute top-6 left-0 z-50 bg-primeColor w-44 text-[#767676] h-auto p-4 pb-6"
                            >
                                <Link to="/signin">
                                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        Đăng nhập
                                    </li>
                                </Link>
                                <Link onClick={() => setShowUser(false)} to="/signup">
                                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        Đăng ký
                                    </li>
                                </Link>
                                <Link onClick={() => setShowUser(false)} to="">
                                    <li className="text-gray-400 px-4 py-1 border-b-[1px] border-b-gray-400 hover:border-b-white hover:text-white duration-300 cursor-pointer">
                                        Thông tin
                                    </li></Link>
                            </motion.ul>
                        )}
                        <Link to="/cart">
                            <div className="relative">
                                <FaShoppingCart />
                                <span className="absolute font-titleFont top-3 -right-2 text-xs w-4 h-4 flex items-center justify-center rounded-full bg-primeColor text-white">
                                    {products.length > 0 ? products.length : 0}
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default HeaderBottom;
