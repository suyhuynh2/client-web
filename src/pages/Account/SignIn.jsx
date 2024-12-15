import { useState } from "react";
import { Link } from "react-router-dom";

const SignIn = () => {
    // ============= Initial State Start here =============
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // ============= Initial State End here ===============
    // ============= Error Msg Start here =================
    const [errEmail, setErrEmail] = useState("");
    const [errPassword, setErrPassword] = useState("");

    // ============= Error Msg End here ===================
    const [successMsg, setSuccessMsg] = useState("");
    // ============= Event Handler Start here =============
    const handleEmail = (e) => {
        setEmail(e.target.value);
        setErrEmail("");
    };
    const handlePassword = (e) => {
        setPassword(e.target.value);
        setErrPassword("");
    };
    // ============= Event Handler End here ===============
    const handleSignUp = (e) => {
        e.preventDefault();

        if (!email) {
            setErrEmail("Hãy nhập email");
        }

        if (!password) {
            setErrPassword("Hãy nhập mật khẩu");
        }
        // ============== Getting the value ==============
        if (email && password) {
            setSuccessMsg(
                `Chào mừng bạn tới Coffee And Tea`
            );
            setEmail("");
            setPassword("");
        }
    };
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="w-full lgl:w-[500px] h-full flex flex-col justify-center">
                {successMsg ? (
                    <div className="w-full lgl:w-[500px]">
                        <p className="w-full px-4 py-10 text-green-500 font-medium font-titleFont">
                            {successMsg}
                        </p>
                        <Link to="/signup">
                            <button
                                className="w-full h-10 bg-primeColor text-gray-200 rounded-md text-base font-titleFont font-semibold 
            tracking-wide hover:bg-black hover:text-white duration-300"
                            >
                                Sign Up
                            </button>
                        </Link>
                    </div>
                ) : (
                    <form className="w-full lgl:w-[500px] h-auto flex items-center justify-center shadow-2xl">
                        <div className="px-6 py-4 w-full h-auto flex flex-col justify-center items-center">
                            <h1 className="font-titleFont underline underline-offset-4 decoration-[1px] font-semibold text-3xl mdl:text-4xl mb-4">
                                Đăng Nhập
                            </h1>
                            <div className="flex flex-col gap-3">
                                {/* Email */}
                                <div className="flex flex-col gap-.5">
                                    <p className="font-titleFont text-base font-semibold text-gray-600">
                                        Email
                                    </p>
                                    <input
                                        onChange={handleEmail}
                                        value={email}
                                        className="w-[400px] h-8 px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                                        type="email"
                                        
                                    />
                                    {errEmail && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errEmail}
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
                                        className="w-[400px] h-8 px-4 text-base font-medium rounded-md border-[1px] border-gray-400 outline-none"
                                        type="password"
                                    />
                                    {errPassword && (
                                        <p className="text-sm text-red-500 font-titleFont font-semibold px-4">
                                            <span className="font-bold italic mr-1">!</span>
                                            {errPassword}
                                        </p>
                                    )}
                                </div>

                                <button
                                    onClick={handleSignUp}
                                    className="bg-primeColor hover:bg-black text-gray-200 hover:text-white cursor-pointer w-full text-base font-medium h-10 rounded-md  duration-300"
                                >
                                    Đăng nhập
                                </button>
                                <p className="text-sm text-center font-titleFont font-medium">
                                    Bạn chưa có tài khoản?{" "}
                                    <Link to="/signup">
                                        <span className="hover:text-blue-600 duration-300">
                                            Đăng ký
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

export default SignIn;
