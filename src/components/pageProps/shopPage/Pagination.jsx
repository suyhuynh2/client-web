import { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "../../home/Products/Product";

const Pagination = ({ itemsPerPage }) => {
    const paginationItems = [
        {
            _id: 1001,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Cap for Boys",
            price: "35.00",
            color: "Blank and White",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1002,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Tea Table",
            price: "180.00",
            color: "Gray",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1003,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Headphones",
            price: "25.00",
            color: "Mixed",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1004,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Sun glasses",
            price: "220.00",
            color: "Black",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1001,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Cap for Boys",
            price: "35.00",
            color: "Blank and White",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1002,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Tea Table",
            price: "180.00",
            color: "Gray",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1003,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Headphones",
            price: "25.00",
            color: "Mixed",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1004,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Sun glasses",
            price: "220.00",
            color: "Black",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1001,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Cap for Boys",
            price: "35.00",
            color: "Blank and White",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1002,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Tea Table",
            price: "180.00",
            color: "Gray",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1003,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Headphones",
            price: "25.00",
            color: "Mixed",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1004,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Sun glasses",
            price: "220.00",
            color: "Black",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1001,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Cap for Boys",
            price: "35.00",
            color: "Blank and White",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1002,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Tea Table",
            price: "180.00",
            color: "Gray",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1003,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Headphones",
            price: "25.00",
            color: "Mixed",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1004,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Sun glasses",
            price: "220.00",
            color: "Black",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1001,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Cap for Boys",
            price: "35.00",
            color: "Blank and White",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1002,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Tea Table",
            price: "180.00",
            color: "Gray",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1003,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Headphones",
            price: "25.00",
            color: "Mixed",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
        {
            _id: 1004,
            img: 'http://localhost:3000/static/media/spfOne.af2c5aa8d8015ffcccf4.webp',
            productName: "Sun glasses",
            price: "220.00",
            color: "Black",
            badge: true,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis.",
        },
    ];

    const [itemOffset, setItemOffset] = useState(0);
    const [itemStart, setItemStart] = useState(1);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = paginationItems.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(paginationItems.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % paginationItems.length;
        setItemOffset(newOffset);
        setItemStart(newOffset);
    };

    const Items = ({ currentItems }) => {
        return (
            <>
                {currentItems &&
                    currentItems.map((item) => (
                        <div key={item._id} className="w-full">
                            <Product
                                _id={item._id}
                                img={item.img}
                                productName={item.productName}
                                price={item.price}
                                color={item.color}
                                badge={item.badge}
                                des={item.des}
                            />
                        </div>
                    ))}
            </>
        );
    };

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mdl:gap-4 lg:gap-10">
                <Items currentItems={currentItems} />
            </div>
            <div className="flex flex-col mdl:flex-row justify-center mdl:justify-between items-center">
                <ReactPaginate
                    nextLabel=""
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={2}
                    pageCount={pageCount}
                    previousLabel=""
                    pageLinkClassName="w-9 h-9 border-[1px] border-lightColor hover:border-gray-500 duration-300 flex justify-center items-center"
                    pageClassName="mr-6"
                    containerClassName="flex text-base font-semibold font-titleFont py-10"
                    activeClassName="bg-black text-white"
                />
                <p className="text-base font-normal text-lightText">
                    Sản phẩm từ {itemStart === 0 ? 1 : itemStart} đến {endOffset} của {" "}
                    {paginationItems.length}
                </p>
            </div>
        </div>
    );
};

export default Pagination;
