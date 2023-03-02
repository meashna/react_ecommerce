import StarIcon from "@mui/icons-material/Star";
import React from "react";
import { useDispatch } from "react-redux";
import { useLoaderData } from "react-router-dom";
import { addToCart } from "../../redux/amazonSlice";

const Products = () => {
  const dispatch=useDispatch();
  const data = useLoaderData();
  const productData = data.data;
  const exchangeRate = 80;
  function convertToRupees(priceInDollars) {
    return priceInDollars * exchangeRate;
  }

  return (
    <div className="grid grid-cols-1 gap-10 px-4 mx-auto md:grid-cols-4 -cols-4 max-w-screen-2xl">
      {productData.map((item) => (
        <div className="h-auto bg-white border-[1px] border-gray-200 p-6 z-30 hover:border-transparent shadow-none hover:shadow-testShadow duration-200 relative flex flex-col gap-4 ">
          <div
            key={item.id}
            className="flex flex-col items-center justify-center w-full h-auto gap-4"
          >
             <span className="absolute text-xs italic text-black capitalize top-2 right-2">
              {item.category}
            </span>
            <img
              className="object-contain h-64 p-4 w-52"
              src={item.image}
              alt="ProductImg"
            ></img>
            
          </div>
          <div className="px-4">
            <div className="flex items-center justify-between">
              <h2 className="font-medium tracking-wide font-titleFont text-amazon_blue">
                {item.title.substring(0, 20)}
              </h2>
              <p className="text-sm font-semibold text-gray-600">
                Rs.{convertToRupees(item.price)}
              </p>
            </div>
            <div>
              <p className="mb-1 text-sm">
                {item.description.substring(0, 100)}....
              </p>
              <div className="text-blue-500">
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
                <StarIcon />
              </div>
            </div>
            <button onClick={()=>dispatch(addToCart({
              id:item.id,
              title:item.title,
              description:item.description,
              price:item.price,
              category:item.category,
              image:item.image,
              quantity:1,
            }))} className="w-full mt-3 text-base font-medium border-blue-500 rounded-md py-1.5 duration-200 hover:border-blue-500 font-titleFont bg-gradient-to-tr from-blue-400 to-blue-200 hover:from-blue-300 hover:from-yellow-200-">
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Products;
