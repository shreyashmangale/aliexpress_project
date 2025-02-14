import React from 'react'
import Navbar from '../components/Navbar'
import Corousel from '../components/Corousel'
import Deals from '../components/Deals'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import { ProductSlider } from '../components/ProductSlider'
import VisitedProducts from '../components/VisitedProducts'
import { Link } from 'react-router-dom'


const Home = () => {

    return (

        <div>
            <Navbar />
            {/* <div className="w-full flex justify-center sm:gap-24 gap-4 py-4 text-black sm:text-lg text-xs border-y-2 transition font-inter">
                <a href="#corousel">New Arrivals🎉</a>
                <a href="#deals">Deals Today</a>
                <a href="#trending">Trending Today</a>
                <a href="#categories">All Categories</a>
                <a href="#footer">Contact Us</a>
            </div> */}
            <div className="w-full flex justify-center sm:gap-16 gap-6 py-4 text-black sm:text-lg text-xs border-y-2 border-gray-300 bg-gray-100 shadow-md transition font-inter">
                <a href="#corousel" className="relative group">
                    New Arrivals🎉
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#deals" className="relative group">
                    Deals Today
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#trending" className="relative group">
                    Trending Today
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
                <a href="#categories" className="relative group">
                    All Categories
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </a>
                <Link to={"/contactus"} className="relative group">
                    Contact Us
                    <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-blue-500 transition-all group-hover:w-full"></span>
                </Link>
            </div>

            <Corousel />


            <div className='bg-gray-100'>
                <Deals />
            </div>
            <ProductSlider />
            <VisitedProducts />
            <div className='w-full h-[40px]'></div>
            <Categories />
            <Footer />
        </div>
    )
}

export default Home