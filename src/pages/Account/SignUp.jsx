import { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
    // ============= Initial State Start here =============
    const [clientName, setClientName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [checked, setChecked] = useState(false);
    // ============= Initial State End here ===============
    // ============= Error Msg Start here =================
    const [errClientName, setErrClientName] = useState("");
    const [errEmail, setErrEmail] = useState("");
    const [errPhone, setErrPhone] = useState("");
    const [errPassword, setErrPassword] = useState("");
    const [errAddress, setErrAddress] = useState("");
    const [errCity, setErrCity] = useState("");
    // ============= Error Msg End here ===================
    const [successMsg, setSuccessMsg] = useState("");
    // ============= Event Handler Start here =============
    const handleName = (e) => {
        setClientName(e.target.value);
        setErrClientName("");
    };
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePhone = (e) => {
        setPhone(e.target.value);
        setErrPhone("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };
    const handleAddress = (e) => {
        setAddress(e.target.value);
        setErrAddress("");
    };
    const handleCity = (e) => {
        setCity(e.target.value);
        setErrCity("");
    };
    // ============= Event Handler End here ===============
    // ================= Email Validation start here =============
    const EmailValidation = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
    };
    // ================= Email Validation End here ===============

    const handleSignUp = (e) => {
        e.preventDefault();
        if (checked) {
            if (!clientName) {
                setErrClientName("Nhập tên");
            }
            if (!email) {
                setErrEmail("Nhập email");
            } else {
                if (!EmailValidation(email)) {
                    setErrEmail("Enter a Valid email");
                }
            }
            if (!phone) {
                setErrPhone("Nhập SĐT");
            }
            if (!password) {
                setErrPassword("Tạo mật khẩu");
            } else {
                if (password.length < 6) {
                    setErrPassword("Mật khẩu ít nhất 6 ký tự");
                }
            }
            if (!address) {
                setErrAddress("Nhập địa chỉ");
            }
            if (!city) {
                setErrCity("Nhập thành phố");
            }
            // ============== Getting the value ==============
            if (
                clientName &&
                email &&
                EmailValidation(email) &&
                password &&
                password.length >= 6 &&
                address &&
                city
            ) {
                setSuccessMsg(
                    `Hello dear ${clientName}, Welcome you to OREBI Admin panel. We received your Sign up request. We are processing to validate your access. Till then stay connected and additional assistance will be sent to you by your mail at ${email}`
                );
                setClientName("");
                setEmail("");
                setPhone("");
                setPassword("");
                setAddress("");
                setCity("");
            }
        }
    };
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
                {successMsg ? (
                    <div className="w-[500px]">
                        <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                            {successMsg}
                        </p>
                        <Link to="/signin">
                            <button
                                className="w-full h-10 bg-primeColor rounded-md text-gray-200 text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
                            >
                                Đăng nhập
                            </button>
                        </Link>
                    </div>
                ) : (
                    <form className="w-full lgl:w-[500px] h-auto flex items-center justify-center shadow-2xl">
                        <div className="px-6 py-4 w-full h-auto flex flex-col justify-center items-center">
                            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-2xl mdl:text-3xl mb-4">
                                Đăng Ký Tài Khoản
                            </h1>
                            <div className="flex flex-col gap-3">
                                {/* client name */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Họ tên
                                    </p>
                                    <input
                                        onChange={handleName}
                                        value={clientName}
                                        className="w-[400px] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="text"

                                    />
                                    {errClientName && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errClientName}
                                        </p>
                                    )}
                                </div>
                                {/* Email */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Email
                                    </p>
                                    <input
                                        onChange={handleEmail}
                                        value={email}
                                        className="w-[400px] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="email"

                                    />
                                    {errEmail && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errEmail}
                                        </p>
                                    )}
                                </div>
                                {/* Phone Number */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Số điện thoại
                                    </p>
                                    <input
                                        onChange={handlePhone}
                                        value={phone}
                                        className="w-[400px] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="text"
                                    />
                                    {errPhone && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errPhone}
                                        </p>
                                    )}
                                </div>
                                {/* Password */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Mật khẩu
                                    </p>
                                    <input
                                        onChange={handlePassword}
                                        value={password}
                                        className="w-[400px] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="password"
                                    />
                                    {errPassword && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errPassword}
                                        </p>
                                    )}
                                </div>
                                {/* Address */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Địa chỉ
                                    </p>
                                    <input
                                        onChange={handleAddress}
                                        value={address}
                                        className="w-[400px] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="text"
                                    />
                                    {errAddress && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errAddress}
                                        </p>
                                    )}
                                </div>
                                {/* City */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Thành phố
                                    </p>
                                    <input
                                        onChange={handleCity}
                                        value={city}
                                        className="w-[400px] h-8 placeholder:text-sm placeholder:tracking-wide px-4 text-base font-medium placeholder:font-normal rounded-md border-[1px] border-gray-400 outline-none"
                                        type="text"
                                    />
                                    {errCity && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errCity}
                                        </p>
                                    )}
                                </div>
                                <br />
                                <button
                                    onClick={handleSignUp}
                                    className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                    >
                                    Đăng ký
                                </button>
                                <p className="text-sm text-center font-titleFont font-medium">
                                    Bạn đã có tài khoản rồi ?{" "}
                                    <Link to="/signin">
                                        <span className="hover:text-blue-600 duration-300">
                                            Đăng nhập
                                        </span>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </form>
                )}
            </div>
        </div>
    );
};

export default SignUp;
