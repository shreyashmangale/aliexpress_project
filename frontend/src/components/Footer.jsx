import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (


        // <footer class="bg-gray-800" id='footer'>
        //     <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        //         <div class="md:flex md:justify-between">
        //             <div class="mb-6 md:mb-0">
        //                 <a href="" class="flex items-center">

        //                     <span class="self-center text-2xl font-semibold whitespace-nowrap text-white">AliExpress</span>
        //                 </a>
        //             </div>
        //             <div class="grid grid-cols-1 gap-8 sm:gap-6 sm:grid-cols-2">
        //                 <div>
        //                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Resources</h2>
        //                     <ul class="text-gray-400 dark:text-gray-400 font-medium">
        //                         <li class="mb-4">
        //                             <a href="" class="hover:underline"></a>
        //                         </li>
        //                         <li>
        //                             <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //                 <div>
        //                     <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase text-white">Follow us</h2>
        //                     <ul class="text-gray-400 dark:text-gray-400 font-medium">
        //                         <li class="mb-4">
        //                             <a href="" class="hover:underline ">Github</a>
        //                         </li>
        //                         <li>
        //                             <a href="" class="hover:underline">Discord</a>
        //                         </li>
        //                     </ul>
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </footer>

        <footer class="bg-gray-900 text-white py-10 border-t-2 border-white">
            <div class="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">

                <div>
                    <h2 class="text-xl font-bold">AliexpressProject</h2>
                    <p class="mt-2 text-gray-400">Your go-to destination for quality products at the best prices.</p>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">Home</a></li>
                        <li><a href="#deals" class="text-gray-400 hover:text-white">Shop</a></li>
                        <li><Link to={'/contactus'} class="text-gray-400 hover:text-white">Contact Us</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">Customer Service</h3>
                    <ul class="space-y-2">
                        <li><a href="#" class="text-gray-400 hover:text-white">FAQs</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Shipping & Returns</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Privacy Policy</a></li>
                        <li><a href="#" class="text-gray-400 hover:text-white">Terms & Conditions</a></li>
                    </ul>
                </div>

                <div>
                    <h3 class="text-lg font-semibold mb-3">Subscribe to Our Newsletter</h3>
                    <p class="text-gray-400 mb-3">Get updates on our latest offers and discounts.</p>
                    <form class="flex">
                        <input type="email" placeholder="Enter your email" class="w-full px-3 py-2 text-black rounded-l-md focus:outline-none" />
                        <button class="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">Subscribe</button>
                    </form>
                </div>

            </div>

            <div class="mt-10 border-t border-gray-700 pt-6 text-center">
                <div class="flex justify-center space-x-4 mb-4">
                    <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fab fa-facebook"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fab fa-twitter"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fab fa-instagram"></i></a>
                    <a href="#" class="text-gray-400 hover:text-white text-2xl"><i class="fab fa-linkedin"></i></a>
                </div>
                <p class="text-gray-400">© 2025 AliexpressProject. All rights reserved.</p>
            </div>
        </footer>

    )
}

export default Footer