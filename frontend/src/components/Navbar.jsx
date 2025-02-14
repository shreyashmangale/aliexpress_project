import { useContext, useEffect, useState } from "react";
import { Menu, Search } from "lucide-react";
import { UserContext } from "../context/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();

    const [searchOpen, setSearchOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const [searchedName, setSeachedName] = useState('');

    const userData = useContext(UserContext);

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

    async function handleLogout() {
        try {
            await signOut(auth);
            //console.log('User logged out');
        } catch (error) {
            //console.error('Error logging out:', error.message);
        }
    }

    const handleSearch = () => {
        if (searchedName.length) {
            navigate(`/search/${searchedName}`);
        }
    }
    const handleSearchInMobile = () => {
        if (searchedName.length) {
            navigate(`/search/${searchedName}`);
        } else {
            setSearchOpen(!true);
        }
    }

    return (
        <>
            <nav className=" text-black px-4 py-3 flex items-center gap-4 justify-between relative border-b-2">
                {/* Left: Logo */}
                <div className="text-xl font-bold">
                    <Link to={'/'}>
                        <h1>AliExpress</h1>
                    </Link>
                </div>

                {/* Middle: Search Bar */}
                <div className="flex items-center w-full md:w-1/3 relative">
                    {/* Search Bar - always visible on desktop */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`${searchOpen ? "w-[80%]" : "w-[70px]"
                            } transition-all duration-300 md:px-4 px-2 md:py-2 rounded-full text-black bg-white md:w-full md:block absolute md:relative border border-gray-700`}
                        onChange={(e) => setSeachedName(e.target.value)}
                    />

                    {/* Mobile Search Icon */}
                    <button
                        onClick={handleSearchInMobile}
                        className="md:hidden p-2 bg-gray-700 rounded-full ml-auto"
                    >
                        <Search style={{ color: "white" }} size={15} />
                    </button>
                    <button
                        onClick={handleSearch}
                        className="hidden md:block p-2 bg-gray-700 rounded-full ml-auto"
                    >
                        <Search style={{ color: "white" }} size={15} />
                    </button>
                </div>

                <div className="flex sm:gap-2 gap-1">
                    <div className="sm:p-2 p-1 cursor-pointer border-2 rounded-lg"><FontAwesomeIcon icon={faCartShopping} size="sm" onClick={() => navigate('/cart')} /></div>

                    {/* Right: Auth Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Desktop Auth Buttons */}
                        {user ? (
                            <div className="hidden md:flex gap-2">
                                <div className="px-2 py-1 bg-gray-200 rounded-lg text-black">{user.email}</div>
                                <button className="p-1 bg-blue-600 rounded-lg" onClick={handleLogout}>Logout</button>
                            </div>
                        ) : (
                            <div className="flex gap-2">
                                <button className="hidden md:inline px-4 py-2 bg-blue-600 rounded-md" onClick={() => navigate('/login')}>
                                    Login
                                </button>
                                <button className="hidden md:inline px-4 py-2 bg-blue-600 rounded-md" onClick={() => navigate('/signup')}>
                                    SignUp
                                </button>
                            </div>
                        )}

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 bg-gray-700 rounded-full"
                        >
                            <Menu style={{ color: "white" }} size={15} />
                        </button>

                        {/* Mobile Menu Dropdown */}
                        {menuOpen && (
                            <div className="absolute top-12 right-4 bg-gray-800 text-white p-4 rounded-md shadow-md w-48 z-10">
                                {user ? (
                                    <div className="flex flex-col gap-2">
                                        <div className="px-2 py-1 bg-gray-200 rounded-lg text-black">{user.email}</div>
                                        <button className="p-1 bg-blue-600 rounded-lg" onClick={handleLogout}>Logout</button>
                                    </div>
                                ) : (
                                    <div className="flex flex-col gap-2">
                                        <button className="block w-full px-4 py-2 bg-blue-600 rounded-md" onClick={() => navigate('/login')}>
                                            Login
                                        </button>
                                        <button className="block w-full px-4 py-2 bg-blue-600 rounded-md" onClick={() => navigate('/signup')}>
                                            SignUp
                                        </button>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </nav>

        </>
    );
};

export default Navbar;
