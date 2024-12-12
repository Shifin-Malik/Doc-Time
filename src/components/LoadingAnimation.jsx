import React, { useState, useEffect } from "react";
import DocTime3 from "../../public/images/DocTime3.png";
import Doctor from "../../public/Lottie/Doctor.json";
import Lottie from "lottie-react";
import { Link } from "react-router-dom";

function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true);
  const [theme, setTheme] = useState(() => {
          return localStorage.getItem('theme') || 'light';
      });
  

  useEffect(() => {
    // Simulate asynchronous initialization for 3 seconds
    const initializeApp = async () => {
      try {
        // Simulating a delay of 3 seconds
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setIsLoading(false);
      } catch (error) {
        console.error("Initialization failed:", error);
      }
    };

    initializeApp();
  }, []);

  useEffect(() => {
          if (theme === 'dark') {
              document.documentElement.classList.add('dark');
          } else {
              document.documentElement.classList.remove('dark');
          }
  
          localStorage.setItem('theme', theme);
      }, [theme]);

  return (
    <div className="dark:bg-gray-900">
      <div className="flex flex-col items-center justify-center h-screen ">
        {isLoading ? (
          <div className="flex flex-col items-center animate-pulse dark:bg-gray-900">
            {/* Loading animation */}
            <img
              src={DocTime3}
              alt="Loading Icon"
              className="w-80 h-80 object-contain"
            />
            <p className="mt-4 text-gray-500 font-medium">DocTime</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <Lottie className="w-96 h-96" animationData={Doctor} />
            <Link to="/">
              <button className="mt-4 bg-blue-500 text-white font-semibold h-10 w-56 rounded-md border border-blue-700 shadow-md">
                Get Started
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default LoadingAnimation;
