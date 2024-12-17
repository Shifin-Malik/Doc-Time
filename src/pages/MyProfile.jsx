import React, { useState } from "react"
import { assets } from "../assets/assets"
import Navbar from "../components/NavBar"
import Footer from "../components/Footer"
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Saurab Sithkar",
    image: assets.profile_pic,
    email: "sithkar@gmail.com",
    phone: "+91 985642152",
    address: {
      line1: "57th Cross, Mohali",
      line2: "Circle, Church Road ,Punjab",
    },
    gender: "Male",
    dob: "2002-06-25",
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      <Navbar />
      <img className="w-36 rounded" src={userData.image} alt="" />

      {isEdit ? (
        <input
          className="bg-gray-50 dark:bg-gray-800 dark:text-white text-3xl font-medium max-w-60 mt-4"
          type="text"
          value={userData.name}
          onChange={(e) =>
            setUserData((prev) => ({ ...prev, name: e.target.value }))
          }
        />
      ) : (
        <p className="font-medium text-3xl text-neutral-800 mt-4 dark:text-white ">
          {userData.name}
        </p>
      )}

      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div>
        <p className="text-neutral-500 underline mt-3 dark:text-white ">
          Contact Information
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 dark:text-white ">
          <p className="font-medium ">Email Id:</p>
          <p className="text-blue-400">{userData.email}</p>
          <p className="font-medium">Phone:</p>
          {isEdit ? (
            <input
              className="bg-gray-100 max-w-52 dark:bg-gray-800"
              type="text"
              value={userData.phone}
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, phone: e.target.value }))
              }
            />
          ) : (
            <p className="text-blue-400">{userData.phone}</p>
          )}
          <p className="font-medium ">Address:</p>
          {isEdit ? (
            <p>
              <input
                className="bg-gray-50 dark:bg-gray-800"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line1: e.target.value },
                  }))
                }
                value={userData.address.line1}
                type="text"
              />
              <br />
              <input
                className="bg-gray-50 dark:bg-gray-800"
                onChange={(e) =>
                  setUserData((prev) => ({
                    ...prev,
                    address: { ...prev.address, line2: e.target.value },
                  }))
                }
                value={userData.address.line2}
                type="text"
              />
            </p>
          ) : (
            <p className="text-gray-500">
              {userData.address.line1}
              <br />
              {userData.address.line2}
            </p>
          )}
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3 dark:text-white   ">
          BASIC INFORMATION
        </p>
        <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium dark:text-white ">GENDER:</p>
          {isEdit ? (
            <select
              className="max-2-20 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, gender: e.target.value }))
              }
              value={userData.gender}
            >
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          ) : (
            <p className="text-gray-400">{userData.gender}</p>
          )}
          <p className="font-medium dark:text-white ">Birthday:</p>
          {isEdit ? (
            <input
              className="max-2-28 bg-gray-100 dark:bg-gray-800 dark:text-gray-200"
              type="date"
              onChange={(e) =>
                setUserData((prev) => ({ ...prev, dob: e.target.value }))
              }
              value={userData.dob}
            />
          ) : (
            <p className="text-gray-400 ">{userData.dob} </p>
          )}
        </div>
      </div>

      <div className="mt-10">
        {isEdit ? (
          <button
            className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(false)}
          >
            Save Information
          </button>
        ) : (
          <button
            className="border border-primary px-8 py-2 rounded-full  hover:bg-primary hover:text-white transition-all"
            onClick={() => setIsEdit(true)}
          >
            Edit
          </button>
        )}
      </div>

      <Footer />
    </div>
  )
}

export default MyProfile
