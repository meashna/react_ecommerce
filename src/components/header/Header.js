import React, { useState } from 'react'
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import {logo} from "../../assets/index"
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';


const Header = () => {
    const [showAll,setShowAll]=useState(false);
    const products=useSelector((state)=>state.amazon.products);
 
   
  return (
    <div className='sticky top-0 z-50 w-full'>
      <div className="flex items-center w-full gap-4 px-4 py-3 text-white bg-amazon_blue">
        {/* ============ Image Start here ================ */}
        <Link to="/">
        <div className="headerHover">
          <img className="w-24 mt-2" src={logo} alt="logo" />
        </div>
        </Link>
        
        {/* ============ Image End here ================== */}
        {/* ============ Deliver Start here ============== */}
       
        {/* ============ Deliver End here ================ */}
        {/* ============ Search Start here =============== */}
        <div className="relative flex-grow hidden h-10 rounded-md lgl:flex">
          <span
            onClick={() => setShowAll(!showAll)}
            className="flex items-center justify-center h-full text-sm duration-300 bg-gray-200 border-2 cursor-pointer w-14 hover:bg-gray-300 text-amazon_blue font-titleFont rounded-tl-md rounded-bl-md"
          >
            All <span></span>
            <ArrowDropDownOutlinedIcon />
          </span>
          {showAll && (
            <div>
              <ul className="absolute w-56 h-80 top-10 left-0 overflow-y-scroll overflow-x-hidden bg-white border-[1px] border-amazon_blue text-black p-2 flex flex-col gap-1 z-50">
                {allItems.map((item) => (
                  <li
                    className="text-sm tracking-wide font-titleFont border-b-[1px] border-b-transparent hover:border-b-amazon_blue cursor-pointer duration-200"
                    key={item._id}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
          )}
          <input
            className="flex-grow  w-40 h-full px-2 text-base border-none outline-none text-amazon_blue"
            type="text"
          />
          <span className="w-12 h-full flex items-center justify-center bg-[#0ea5e9] hover:bg-[#1e40af] duration-300 text-amazon_blue cursor-pointer rounded-tr-md rounded-br-md">
            <SearchIcon />
          </span>
        </div>
        {/* ============ Search End here ================= */}
        {/* ============ Signin Start here =============== */}

        <Link to="/signin">
        <div className="flex flex-col items-start justify-center headerHover">
          <p className="text-sm font-light mdl:text-xs text-lightText">Hello, sign in</p>
          <p className="-mt-1 text-sm font-semibold text-whiteText hdden mdl:inline-flex">
            Accounts & Lists{" "}
            <span>
              <ArrowDropDownOutlinedIcon />
            </span>
          </p>
        </div>
        </Link>
        {/* ============ Signin End here ================= */}
        {/* ============ Orders Start here =============== */}
        
        {/* ============ Orders End here ================= */}
        {/* ============ Cart Start here ================= */}

        <Link to="/cart">
        <div className="relative flex items-start justify-center headerHover">
          <ShoppingCartIcon />
          <p className="mt-3 text-xs font-semibold text-whiteText">
            Cart <span className='absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#3b82f6] text-amazon_blue rounded-full flex justify-center items-center'>{products.length > 0?products.length:0}</span>
          </p>
        </div>
        </Link>
       
        {/* ============ Cart End here =================== */}
      </div>
      <HeaderBottom />
    </div>
  );
}

export default Header