import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import axios from "axios";
import { auth } from "../firebase/firebase";
import { onAuthStateChanged } from "firebase/auth";


const VisitedProducts = () => {

  const [user, setUser] = useState(null);
  //console.log(user)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
      } else {
        // No user is logged in
        setUser(null);
      }
    });

    return () => unsubscribe(); // Clean up when the component is unmounted
  }, []);


  const [visitedProducts, setVisitedProducts] = useState([]);

  useEffect(() => {
    const getVisitedProducts = async () => {
      try {
        const response = await axios.get(`https://aliexpress-project-backend.onrender.com/visitedproducts/${user.uid}`);
        const items = await response;
      //console.log(response.data);

        setVisitedProducts(items.data);
        // console.log(response.data.data);

        // Optionally clear form fields after submission

      } catch (error) {
        //console.log("error");
      }
    };

    getVisitedProducts();
  }, [user])

  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 5;

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % visitedProducts.length);
  };

  return (
    <div className="w-full mx-auto md:px-12 py-8 md:my-16 bg-purple-400 min-h-[200px]">
      <h2 className='font-merriweather md:text-2xl text-sm font-bold mb-8 mx-8 text-start'>Products You Proviously Visited !!!</h2>
      <div className="overflow-hidden">
        <motion.div
          className="flex gap-4"
          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          transition={{ type: "tween", duration: 0.5, ease: "easeIn" }}
        >
          {
            visitedProducts.length ? visitedProducts.slice(startIndex, startIndex + cardsPerPage).map((item) => {
              return (

                <div className='font-inter p-2 bg-white border shadow-lg rounded-lg flex flex-col justify-evenly w-full max-w-[280px] h-[240px] md:mx-4 transition duration-500'>
                  <img class="max-w-full mx-auto h-[150px] rounded-lg" src={item.product.Image} alt="product_image" />
                  <div className='px-4 mt-2'>
                    <Link to={`/details/${item.product.Description.replace('/\//g', "----")}`}>
                      <h1 className='font-semibold lg:text-xs md:text-sm'>{item.product.Description.slice(0, 50) + "..."}</h1>
                    </Link>
                    {/* <h4 className='text-gray-400 text-sm'>{item.product.Brand.slice(0, 50)}</h4> */}
                    <div className='flex justify-between items-center my-2'>
                      <p className='font-bold text-gray-600'>{item.product.Price}</p>
                      {/* <button className='px-3 py-1 border-2 border-blue-700 hover:border-white hover:bg-blue-400 transition duration-200 rounded-xl ' onClick={() => addToCart(item)}><FontAwesomeIcon icon={faCartShopping} /> </button> */}
                    </div>
                  </div>
                </div>
              )
            }) :
              <div className="px-8">
                <h1>No Items</h1>
              </div>
          }
        </motion.div>
      </div>
      <div className="flex justify-end mt-4">
        <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded-lg">
          Next
        </button>
      </div>
    </div>
  );
};

export default VisitedProducts;