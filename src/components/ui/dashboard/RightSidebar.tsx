import React, { useState, useEffect } from "react";
import Image from "next/image"; // Assuming you're using Next.js's Image component
import '@fortawesome/fontawesome-free/css/all.min.css';


const RightSidebar = ({ user }: { user: { username: string; lastName: string; email: string } }) => {
  const images = [
    "/icons/images2.png", 
    "/icons/loan.jpg", 
    "/icons/others_.jpg"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <aside className="right-sidebar fixed top-0 right-0 bg-gray-200 z-50 w-64 p-4">
      <section className="flex flex-col pb-8 items-center">
        <div className="profile-img bg-blue-500 text-white rounded-full h-20 w-20 flex items-center justify-center text-4xl font-bold">
          {user.username[0].toUpperCase()}
        </div>
        <div className="profile-details text-center mt-4">
          <h1 className="text-lg font-semibold">
            {user.username} {user.lastName}
          </h1>
          <p className="text-gray-600 flex items-center justify-center gap-2">
            <i className="fas fa-globe"></i> united states
          </p>
        </div>
      </section>


      {/* Image container with transition effects */}
      <div className="image-container mt-6 relative overflow-hidden w-full h-72">
        {/* First image */}
        <div
          className="image-slider absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentImageIndex === 0 ? 1 : 0 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[0]}
              alt="Start Transacting Today"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 text-white rounded-lg">
              <h2 className="text-xl font-semibold">Start Transacting Today</h2>
              <p className="text-sm">Standard Chartered Bank USA Address</p>
            </div>
          </div>
        </div>

        {/* Second image */}
        <div
          className="image-slider absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentImageIndex === 1 ? 1 : 0 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[1]}
              alt="Need a Loan"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 text-white rounded-lg">
              <h2 className="text-xl font-semibold">Need a Loan?</h2>
              <button className="mt-auto bg-blue-500 text-white px-4 py-2 rounded">Click Here to Get Started</button>
            </div>
          </div>
        </div>

        {/* Third image */}
        <div
          className="image-slider absolute inset-0 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: currentImageIndex === 2 ? 1 : 0 }}
        >
          <div className="relative w-full h-full">
            <Image
              src={images[2]}
              alt="Real Estate Housing"
              width={400}
              height={300}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-between p-4 text-white rounded-lg">
              <h2 className="text-xl font-semibold">Real Estate Housing</h2>
              <a href="#" className="mt-auto text-blue-400">Explore</a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
