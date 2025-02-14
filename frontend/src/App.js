import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetails from './pages/ProductDetails';
import { Provider } from 'react-redux'
import { store, persistor } from './redux/store/store';
import { PersistGate } from "redux-persist/integration/react";
import Login from './pages/Login';
import Signup from './pages/Signup';
import { UserProvider } from './context/UserContext';
import Cart from './pages/Cart';
import Search from './pages/Search';
import ContactUs from './pages/ContactUs';
import NewArrivals from './pages/NewArrivals';


function App() {
  return (
    <UserProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <BrowserRouter>
              <Routes>
                <Route index element={<Home />} />
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/new_arrivals" element={<NewArrivals />} />
                <Route path="/products/:category" element={<Products />} />
                <Route path="/search/:searchedName" element={<Search />} />
                <Route path="/details/:Description" element={<ProductDetails />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/contactus" element={<ContactUs />} />
              </Routes>
            </BrowserRouter>
        </PersistGate>
      </Provider>
    </UserProvider>
  );
}

export default App;
