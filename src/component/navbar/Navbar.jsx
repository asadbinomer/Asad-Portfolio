import React from 'react';
import Smiley from '../../assets/Smiley.svg';
import { NavLink } from 'react-router-dom';
import '../../App.css';

function Navbar() {
  return (
    <>
      <div className="sticky top-0 z-[50] bg-[#121314] w-[100%] px-[180px] py-[32px] flex items-center justify-between bg-opacity-[.97] max-[450px]:px-[15px] max-[450px]:py-[20px] max-[640px]:px-[50px] max-[640px]:py-[20px] max-[768px]:px-[100px] max-[768px]:py-[20px]">
        <div className="flex items-center gap-[12px] max-[450px]:gap-[5px] max-[640px]:gap-[5px]">
          <img src={Smiley} alt="Logo" />
          <h4 className="text-[22px] font-semibold text-[#fff] max-[450px]:text-[16px]">Asadullah</h4>
        </div>
        <div className="flex items-center gap-[32px]">
          <div className="flex items-center gap-[32px] max-[450px]:hidden max-[640px]:hidden max-[768px]:hidden">
            <NavLink to="/" className={({ isActive }) => `text-[18px] font-medium ${ isActive ? 'text-[#fff] font-bold' : 'text-[#7B848B]'}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `text-[18px] font-medium ${ isActive ? 'text-[#fff] font-bold' : 'text-[#7B848B]'}`}>
              About
            </NavLink>
            <NavLink to="/work" className={({ isActive }) => `text-[18px] font-medium ${ isActive ? 'text-[#fff] font-bold' : 'text-[#7B848B]'}`}
            >
              Work
            </NavLink>
            <NavLink 
              to="/service"
              className={({ isActive }) =>
                `text-[18px] font-medium ${
                  isActive ? 'text-[#fff] font-bold' : 'text-[#7B848B]'
                }`
              }
            >
              Service
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `text-[18px] font-medium ${
                  isActive ? 'text-[#fff] font-bold' : 'text-[#7B848B]'
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[18px] font-medium ${
                  isActive ? 'text-[#fff] font-bold' : 'text-[#7B848B]'
                }`
              }
            >
              Contact
            </NavLink>
          </div>
          <div className="px-[20px] py-[12px] text-[18px] font-medium text-[#fff] border1 rounded-[8px] bg1 cursor-pointer max-[450px]:px-[8px] max-[450px]:py-[10px] max-[450px]:text-[15px]">
            howard@gmail.com
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
