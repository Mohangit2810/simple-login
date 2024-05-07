/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";
import { googleLogout } from "@react-oauth/google";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home({ user }) {
  const navigate = useNavigate();
  const [profile, setProfile] = useState([]);

  const notify = () => toast("Please Login !");

  function handleProfile(newProfile) {
    setProfile(newProfile);
  }

  useEffect(() => {
    if (profile.length === 0) {
      notify();
    }
  }, [profile]);

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          handleProfile(res.data);
          console.log(res.data);
        })
        .catch((err) => console.log(err));
    }
  }, [user]);

  function logout() {
    googleLogout();
    navigate("/");
  }
  if (profile.length === 0) {
    return (
      <>
        <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
          <div
            className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
            style={{
              backgroundImage: `url("https://i.ibb.co/FWggPq1/banner.png")`,
            }}
          ></div>
          <div className="my-16 mx-16 flex flex-col items-center">
            <h4 className="text-bluePrimary text-xl font-bold">
              Oops! Looks like you have not Logged In ! Click below to log in
            </h4>
          </div>
          <button
            onClick={() => logout()}
            type="button"
            className="focus:outline-none text-white bg-redPrimary hover:bg-redDark focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-redPrimary dark:focus:ring-red-900"
          >
            Go to Login Page
          </button>
        </div>
        <ToastContainer position="top-right" />
      </>
    );
  }
  return (
    <div>
      <div className="dark:!bg-navy-800 shadow-shadow-500 shadow-3xl rounded-primary relative mx-auto flex h-full w-full max-w-[550px] flex-col items-center bg-white bg-cover bg-clip-border p-[16px] dark:text-white dark:shadow-none">
        <div
          className="relative mt-1 flex h-32 w-full justify-center rounded-xl bg-cover"
          style={{
            backgroundImage: `url("https://i.ibb.co/FWggPq1/banner.png")`,
          }}
        >
          <div className="absolute -bottom-12 flex h-[88px] w-[88px] items-center justify-center rounded-full border-[4px] border-white bg-pink-400">
            <img
              className="h-full w-full rounded-full"
              src={profile.picture}
              alt="user profile"
            />
          </div>
        </div>
        <div className="mt-16 flex flex-col items-center">
          <h4 className="text-bluePrimary text-xl font-bold">{profile.name}</h4>
          <p className="text-lightSecondary text-base font-normal">
            {profile.email}
          </p>
        </div>
        <button
          onClick={() => logout()}
          type="button"
          className="mt-8 focus:outline-none text-white bg-redPrimary hover:bg-redDark focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-redPrimary dark:focus:ring-red-900"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Home;
