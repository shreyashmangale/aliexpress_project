import React from 'react'
import { Card } from 'antd';

import WomenFootwear from '../assets/medium-elegant-brown-high-heels-placed-on-a-polished-wooden-floor-reflecting-light-beautifully.jpeg'
import { useDispatch } from 'react-redux';
import { updateCategory } from '../redux/actions/actions';
import { Link } from 'react-router-dom';

const { Meta } = Card;
const Categories = () => {

    const dispatch = useDispatch();
    function handleCategory(categoryVal) {
        dispatch(updateCategory(categoryVal));
    }
    return (
        <div className='text-center lg:w-[80vw] mx-auto pt-4 md:pb-12 pb-8' id='categories'>
            <h2 className='font-merriweather text-3xl font-bold mb-8'>Shop by category</h2>
            <div class="grid md:grid-cols-2 grid-cols-1 gap-8 p-4">
                <div class="flex flex-col bg-blue-100 p-4 rounded-xl">
                    <div className='text-start md:ms-4 md:mt-4 py-4 md:px-8 font-inter'>
                        <h1 className='text-xl mb-2'>Latest in Electronics, Books and Gadgets</h1>
                        <h2 className='px-4 py-2 rounded-lg bg-black text-white text-sm w-fit'>Shop Now</h2>
                    </div>
                    <div className='flex flex-grow items-center justify-around gap-4'>
                        <div className="max-w-md bg-white rounded-lg shadow-xl font-inter text-start">
                            <div class="grid grid-cols-2 grid-rows-2 gap-4 p-2">
                                <div className='w-[80%] h-full my-auto mx-auto bg-white rounded-lg border shadow-lg'>
                                    <Link to={`/products/${'mobiles'}`}>
                                        <img className='mx-auto px-4 py-8 w-[80%] h-full rounded-xl' src="https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/t/f/a/-original-imahfk4xp4xcggyt.jpeg?q=70" alt="Image 1" />
                                    </Link>
                                </div>
                                <div className='w-[80%] h-full my-auto mx-auto bg-white rounded-lg border shadow-lg'>
                                <Link to={`/products/${'laptops'}`}>
                                    <img className='mx-auto px-4 py-8 w-[80%] h-full rounded-xl' src="https://rukminim2.flixcart.com/image/312/312/xif0q/computer/f/z/a/14-ek1010tu-thin-and-light-laptop-hp-original-imagnksxpampc2fe.jpeg?q=70" alt="Image 4" />
                                </Link>
                                </div>
                                <div className='w-[80%] h-full my-auto mx-auto bg-white rounded-lg border shadow-lg'>
                                <Link to={`/products/${'watches'}`}>
                                    <img className='mx-auto px-4 py-8 w-[80%] h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/watch/v/f/2/-original-imagrdzghye4wtqq.jpeg?q=70" alt="Image 3" />
                                </Link>
                                </div>
                                <div className='w-[80%] h-full my-auto mx-auto bg-white rounded-lg border shadow-lg'>
                                <Link to={`/products/${'books'}`}>
                                    <img className='mx-auto px-4 py-8 w-[80%] h-full rounded-xl' src="https://rukminim2.flixcart.com/image/612/612/xif0q/regionalbooks/a/g/i/interact-in-english-main-course-book-mcb-plus-literature-reader-original-imagps7cgz2pyzzy.jpeg?q=70" alt="Image 2" />
                                </Link>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>

                <div class="grid grid-cols-2 grid-rows-5 gap-4 bg-gray-200 p-4 rounded-xl">
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://media.gettyimages.com/id/684156684/video/close-up-well-dressed-man-adjusting-tie-in-menswear-shop.jpg?s=640x640&k=20&c=6BGYpPnepoLjCiQnX_ug8JDGqvvAUDtjjMNuc0Oag-o=" alt="mesn-clothing" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'menswear'}`}>
                                <h1 className='text-lg text-white font-semibold'>Men's Clothing</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://c0.wallpaperflare.com/preview/710/671/653/people-girl-female-lady-thumbnail.jpg" alt="womens-clothing" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'womenswear'}`}>
                                <h1 className='text-lg text-white font-semibold'>Women's Clothing</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://storage.pixteller.com/designs/designs-images/2020-12-21/05/sport-shoes-sale-banner-1-5fe0c471dbecb.png" alt="mens-footwear" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'malefootwear'}`}>
                                <h1 className='text-lg text-white font-semibold'>Men's Footwear</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src={WomenFootwear} alt="womens-footwear" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'femalefootwear'}`}>
                                <h1 className='text-lg text-white font-semibold'>Women's Footwear</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/cb919e124321033.61017d216b12f.jpg" alt="kids-clothing" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'kidswear'}`}>
                                <h1 className='text-lg text-white font-semibold'>Kid's Clothing</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://onyc.in/cdn/shop/files/ONYC_Banner_24.png?v=1721982071&width=1920" alt="kids-footwear" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'kidsfootwear'}`}>
                                <h1 className='text-lg text-white font-semibold'>Kid's Footwear</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/premium-photo/row-old-books-brown-shelf-horizontal-background-banner_118047-10156.jpg" alt="books" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'books'}`}>
                                <h1 className='text-lg text-white font-semibold'>Books</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/free-photo/modern-technology-connects-global-communications-through-wireless-equipment-generative-ai_188544-46208.jpg?t=st=1738573714~exp=1738577314~hmac=962a1d076e47d50efa9bb838e618ae5e6e45c0aaf434ddbd8e9a89f92697575f&w=1380" alt="mobiles" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'mobiles'}`}>
                                <h1 className='text-lg text-white font-semibold'>Mobiles</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/free-photo/blank-screen-workspace-with-computer-laptop-table-night-copy-space_169016-56936.jpg" alt="laptops" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'laptops'}`}>
                                <h1 className='text-lg text-white font-semibold'>Laptops</h1>
                            </Link>
                        </div>
                    </div>
                    <div className='px-2 w-full h-[120px] relative hover:scale-[103%] transition duration-500 rounded-lg'>
                        <img className='w-full h-full object-cover rounded-lg' src="https://img.freepik.com/premium-photo/high-end-watches-jewelry-case_961875-444188.jpg" alt="watches" />
                        <div className='absolute bottom-4 right-4 z-50 text-center '>
                            <Link to={`/products/${'watches'}`}>
                                <h1 className='text-lg text-white font-semibold'>Watches</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Categories