import { faArrowLeft, faArrowRight, faArrowsTurnRight, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick';

const Deals = () => {
    // Custom Next Arrow
    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
          <div 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-1 rounded-full opacity-75 hover:opacity-100"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faArrowRight}/>
          </div>
        );
      };
      
      // Custom Prev Arrow
      const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
          <div 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-gray-800 text-white p-1 rounded-full opacity-75 hover:opacity-100"
            onClick={onClick}
          >
            <FontAwesomeIcon icon={faArrowLeft} />
          </div>
        );
      };

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear",
        pauseOnHover: true,
        arrows: true, // Ensure arrows are enabled
        rtl: false,
        nextArrow: <CustomNextArrow />, // Custom arrow components
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024, // Tablets and smaller
                settings: {
                    slidesToShow: 1, // Show 3 slides
                },
            },
            {
                breakpoint: 768, // Mobile devices
                settings: {
                    slidesToShow: 1, // Show only 1 slide
                },
            },
        ]
      };
      
      
    return (
        <div className='text-center lg:w-[90vw] mx-auto md:pt-20 pt-4 md:pb-12 pb-8' id='deals'>
            <h2 className='font-merriweather text-3xl font-bold mb-8'>Deals of the Day !!!</h2>
            <div className="deals">
                <Slider {...settings}>
                    <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                        <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                            <div className='h-[200px]'>
                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/i/m/y/m-st2-vebnor-original-imahfuabsgysawja.jpeg?q=70" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/d/k/i/s-st32-vebnor-original-imagu5zvfbhhhe4z.jpeg?q=70" alt="Image 4" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/o/s/p/m-ts-shirt1689-tanip-original-imagrf39sdkhdjcf.jpeg?q=70" alt="Image 3" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/i/6/30-01-jean-loose-black-nayak-fashion-original-imagvagjf9quxsbt.jpeg?q=70" alt="Image 2" />
                            </div>
                        </div>
                        <div className="p-5">
                            <Link to={`/products/${'menswear'}`}>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Men's Wear</h5>
                            </Link>
                            <p className='text-sm text-gray-500'>Shop the latest Men's Casual, Formal and Sports Wear from Trendy Brands</p>
                        </div>
                    </div>


                    <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                        <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2 ">
                            <div className='max-h-[200px]'>
                                <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/t/q/8/l-xf-2220-wine-xomantic-fashion-original-imagwf4hrb3hdagf.jpeg?q=70" alt="Image 1" />
                            </div>
                            {/* <div className='max-h-[200px]'> */}
                            <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/w/o/b/40-wsr-cruse-ts-lifestyle-original-imaghuzumfejh4rw.jpeg?q=70" alt="Image 1" />
                            {/* </div> */}
                            {/* <div className='max-h-[200px]'> */}
                            <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/ethnic-set/p/y/w/s-402-colors-of-earth-original-imaguu6pf8g6tpyc.jpeg?q=70" alt="Image 1" />
                            {/* </div> */}
                            {/* <div className='max-h-[200px]'> */}
                            <img className='w-full h-[200px] rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/salwar-kurta-dupatta/3/m/w/xl-kl1252-berrylicious-original-imagv43thsk68zf9.jpeg?q=70" alt="Image 1" />
                            {/* </div> */}
                        </div>
                        <div className="p-5">
                            <Link to={`/products/${'womenswear'}`}>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Women's Wear</h5>
                            </Link>
                            <p className='text-sm text-gray-500'>Shop the latest Trendy Wear from Top Brands</p>
                        </div>
                    </div>

                    <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                        <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/1/1/f/0-6-months-waistcoat-1-year-ultrina-original-imagpf653wwrs4x6.jpeg?q=70" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/0/j/h/18-24-months-003-gunatit-original-imagysf3ujhz5qwg.jpeg?q=70" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-dungaree-romper/i/h/y/6-12-months-dungaree-brown-1-brahmani-fashion-original-imaghb75mhd7ppjr.jpeg?q=70" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>
                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/kids-apparel-combo/f/5/c/1-2-years-locket-plazo-green-1-2y-htwentythree-original-imahfpqymvpgzays.jpeg?q=70" alt="Image 1" />
                            </div>
                        </div>
                        <div className="p-5">
                            <Link to={`/products/${'kidswear'}`}>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Kid's Wear</h5>
                            </Link>
                            <p className='text-sm text-gray-500'>Shop the latest Kid's Wear from Trendy Brands</p>
                        </div>
                    </div>
                    <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                        <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/z/3/3/-original-imahy3ztftz5ukus.jpeg?q=70" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/sandal/x/q/q/-original-imaggcb3vnxzcdxz.jpeg?q=70" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://i.pinimg.com/564x/8a/51/39/8a51392d178e7427ff8715fc6785cc54.jpg" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>
                                <img className='w-full h-full rounded-xl' src="https://i.ebayimg.com/images/g/dgkAAOSwY9Fl4Lcm/s-l1200.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="p-5">
                            <Link to={`/products/${'malefootwear'}`}>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Men's FootWear</h5>
                            </Link>
                            <p className='text-sm text-gray-500'>Shop the latest Men's Footwear from Trendy Brands</p>
                        </div>
                    </div>
                    <div className="max-w-sm w-[370px] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 font-inter text-start">
                        <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://www.dukeindia.com/cdn/shop/products/8905752034216_01_800x.jpg?v=1681210959" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://www.dukeindia.com/cdn/shop/products/8905752033851_1_800x.jpg?v=1678532589" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>

                                <img className='w-full h-full rounded-xl' src="https://s.alicdn.com/@sc04/kf/HTB1nDHiMVXXXXa5aXXXq6xXFXXXQ.jpg_300x300.jpg" alt="Image 1" />
                            </div>
                            <div className='h-[200px]'>
                                <img className='w-full h-full rounded-xl' src="https://i.pinimg.com/736x/fd/b6/30/fdb630f2dda5843073aeb02d662191ce.jpg" alt="Image 1" />
                            </div>
                        </div>
                        <div className="p-5">
                            <Link to={`/products/${'femalefootwear'}`}>
                                <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white ">Best Deals in Female Footwear</h5>
                            </Link>
                            <p className='text-sm text-gray-500'>Shop the latest Female Footwear from Trendy Brands</p>
                        </div>
                    </div>
                </Slider>
            </div>


        </div>
    )
}

export default Deals