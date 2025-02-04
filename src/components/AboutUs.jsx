/* 
second
import React from 'react';

const AboutUs = () => {
    return (
        <div className="container mx-auto p-8 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white shadow-2xl rounded-3xl mt-10 border border-indigo-500">
            <h2 className="text-4xl font-extrabold text-center text-indigo-400 mb-6 animate-pulse">About Writely</h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8 text-center tracking-wide">
                Welcome to <span className="font-bold text-indigo-400">Writely</span>, your futuristic platform for sharing stories, ideas, and experiences. We believe in the power of words to inspire, inform, and connect people across the globe.
            </p>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-indigo-500 transition duration-300">
                    <h3 className="text-2xl font-semibold text-indigo-400 mb-4">🚀 Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                        At Writely, our mission is to create a dynamic community of writers and readers. Whether you're an expert or a newbie, we offer a sleek platform where your voice gets the spotlight it deserves.
                    </p>
                </div>

                <div className="p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-indigo-500 transition duration-300">
                    <h3 className="text-2xl font-semibold text-indigo-400 mb-4">💡 What We Offer</h3>
                    <ul className="list-disc list-inside text-gray-300 leading-relaxed space-y-2">
                        <li>Easy-to-use tools for creating and publishing blogs.</li>
                        <li>A supportive community for sharing and discussing ideas.</li>
                        <li>Opportunities to connect with like-minded individuals.</li>
                        <li>Customizable features to make your content stand out.</li>
                    </ul>
                </div>
            </div>

            <div className="mt-10 p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-indigo-500 transition duration-300">
                <h3 className="text-2xl font-semibold text-indigo-400 mb-4">📬 Contact Us</h3>
                <p className="text-gray-300 mb-3">We'd love to hear from you! Connect with us through:</p>
                <div className="space-y-2">
                    <p className="flex items-center"><span className="text-indigo-400 mr-2">📧</span> <strong>Email:</strong> admin@writely.com</p>
                    <p className="flex items-center"><span className="text-indigo-400 mr-2">📞</span> <strong>Phone:</strong> (123) 456-7890</p>
                    <p className="flex items-center"><span className="text-indigo-400 mr-2">🏠</span> <strong>Address:</strong> Salem,TamilNadu,India</p>
                </div>
            </div>

            <div className="text-center mt-8">
                <p className="italic text-indigo-400 text-xl animate-bounce">"Your Stories, Writely Told."</p>
            </div>
        </div>
    );
};

export default AboutUs; */



  export default function AboutUs() {
    return (
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">About Us</h2>
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <p className="mb-6 text-gray-700 leading-relaxed">
            Welcome to TechBlog, a platform for sharing ideas and stories about technology, lifestyle, and food. Our
            mission is to provide a space where tech enthusiasts can express themselves and readers can discover new
            perspectives on the digital world.
          </p>
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Contact Details</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                ></path>
              </svg>
              Email: contact@techblog.com
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                ></path>
              </svg>
              Phone: (123) 456-7890
            </li>
            <li className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-blue-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                ></path>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                ></path>
              </svg>
              Address: 123 Tech Street, Silicon Valley, CA 94000
            </li>
          </ul>
        </div>
      </div>
    )
  }
  
  
  
  