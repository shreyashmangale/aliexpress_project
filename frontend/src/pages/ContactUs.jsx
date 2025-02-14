import React, { useState } from "react";
import { toast, Toaster } from "react-hot-toast";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic here (e.g., send to Firebase, email service, etc.)
        toast.success("Message Sent!");
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: "",
        });
    };

    return (
        <>
            <Navbar />
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="bg-[url('https://img.freepik.com/premium-vector/abstract-3d-background-geometric-sliced-shapes_206725-61.jpg?semt=ais_hybrid')] h-screen flex items-center">

                <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-8">

                    <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center">
                        Contact Us
                    </h2>
                    <p className="text-gray-600 text-center mb-8">
                        Have any questions? We'd love to hear from you.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <input
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Subject"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Your Message"
                                rows="5"
                                required
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            Send Message
                        </button>
                    </form>
                </div>

            </div>

            <Footer />
        </>
    );
};

export default ContactUs;
