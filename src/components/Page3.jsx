import React from "react";
import Lottie from "lottie-react";
import Doctor from "../../public/Lottie/Doctor.json";
import { Link } from "react-router-dom"; // Ensure this import is present

function Page3() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Lottie className="w-96 h-96" animationData={Doctor} />
      <Link to="/">
        <button
          className="mt-4 bg-blue-500 text-white font-semibold h-10 w-56 rounded-md border border-blue-700 shadow-md"
        >
          Go to Page 3
        </button>
      </Link>
    </div>
  );
}

export default Page3;


