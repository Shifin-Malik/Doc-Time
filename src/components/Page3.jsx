import React from "react";
import Lottie from "lottie-react";
import DoctorAnimation from "../../public/Lottie/Doctor.json";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Page3() {
  return (
    <section className="flex flex-col justify-center items-center h-screen px-4 sm:px-8">
      {/* Lottie Animation */}
      <Lottie className="w-96 h-96" animationData={DoctorAnimation} />

      {/* Title */}
      <Typography
        className="mt-2 text-center text-gray-700 dark:text-gray-300"
        variant="h3"
      >
        <span className="text-primary">Discover</span> Experienced Doctors
      </Typography>

      {/* Descriptive Text */}
      <Typography
        className="mt-4 text-center text-gray-700 dark:text-gray-300"
        variant="h5"
      >
        Find top-rated doctors to address your health needs quickly and efficiently.
      </Typography>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full px-8 mt-8">
        {/* Back Button */}
        <Link to="/Page2">
          <Button
            id="back-button"
            aria-label="Navigate to the previous page"
            className="bg-primary text-white font-bold h-16 w-16 rounded-full border border-primary shadow-md flex items-center justify-center"
          >
            <FaArrowLeft className="text-xl" />
          </Button>
        </Link>

        {/* Next Button */}
        <Link to="/">
          <Button
            id="next-button"
            aria-label="Navigate to the home page"
            className="bg-primary text-white font-bold h-16 w-16 rounded-full border border-primary shadow-md flex items-center justify-center"
          >
            <FaArrowRight className="text-xl" />
          </Button>
        </Link>
      </div>
    </section>
  );
}

export default Page3;
