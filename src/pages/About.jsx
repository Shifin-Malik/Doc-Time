import React from "react"
import { assets } from "../assets/assets"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
const About = () => {
  return (
    <div>
      <Navbar />
      <div className="text-center text-2xl pt-10 text-gray-500 dark:text-gray-200">
        <p>
          ABOUT{" "}
          <span className="text-gray-700 dark:text-gray-600 font-medium">
            US
          </span>
        </p>
      </div>

      <div className="my-10 flex flex-col md:flex-row gap-12">
        <img
          className="w-full md:max-w-[360px]"
          src={assets.about_image}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600 dark:text-gray-400">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolores
            culpa, repellat debitis cum minus neque animi excepturi voluptatum
            amet laborum?
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
            inventore sequi ipsa repellendus accusantium, exercitationem dolore
            nemo quas, laboriosam illo qui. Qui provident fugit porro.
          </p>
          <b className="text-gray-800 dark:text-white ">Our Vision</b>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Dignissimos, molestias! Explicabo, ipsam rem. Aperiam molestias
            numquam voluptas magni aspernatur itaque fugit nisi ad ipsum
            veritatis.
          </p>
        </div>
      </div>

      <div className="text-xl my-4">
        <p className="dark:text-white">
          WHY{" "}
          <span className="text-gray-700 dark:text-gray-500 font-semibold">
            CHOOSE US
          </span>{" "}
        </p>
      </div>

      <div className="flex flex-col md:flex-row mb-20">
        <div className="group border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="dark:text-gray-500 dark:group-hover:text-white">
            Efficiency:
          </b>
          <p>
            Streamlined appointment scheduling that fits into your busy
            lifestyle.
          </p>
        </div>

        <div className="group border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="dark:text-gray-500 dark:group-hover:text-white">
            Convenience:
          </b>
          <p>
            Access to a network of trusted healthcare professionals in your
            area.
          </p>
        </div>

        <div className="group border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
          <b className="dark:text-gray-500 dark:group-hover:text-white">
            Personalization:
          </b>
          <p>
            Tailored recommendations and reminders to help you stay on top of
            your health.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
