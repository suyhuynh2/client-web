import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(true);
    const [sidenav, setSidenav] = useState(false);
    const [category, setCategory] = useState(false);
    const [brand, setBrand] = useState(false);
    useEffect(() => {
        let ResponsiveMenu = () => {
            if (window.innerWidth < 667) {
                setShowMenu(false);
            } else {
                setShowMenu(true);
            }
        };
        ResponsiveMenu();
        window.addEventListener("resize", ResponsiveMenu);
    }, []);
    return (
        <div className="w-full h-20 bg-white sticky top-0 z-50 border-b-[1px] border-b-gray-200">
            <nav className="h-full px-4 max-w-container mx-auto relative">
                <div className="flex items-center justify-between h-full rounded">
                    <Link to="">
                        <div>
                            <img
                                className="w-20 object-cover"
                                src="https://i.pinimg.com/736x/06/a6/77/06a677cc510ba844be26e93ddcb58ebc.jpg"
                                alt=""
                            />
                        </div>
                    </Link>
                    <div>
                        {showMenu && (
                            <motion.ul
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.5 }}
                                className="flex items-center w-auto z-50 p-0 gap-2" // Thêm gap để tạo khoảng cách
                            >
                                <>
                                    <NavLink
                                        className="flex font-normal hover:font-bold justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                        to="/"
                                        state={{ data: location.pathname.split("/")[1] }}
                                    >
                                        Trang Chủ
                                    </NavLink>
                                    <NavLink
                                        className="flex font-normal hover:font-bold justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                        to="/shop"
                                        state={{ data: location.pathname.split("/")[1] }}
                                    >
                                        Cửa Hàng
                                    </NavLink>
                                    <NavLink
                                        className="flex font-normal hover:font-bold justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                        to="/about"
                                        state={{ data: location.pathname.split("/")[1] }}
                                    >
                                        Giới Thiệu
                                    </NavLink>
                                    <NavLink
                                        className="flex font-normal hover:font-bold justify-center items-center px-12 text-base text-[#767676] hover:underline underline-offset-[4px] decoration-[1px] hover:text-[#262626] md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                        to="/contact"
                                        state={{ data: location.pathname.split("/")[1] }}
                                    >
                                        Liên hệ
                                    </NavLink>

                                </>
                            </motion.ul>
                        )}

                        <HiMenuAlt2
                            onClick={() => setSidenav(!sidenav)}
                            className="inline-block md:hidden cursor-pointer w-8 h-6 absolute top-6 right-4"
                        />
                        {sidenav && (
                            <div className="fixed top-0 left-0 w-full h-screen bg-black text-gray-200 bg-opacity-80 z-50">
                                <motion.div
                                    initial={{ x: -300, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 0.5 }}
                                    className="w-[80%] h-full relative"
                                >
                                    <div className="w-full h-full bg-primeColor p-6">
                                        <img
                                            className="w-28 mb-6"
                                            src="https://i.pinimg.com/736x/06/a6/77/06a677cc510ba844be26e93ddcb58ebc.jpg"
                                            alt="logoLight"
                                        />
                                        <ul className="text-gray-200 flex flex-col gap-2">
                                            <li
                                                className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                            >
                                                <NavLink
                                                    to=""
                                                    state={{ data: location.pathname.split("/")[1] }}
                                                    onClick={() => setSidenav(false)}
                                                >
                                                    Trang chủ
                                                </NavLink>
                                            </li>
                                            <li
                                                className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                            >
                                                <NavLink
                                                    to=""
                                                    state={{ data: location.pathname.split("/")[1] }}
                                                    onClick={() => setSidenav(false)}
                                                >
                                                    Cửa hàng
                                                </NavLink>
                                            </li>
                                            <li
                                                className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                            >
                                                <NavLink
                                                    to=""
                                                    state={{ data: location.pathname.split("/")[1] }}
                                                    onClick={() => setSidenav(false)}
                                                >
                                                    Giới Thiệu
                                                </NavLink>
                                            </li>
                                            <li
                                                className="font-normal hover:font-bold items-center text-lg text-gray-200 hover:underline underline-offset-[4px] decoration-[1px] hover:text-white md:border-r-[2px] border-r-gray-300 hoverEffect last:border-r-0"
                                            >
                                                <NavLink
                                                    to=""
                                                    state={{ data: location.pathname.split("/")[1] }}
                                                    onClick={() => setSidenav(false)}
                                                >
                                                    Liên Hệ
                                                </NavLink>
                                            </li>
                                        </ul>
                                        <div className="mt-4">
                                            <h1
                                                onClick={() => setCategory(!category)}
                                                className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                                            >
                                                Shop by Category{" "}
                                                <span className="text-lg">{category ? "-" : "+"}</span>
                                            </h1>
                                            {category && (
                                                <motion.ul
                                                    initial={{ y: 15, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="text-sm flex flex-col gap-1"
                                                >
                                                    <li className="headerSedenavLi">New Arrivals</li>
                                                    <li className="headerSedenavLi">Gudgets</li>
                                                    <li className="headerSedenavLi">Accessories</li>
                                                    <li className="headerSedenavLi">Electronics</li>
                                                    <li className="headerSedenavLi">Others</li>
                                                </motion.ul>
                                            )}
                                        </div>
                                        <div className="mt-4">
                                            <h1
                                                onClick={() => setBrand(!brand)}
                                                className="flex justify-between text-base cursor-pointer items-center font-titleFont mb-2"
                                            >
                                                Shop by Brand
                                                <span className="text-lg">{brand ? "-" : "+"}</span>
                                            </h1>
                                            {brand && (
                                                <motion.ul
                                                    initial={{ y: 15, opacity: 0 }}
                                                    animate={{ y: 0, opacity: 1 }}
                                                    transition={{ duration: 0.4 }}
                                                    className="text-sm flex flex-col gap-1"
                                                >
                                                    <li className="headerSedenavLi">New Arrivals</li>
                                                    <li className="headerSedenavLi">Gudgets</li>
                                                    <li className="headerSedenavLi">Accessories</li>
                                                    <li className="headerSedenavLi">Electronics</li>
                                                    <li className="headerSedenavLi">Others</li>
                                                </motion.ul>
                                            )}
                                        </div>
                                    </div>
                                    <span
                                        onClick={() => setSidenav(false)}
                                        className="w-8 h-8 border-[1px] border-gray-300 absolute top-2 -right-10 text-gray-300 text-2xl flex justify-center items-center cursor-pointer hover:border-red-500 hover:text-red-500 duration-300"
                                    >
                                        <MdClose />
                                    </span>
                                </motion.div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
