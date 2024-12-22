import React, { useState, useEffect } from "react";
import DocTime3 from "../../public/images/DocTime3.png";
import Page1 from "./Page1";


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
    <div className="dark:bg-gray-900 h-screen flex  items-center justify-center">
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
       <Page1 />
      )}
    </div>
  );
}

export default LoadingAnimation;
