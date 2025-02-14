import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import Sidebar from '../components/Sidebar';
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/features/productSlice';
import { auth, db } from '../firebase/firebase';
import { collection, doc, getDocs, query, setDoc, updateDoc, where } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import toast, { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';

const Products = () => {
  const navigate = useNavigate();

  const { category } = useParams();

  const [fetchedData, setFetchedData] = useState(null);

  const dispatch = useDispatch();


  // Function to return category-specific image
  const getCategoryImage = (category) => {
    switch (category) {
      case "menswear":
        return "https://i.pinimg.com/736x/9c/74/7e/9c747e2db7f8be2a4fa78949a62e5922.jpg";
      case "womenswear":
        return "https://zola.in/cdn/shop/articles/wear_banner.jpg?v=1686815762";
      case "kidswear":
        return "https://cdn.citymapia.com/lq-apparels/5476/businessbanner.jpg?width=1260&v=20200403060053);";
      case "malefootwear":
        return "https://www.fashionmate.in/wp-content/uploads/2020/02/latest-mens-footwear.png";
      case "femalefootwear":
        return "https://www.tresmode.com/cdn/shop/articles/different-types-of-black-heel-sandals-every-woman-needs-tresmode_6501bde7-4b2c-426f-9b4d-731d76cf283e.jpg?v=1721970641";
      case "kidsfootwear":
        return "https://onyc.in/cdn/shop/files/ONYC_Banner_24.png?v=1721982071&width=1920";
      case "books":
        return "https://i0.wp.com/prowrestlingjournal.com/wp-content/uploads/2020/06/best-books-2017-header.jpg?fit=1600%2C530&ssl=1";
      case "watches":
        return "https://t3.ftcdn.net/jpg/09/12/38/32/360_F_912383253_gHM14H2BOOIn5WA4AI5LJClGVzCZZBTT.jpg";
      case "mobiles":
        return "https://img.pikbest.com/origin/06/63/98/19qpIkbEsTkzP.jpg!w700wp";
      case "laptops":
        return "https://i.pinimg.com/736x/ef/80/83/ef8083bfe79088dc00bd8eca9c821cd5.jpg";
      default:
        return "https://t4.ftcdn.net/jpg/03/06/69/49/360_F_306694930_S3Z8H9Qk1MN79ZUe7bEWqTFuonRZdemw.jpg";
    }
  };



  //Fetching data from mongodb backend
  async function getProducts() {
    try {
      const response = await axios.get(`https://aliexpress-project-backend.onrender.com/products/${category}`);
      const items = await response;
    //console.log(items.data.slice(0, 24));

      setFetchedData(items.data.slice(0, 24));
      // console.log(response.data.data);

      dispatch(setProducts(response.data.slice(0, 100)));

      // Optionally clear form fields after submission

    } catch (error) {
      //console.log("error");
    }
  }
  useEffect(() => {
    getProducts();
  }, [])

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


  // //Add to cart function
  // const addToCart = async (item) => {
      // if (user) {
      //     const userId = user.uid;

      //     try {
      //         const cartItemRef = doc(collection(db, "users", userId, "cartItems"));
      //         await setDoc(cartItemRef, {
      //             ...item, // Store the item details in Firestore
      //         });
      //       //console.log("Added to cart")
      //         toast.success("Added to Cart");
      //     } catch (error) {
      //       //console.error("Error adding to Cart: ", error);
      //         toast.error("Error adding to Cart");
      //     }
      // } else {
      //     navigate('/login');
      // }
  // };

  // Function to Add or Update Cart Item
  const addToCart = async (item) => {
    if (user) {
      const userId = user.uid;
      console.log(item)
      try {
          // Reference to the cartItems collection for the specific user
          const cartRef = collection(db, "users", userId, "cartItems");
        //console.log(cartRef)
          // Check if the item already exists in the user's cart
          const q = query(cartRef, where("_id", "==", item._id));
          const querySnapshot = await getDocs(q);
  
          if (!querySnapshot.empty) {
              // Item already in cart, update quantity
              const cartItem = querySnapshot.docs[0]; // Get the existing item
              const currentQuantity = cartItem.data().quantity;
  
              // Update document with incremented quantity
              const cartItemRef = doc(db, "users", userId, "cartItems", cartItem.id);
              await updateDoc(cartItemRef, {
                  quantity: currentQuantity + 1
              });
  
              toast.success("Quantity Updated in Cart");
          } else {
              // Item not in cart, add as a new entry with quantity 1
              const cartItemRef = doc(collection(db, "users", userId, "cartItems"));
              await setDoc(cartItemRef, {
                  ...item,
                  quantity: 1 // Set initial quantity to 1
              });
  
              toast.success("Added to Cart");
          }
      } catch (error) {
          console.error("Error adding/updating Cart: ", error);
          toast.error("Error adding to Cart");
      }
  } else {
      navigate('/login');
  }
  
  };


  return (
    <div>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
      <Navbar />
      <div className='flex mb-12'>


        <Sidebar />

        <div class="md:ml-56">

          <div className='w-full h-[300px] mb-4'>
            <img className='w-full h-full object-fill rounded-xl' src={`${getCategoryImage(category)}`} alt="banner-img" />
          </div>


          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {
              fetchedData ? fetchedData.map(item => {
                return (
                  <div className='font-inter p-2 shadow-lg rounded-lg flex flex-col justify-evenly w-[90%] mx-auto h-full'>
                    <img class="max-w-[90%] mx-auto h-[200px] rounded-lg" src={item.Image} alt="product_image" />
                    <div className='px-4 mt-2'>
                      <Link to={`/details/${item.Description.replace(/\//g, "----")}`}>
                        <h1 className='font-semibold lg:text-regular md:text-md'>{item.Description.slice(0, 50) + "..."}</h1>
                      </Link>
                      <h4 className='text-gray-400 text-sm'>{item.Brand ? item.Brand.slice(0, 50) : ""}</h4>
                      <div className='flex justify-between items-center my-2'>
                        <p className='font-bold text-gray-600'>{item.Price}</p>
                        <button className='px-3 py-1 border-2 border-blue-700 hover:border-white hover:bg-blue-400 transition duration-200 rounded-xl ' onClick={() => addToCart(item)}><FontAwesomeIcon icon={faCartShopping} /> </button>
                      </div>
                    </div>
                  </div>
                )
              }) :
                <div className='flex items-center justify-center'>
                  <h1>Loading data</h1>
                </div>
            }

          </div>

        </div>
      </div>

      <Footer />
    </div>
  )
}

export default Products