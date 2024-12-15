import { Link } from "react-router-dom";

const Sale = () => {
    return (
        <div className="py-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10">
            {/* Ảnh 1: 780x780 */}
            <div className="w-full md:w-2/3 lg:w-1/2">
                <Link to="">
                    <img
                        className="w-full object-cover"
                        src="https://i.pinimg.com/736x/2e/e8/12/2ee8124cf986d29f499202fac499698f.jpg"
                        alt=""
                        style={{
                            height: "780px",
                            maxWidth: "780px",
                        }}
                    />
                </Link>
            </div>

            {/* Ảnh 2 và 3 */}
            <div className="w-full md:w-2/3 lg:w-1/2 flex flex-col gap-4 lg:gap-10">
                {/* Ảnh 2: 780x370 */}
                <div>
                    <Link to="">
                        <img
                            className="w-full object-cover"
                            src="https://i.pinimg.com/736x/d6/02/c3/d602c33ad9463f2f98a83d94d7a6830f.jpg"
                            alt=""
                            style={{
                                height: "370px",
                                maxWidth: "780px",
                            }}
                        />
                    </Link>
                </div>
                {/* Ảnh 3: 780x370 */}
                <div>
                    <Link to="">
                        <img
                            className="w-full object-cover"
                            src="https://i.pinimg.com/736x/f9/37/1c/f9371c6ed86739b4716cdae6101a69bf.jpg"
                            alt=""
                            style={{
                                height: "370px",
                                maxWidth: "780px",
                            }}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Sale;
