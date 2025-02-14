import React from 'react';
import { Carousel } from 'antd';
import { Link } from 'react-router-dom'

const Corousel = () => (
  <Carousel autoplay speed={800}>
    <div className='w-full'>
      <div class="relative w-full h-[250px] md:h-[500px] lg:h-[500px] bg-[url('https://assets.ajio.com/cms/AJIO/WEB/15062021-D-NewArrival-Topbanner-Newstylesadded.jpg')] bg-cover bg-top flex items-center justify-end px-6 md:px-12 lg:px-20">

        {/* <!-- Dark overlay --> */}
        {/* <div class="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* <!-- Advertisement Section --> */}
        <Link to={'/new_arrivals'}>
          <div class="relative bg-transparent p-6 md:p-8 lg:p-10 rounded-lg shadow-lg text-gray-900 cursor-pointer w-[80vw] md:h-[400px] h-[200px] mx-auto">
            {/* <h2 class="text-2xl md:text-3xl font-bold">🚀 New Arrivals!</h2>
          <p class="mt-2 text-sm md:text-base text-gray-600">
            Check out the latest trends and exclusive collections available now.
          </p>
          <a href="#" class="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </a> */}
          </div>
        </Link>

      </div>
    </div>
    <div className='w-full'>
      <div class="relative w-full h-[250px] md:h-[500px] lg:h-[500px] bg-[url('https://www.theindianfashion.in/wp-content/uploads/2024/08/Yellow-Gradient-Modern-Minimalist-Summer-Sale-Up-To-20-Off-Banner-Landscape-1-scaled.webp')] bg-cover bg-top flex items-center justify-end px-6 md:px-12 lg:px-20">

        {/* <!-- Dark overlay --> */}
        {/* <div class="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* <!-- Advertisement Section --> */}
        <Link to={'/products/womenswear'}>
          <div class="relative bg-transparent p-6 md:p-8 lg:p-10 rounded-lg shadow-lg text-gray-900 cursor-pointer w-[80vw] md:h-[400px] h-[200px] mx-auto">
            {/* <h2 class="text-2xl md:text-3xl font-bold">🚀 New Arrivals!</h2>
          <p class="mt-2 text-sm md:text-base text-gray-600">
            Check out the latest trends and exclusive collections available now.
          </p>
          <a href="#" class="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </a> */}
          </div>
        </Link>

      </div>
    </div>
    <div className='w-full'>
      <div class="relative w-full h-[250px] md:h-[500px] lg:h-[500px] bg-[url('https://cdn.shopify.com/s/files/1/0068/3707/6025/collections/NEW_ARRIVALS_BW.png?v=1691783263')] bg-contain bg-top flex items-center justify-end px-6 md:px-12 lg:px-20">

        {/* <!-- Dark overlay --> */}
        {/* <div class="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* <!-- Advertisement Section --> */}
        <Link to={'/products/malefootwear'}>
          <div class="relative bg-transparent p-6 md:p-8 lg:p-10 rounded-lg shadow-lg text-gray-900 cursor-pointer w-[80vw] md:h-[400px] h-[200px] mx-auto">
            {/* <h2 class="text-2xl md:text-3xl font-bold">🚀 New Arrivals!</h2>
          <p class="mt-2 text-sm md:text-base text-gray-600">
            Check out the latest trends and exclusive collections available now.
          </p>
          <a href="#" class="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </a> */}
          </div>
        </Link>

      </div>
    </div>
    <div className='w-full'>
      <div class="relative w-full h-[250px] md:h-[500px] lg:h-[500px] bg-[url('https://f.nooncdn.com/mpcms/EN0001/assets/5fcdae42-6fe0-44ba-90c2-29343ba375ae.png?format=png')] bg-contain bg-center flex items-center justify-end px-6 md:px-12 lg:px-20">

        {/* <!-- Dark overlay --> */}
        {/* <div class="absolute inset-0 bg-black bg-opacity-40"></div> */}

        {/* <!-- Advertisement Section --> */}
        <Link to={'/products/mobiles'}>
          <div class="relative bg-transparent p-6 md:p-8 lg:p-10 rounded-lg shadow-lg text-gray-900 cursor-pointer w-[80vw] md:h-[400px] h-[200px] mx-auto">
            {/* <h2 class="text-2xl md:text-3xl font-bold">🚀 New Arrivals!</h2>
          <p class="mt-2 text-sm md:text-base text-gray-600">
            Check out the latest trends and exclusive collections available now.
          </p>
          <a href="#" class="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
            Shop Now
          </a> */}
          </div>
        </Link>

      </div>
    </div>


  </Carousel>
);
export default Corousel;















// import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper/modules"; // Import Autoplay module
// import "swiper/css";
// import { useState } from "react";
// import { Link } from "react-router-dom";


// const images = [
//   "https://graphicsfamily.com/wp-content/uploads/edd/2022/11/Simple-E-commerce-Banner-Design-scaled.jpg",
//   "https://graphicsfamily.com/wp-content/uploads/edd/2022/12/E-commerce-Product-Banner-Design-scaled.jpg",
//   "https://graphicsfamily.com/wp-content/uploads/edd/2023/09/Banner-for-bicycle-e-commerce-website-scaled.jpg",
//   "https://graphicsfamily.com/wp-content/uploads/edd/2024/01/Promo-Ecommerce-Website-Banner-Design-scaled.jpg",
//   "https://graphicsfamily.com/wp-content/uploads/edd/2024/12/Ecommerce-Shoes-Website-Banner-Ad-Design-870x489.jpg",
// ];

// export default function Corousel() {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <div className="relative w-full flex justify-center items-center py-10"> {/* Ensures it is visible */}
//       <Swiper
//         slidesPerView={2}
//         centeredSlides={true}
//         loop={true}
//         autoplay={{ delay: 3000, disableOnInteraction: false }}
//         speed={800}
//         onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
//         modules={[Autoplay]}
//         className="relative w-full h-full" // Make sure it's visible
//       >
//         {images.map((src, index) => (
//           <SwiperSlide key={index} className="relative flex justify-center items-center">
//             <div
//               className={`w-[760px] transition-transform duration-500 ${
//                 activeIndex === index ? "scale-110 opacity-100 z-50" : "scale-90 opacity-70 z-10"
//               }`}
//             >
//               <img src={src} className="w-full h-[400px] rounded-lg shadow-lg" />
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </div>
//   );
// }
