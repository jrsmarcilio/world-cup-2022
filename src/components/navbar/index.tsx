import React from "react";

const Navbar: React.FC = () => {
  const imgUrl = "../../../public/rep_logo2.png";

  return (
    <div className="navbar">
      <span>
        <img src={imgUrl} alt="" id="hero-img" width={95} />
      </span>
      <span className="font-black text-white uppercase text-[20px] ">
        Bolão da republica
      </span>
      <div className="w-10 flex justify-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#fff"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
};

export default Navbar;
