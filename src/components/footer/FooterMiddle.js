import React from "react";
import { middleList } from "../../constants";
import FooterMiddleList from "./FooterMiddleList";
import { logo, bdFlag } from "../../assets/index";
import InstagramIcon from "@mui/icons-material/Instagram";
import LanguageIcon from "@mui/icons-material/Language";

const FooterMiddle = () => {
  return (
    <div className="w-full text-white bg-amazon_light">
      {/* ============ Top Start here ================== */}
      <div className="w-full border-b-[1px] border-gray-500 py-10">
        <div className="max-w-5xl mx-auto text-gray-300">
          <div className="grid items-start w-full grid-cols-4 place-items-center">
            {middleList.map((item) => (
              <FooterMiddleList
                key={item._id}
                title={item.title}
                listItem={item.listItem}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ============ Top End here ==================== */}
      {/* ============ Bottom Start here =============== */}
      <div className="flex items-center justify-center w-full gap-6 py-6">
        <div>
          <img className="w-20 pt-3" src={logo} alt="logo" />
        </div>
        <div className="flex gap-2">
          <a
            href="https://instagram.com/ashnat___?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            <InstagramIcon size={24} />
          </a>

          <a
            href="https://ashnat.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-4"
          >
            < LanguageIcon size={24} />
          </a>
        </div>
      </div>
      {/* ============ Bottom End here ================= */}
    </div>
  );
};

export default FooterMiddle;
