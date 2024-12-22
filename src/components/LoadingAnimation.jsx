import React, { useState, useEffect } from "react";
import DocTime3 from "../../public/images/DocTime3.png";
import Lottie from "lottie-react";
import Doctor2 from "../../public/Lottie/Doctor2.json";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    const initializeApp = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setIsLoading(false);
    };
    initializeApp();
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="dark:bg-gray-900 h-screen flex flex-col items-center justify-center">
      {isLoading ? (
        <div
          id="loading-icon"
          className="flex flex-col items-center animate-pulse dark:bg-gray-900"
        >
          <img
            src={DocTime3}
            alt="Loading Icon"
            className="w-80 h-80 object-contain"
          />
          <p className="mt-4 text-gray-500 font-medium">DocTime</p>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center">
          {/* Lottie Animation */}
          <Lottie className="w-96 h-96" animationData={Doctor2} />
          <Typography
            className="mt-2 text-center text-primary dark:text-gray-300"
            variant="h3"
          >
           <span className="text-gray-600">Learn About</span> Your Doctors
          </Typography>
          {/* Descriptive Text */}
          <Typography
            className="mt-4 text-center text-gray-700 dark:text-gray-300"
            variant="h5"
          >
            "Your trusted platform for booking appointments, consulting doctors,
            and managing health."
          </Typography>

          {/* Navigation Buttons */}
          <div className="flex justify-between w-full px-8 mt-8">
            {/* Back Button */}
           
              <Button
                id="back-button"
                className="bg-white text-black font-bold h-16 w-16 rounded-full border border-black shadow-md flex items-center justify-center"
              >
                <FaArrowLeft className="text-xl" />
              </Button>
          

            {/* Next Button */}
            <Link to="/Page2">
              <Button
                id="next-button"
                className="bg-primary text-white font-bold h-16 w-16 rounded-full border border-primary shadow-md flex items-center justify-center"
              >
                <FaArrowRight className="text-xl" />
              </Button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default LoadingAnimation;
