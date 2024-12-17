import React, { useContext } from "react"
import { AppContext } from "../context/AppContext"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
const MyAppointments = () => {
  const { doctors } = useContext(AppContext)

  return (
    <div>
      <Navbar />
      <p className="pb-3 mt-12 font-medium text-zinc-700 border-b dark:text-white">
        My Appointments
      </p>
      <div>
        {doctors.slice(0, 3).map((item, index) => (
          <div
            className="grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b"
            key={index}
          >
            <div>
              <img className="w-32 bg-indigo-50" src={item.image} alt="" />
            </div>
            <div className="flex-1 text-sm text-zinc-600">
              <p className="text-neutral-800 font-semibold dark:text-white">
                {item.name}{" "}
              </p>
              <p className="dark:text-white">{item.speciality} </p>
              <p className="text-zinc-700 font-medium mt-1 dark:text-white">
                Address:{" "}
              </p>
              <p className="text-xs dark:text-white">{item.address.line1} </p>
              <p className="text-xs dark:text-white">{item.address.line2} </p>
              <p className="text-xs mt-1 dark:text-white">
                <span className="text-sm text-neutral-700 font-medium">
                  Date & Time :{" "}
                </span>{" "}
                25 July 2024 | 8:30 PM{" "}
              </p>
            </div>
            <div></div>
            <div className="flex flex-col gap-2 justify-end">
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-primary hover:text-white dark:hover:text-white dark:text-gray-400 transition-all duration-300">
                Pay Online
              </button>
              <button className="text-sm text-stone-500 text-center sm:min-w-48 py-2 border hover:bg-red-600 hover:text-white dark:hover:text-white dark:text-gray-400 transition-all duration-300">
                Cancel Appointment
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default MyAppointments
