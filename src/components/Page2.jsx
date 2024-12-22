import React from "react";
import Lottie from "lottie-react";
import DoctorAnimation3 from "../../public/Lottie/Doctor3.json";
import { Link } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Page2() {
  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 sm:px-8">
      {/* Lottie Animation */}
      <Lottie className="w-96 h-96" animationData={DoctorAnimation3} />

      {/* Title */}
      <Typography
        className="mt-2 text-center text-gray-700 dark:text-gray-300"
        variant="h3"
      >
        Effortless <span className="text-primary">Appointment</span> Booking
      </Typography>

      {/* Descriptive Text */}
      <Typography
        className="mt-4 text-center text-gray-700 dark:text-gray-300"
        variant="h5"
      >
        Streamline your scheduling process and never miss an appointment again!
      </Typography>

      {/* Navigation Buttons */}
      <div className="flex justify-between w-full px-8 mt-8">
        {/* Back Button */}
        <Link to="/Doc-Time/">
          <Button
            id="back-button"
            aria-label="Go Back"
            className="bg-primary text-white font-bold h-16 w-16 rounded-full border border-primary shadow-md flex items-center justify-center"
          >
            <FaArrowLeft className="text-xl" />
          </Button>
        </Link>

        {/* Next Button */}
        <Link to="/Page3">
          <Button
            id="next-button"
            aria-label="Go Next"
            className="bg-primary text-white font-bold h-16 w-16 rounded-full border border-primary shadow-md flex items-center justify-center"
          >
            <FaArrowRight className="text-xl" />
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default Page2;



