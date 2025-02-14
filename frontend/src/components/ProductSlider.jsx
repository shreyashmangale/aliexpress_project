import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

export const ProductSlider = () => {
    // var settings = {
    //     dots: true,
    //     infinite: true,
    //     speed: 2000,
    //     slidesToShow: 3,
    //     slidesToScroll: 0,
    //     autoplay: true,
    //     autoplaySpeed: 0,
    //     cssEase: "linear",
    //     prevArrow: (
    //         <button className="slick-prev slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
    //             {"<"}
    //         </button>
    //     ),
    //     nextArrow: (
    //         <button className="slick-next slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
    //             {">"}
    //         </button>
    //     ),
    // };

    const products = [
        {
            "Brand": "VeBNoR",
            "Description": "Men Printed Round Neck Polyester Green T-Shirt",
            "Image": "https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/9/t/l/xl-ts12-vebnor-original-imahyf5svpbyng3v.jpeg?q=70",
            "Price": "₹259",
            "Unnamed: 0": 1
        },
        {
            "Brand": "VeBNoR",
            "Description": "Men Regular Fit Solid Mandarin Collar Casual Shirt",
            "Image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/a/j/v/m-st1-vebnor-original-imahftaarhyyd3jy.jpeg?q=70",
            "Price": "₹299",
            "Unnamed: 0": 2
        },
        {
            "Brand": "VeBNoR",
            "Description": "Men Regular Fit Printed Spread Collar Casual Shirt",
            "Image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/y/k/e/m-st10-vebnor-original-imagsfcfdf3masf5.jpeg?q=70",
            "Price": "₹269",
            "Unnamed: 0": 3
        },
        {
            "Brand": "Surhi",
            "Description": "Men Regular Fit Checkered Spread Collar Casual Shirt",
            "Image": "https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/p/z/z/m-pk21sh09g-surhi-original-imahfyes8eugjdsr.jpeg?q=70",
            "Price": "₹299",
            "Unnamed: 0": 4
        },
        {
            Brand: "VredeVogel",
            Description: "Women Cotton Silk Kurta Pant Dupatta Set",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/0/g/d/xxl-vv-9424-vredevogel-original-imahy9dcgesxnyud.jpeg?q=70",
            Price: "₹709",
            Unnamed: 277
        },
        {
            Brand: "ANNU PARIDHAN",
            Description: "Women Viscose Rayon Kurta Pant Dupatta Set",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/i/w/v/l-anu2167-annu-paridhan-original-imagtyywa53ca3zu.jpeg?q=70",
            Price: "₹699",
            Unnamed: 278
        },
        {
            Brand: "PFFASHION",
            Description: "Women Printed Pure Cotton Straight Kurta",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/8/s/k/s-top-23-pf-fashion-original-imagzzfbbweyzpnd.jpeg?q=70",
            Price: "₹239",
            Unnamed: 279
        },
        {
            Brand: "PFFASHION",
            Description: "Women Printed Pure Cotton Straight Kurta",
            Image: "https://rukminim2.flixcart.com/image/612/612/xif0q/kurta/z/u/r/s-top-19-pf-fashion-original-imagzm99ckhyahxb.jpeg?q=70",
            Price: "₹239",
            Unnamed: 280
        },
        {
            "Brand": "Lenovo IdeaPad Slim 1 AMD Ryzen 5 Quad Core 7520U - (8 GB/SSD/512 GB SSD/Windows 11 Home) 15AMN7 Thin ...",
            "Description": "AMD Ryzen 5 Quad Core Processor8 GB LPDDR5 RAMWindows 11 Operating System512 GB SSD39.62 cm (15.6 inch) DisplayMicrosoft Office Home & Student 20211 Year Carry-in Warranty",
            "Image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/a/m/8/15amn7-thin-and-light-laptop-lenovo-original-imagrzhgyudpzzxs.jpeg?q=70",
            "Price": "₹35,999",
            "Tag": "Laptop, Electronics",
            "Unnamed: 0": 44
        },
        {
            "Brand": "Infinix Inbook Y2 Plus Intel Core i3 11th Gen 1115G4 - (8 GB/SSD/512 GB SSD/Windows 11 Home) XL29 Thin...",
            "Description": "Intel Core i3 Processor (11th Gen)8 GB LPDDR4X RAM64 bit Windows 11 Operating System512 GB SSD39.62 cm (15.6 inch) DisplayNA1 Year Onsite Warranty",
            "Image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/v/9/v/inbook-y2-plus-thin-and-light-laptop-infinix-original-imahfqhwahdbft87.jpeg?q=70",
            "Price": "₹24,990",
            "Tag": "Laptop, Electronics",
            "Unnamed: 0": 45
        },
        {
            "Brand": "Lenovo Yoga Slim 6 WUXGA OLED Intel Core i7 13th Gen 13700H - (16 GB/SSD/512 GB SSD/Windows 11 Home) 1...",
            "Description": "Intel Core i7 Processor (13th Gen)16 GB LPDDR5X RAMWindows 11 Operating System512 GB SSD35.56 cm (14 inch) Display1 Year Onsite Warranty + 1Year Premium Care",
            "Image": "https://rukminim2.flixcart.com/image/312/312/xif0q/computer/3/r/g/-original-imahyyhrsfw6gsez.jpeg?q=70",
            "Price": "₹88,190",
            "Tag": "Laptop, Electronics",
            "Unnamed: 0": 46
        },
    ];

    var settings = {
        dots: false,
    infinite: true,
    speed: 2000, // Reduce speed for smoother transition
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0, // Avoid setting it to 0
    cssEase: "ease-in-out", // Better smooth transition
    pauseOnHover: true, // Prevent lag when hovered
        prevArrow: (
            <button className="slick-prev slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
                {"<"}
            </button>
        ),
        nextArrow: (
            <button className="slick-next slick-arrow text-white hover:text-gray-300 bg-black w-10 h-10 flex justify-center items-center rounded-full shadow-lg">
                {">"}
            </button>
        ),
        responsive: [
            {
                breakpoint: 1024, // Tablets and smaller
                settings: {
                    slidesToShow: 3, // Show 3 slides
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 2, // Show only 1 slide
                },
            },
        ]
    };
    return (
        <div className="w-full px-8 mx-auto md:my-16 md:py-8 my-4" id='trending'>
            <h2 className='font-merriweather text-3xl font-bold mb-8 text-center'>Trending Products</h2>
            <Slider {...settings}>
                {
                    products.slice(0, 10).map((item) => {
                        return (

                            <div className='font-inter p-2 border shadow-lg rounded-lg flex flex-col justify-evenly w-full mx-auto min-h-[290px]'>
                                <img class="max-w-full mx-auto h-[180px] rounded-lg" src={item.Image} alt="product_image" />
                                <div className='md:px-4 mt-2'>
                                    {/* <Link to={`/details/${item.Description.replace(/\//g, "----")}`}> */}
                                        <h1 className='font-semibold lg:text-md text-xs'>{item.Description.slice(0, 50) + "..."}</h1>
                                    {/* </Link> */}
                                    {/* <h4 className='text-gray-400 text-sm'>{item.Brand.slice(0, 50)}</h4> */}
                                    <div className='flex justify-between items-center my-2'>
                                        <p className='font-bold text-gray-600'>{item.Price}</p>
                                        {/* <button className='px-3 py-1 border-2 border-blue-700 hover:border-white hover:bg-blue-400 transition duration-200 rounded-xl '><FontAwesomeIcon icon={faCartShopping} /> </button> */}
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </Slider>
        </div>
    )
}
