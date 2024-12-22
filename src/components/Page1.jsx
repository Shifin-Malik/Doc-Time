import React from "react";
import Lottie from "lottie-react";
import Doctor from "../../public/Lottie/Doctor.json";
import Doctor2 from "../../public/Lottie/Doctor2.json";
import Doctor3 from "../../public/Lottie/Doctor3.json";
import { Button, Typography, IconButton } from "@material-tailwind/react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

function Page1() {
  const [active, setActive] = React.useState(1);

  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: active === index ? "blue" : "gray",
    onClick: () => setActive(index),
  });

  const next = () => {
    if (active < 3) setActive(active + 1);
  };

  const prev = () => {
    if (active > 1) setActive(active - 1);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Conditional Rendering */}
      {active === 1 && (
        <>
          <Lottie
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
            animationData={Doctor}
          />
          <Typography
            className="mt-0 text-center text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl"
            variant="h2"
          >
            <span className="text-primary">Learn About</span> Your Doctors
          </Typography>
          <Typography
            className="mt-0 text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg"
            variant="h5"
          >
            Your trusted platform for booking appointments, consulting doctors,
            and managing health.
          </Typography>
        </>
      )}

      {active === 2 && (
        <>
          <Lottie
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
            animationData={Doctor2}
          />
          <Typography
            className="mt-0 text-center text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl"
            variant="h3"
          >
            <span className="text-primary">Discover</span> Experienced Doctors
          </Typography>
          <Typography
            className="mt-0 text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg"
            variant="h5"
          >
            Find top-rated doctors to address your health needs quickly and
            efficiently.
          </Typography>
        </>
      )}

      {active === 3 && (
        <>
          <Lottie
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg"
            animationData={Doctor3}
          />
          <Typography
            className="mt-0 text-center text-gray-700 dark:text-gray-300 text-base sm:text-lg lg:text-xl"
            variant="h3"
          >
            <span className="text-primary">Stay Healthy</span> with Expert Care
          </Typography>
          <Typography
            className="mt-0 text-center text-gray-700 dark:text-gray-300 text-sm sm:text-base lg:text-lg"
            variant="h5"
          >
            Comprehensive healthcare solutions tailored to your needs.
          </Typography>
        </>
      )}

      {/* Navigation Buttons */}
      <div className="flex justify-center w-full max-w-lg px-4 mt-8">
  <Button
    variant="text"
    className="flex items-center gap-2 min-w-[100px]" // Added min-width to prevent shrinking
    onClick={prev}
    disabled={active === 1}
  >
    <FaArrowLeft strokeWidth={2} className="h-4 w-4" />
    Prev
  </Button>

  <div className="flex items-center gap-2">
    <IconButton {...getItemProps(1)}>1</IconButton>
    <IconButton {...getItemProps(2)}>2</IconButton>
    <IconButton {...getItemProps(3)}>3</IconButton>
  </div>

  {active === 3 ? (
    <Link to="/">
      <Button variant="text" className="flex items-center gap-2 min-w-[100px]"> {/* Added min-width here as well */}
        Finish
        <FaArrowRight strokeWidth={2} className="h-4 w-4" />
      </Button>
    </Link>
  ) : (
    <Button
      variant="text"
      className="flex items-center gap-2 min-w-[100px]" // Added min-width here too
      onClick={next}
    >
      Next
      <FaArrowRight strokeWidth={2} className="h-4 w-4" />
    </Button>
  )}
</div>

    </div>
  );
}

export default Page1;
