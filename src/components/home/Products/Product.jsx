import { FaShoppingCart } from "react-icons/fa";
import { MdOutlineLabelImportant } from "react-icons/md";
import Badge from "./Badge";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/orebiSlice";

const Product = (props) => {
    const dispatch = useDispatch();
    const _id = props.productName;
    const idString = (_id) => {
        return String(_id).toLowerCase().split(" ").join("");
    };
    const rootId = idString(_id);

    const navigate = useNavigate();
    const productItem = props;
    const handleProductDetails = () => {
        navigate(`/product/${rootId}`, {
            state: {
                item: productItem,
            },
        });
    };
    return (
        <div className="w-full relative group">
            <div className="max-w-80 max-h-80 relative overflow-y-hidden ">
                <div>
                    <img className="w-full h-full" src={props.img} alt="" />
                </div>
                <div className="absolute top-6 left-8">
                    {props.badge && <Badge text={typeof props.badge === 'boolean' ? 'New' : props.badge} />}
                </div>
                <div className="w-full h-25 absolute bg-white -bottom-[130px] group-hover:bottom-0 duration-700">
                    <ul className="w-full h-full flex flex-col items-end justify-center gap-2 font-titleFont px-2 border-l border-r">
                        <li
                            onClick={() =>
                                dispatch(
                                    addToCart({
                                        _id: props._id,
                                        name: props.productName,
                                        quantity: 1,
                                        image: props.img,
                                        badge: props.badge,
                                        price: props.price,
                                        colors: props.color,
                                    })
                                )
                            }
                            className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer p-1 duration-300 w-full"
                        >
                            Thêm vào giỏ
                            <span>
                                <FaShoppingCart />
                            </span>
                        </li>
                        <li
                            onClick={handleProductDetails}
                            className="text-[#767676] hover:text-primeColor text-sm font-normal border-b-[1px] border-b-gray-200 hover:border-b-primeColor flex items-center justify-end gap-2 hover:cursor-pointer p-1 duration-300 w-full"
                        >
                            Chi tiết
                            <span className="text-lg">
                                <MdOutlineLabelImportant />
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="max-w-80 py-6 flex flex-col gap-1 border-[1px] border-t-0 px-4">
                <div className="flex items-center justify-between font-titleFont">
                    <h2 className="text-lg text-primeColor font-bold">
                        {props.productName}
                    </h2>
                    <p className="text-[#767676] text-[14px]">${props.price}</p>
                </div>
                <div>
                    <p className="text-[#767676] text-[14px]">{props.color}</p>
                </div>
            </div>
        </div>
    );
};

export default Product;
