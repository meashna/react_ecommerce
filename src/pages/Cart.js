import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import {
  deleteItem,
  resetCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/amazonSlice";

const Cart = () => {
  const products = useSelector((state) => state.amazon.products);
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState("");
  useEffect(() => {
    let Total = 0;
    products.map((item) => {
      Total += item.price * item.quantity * 80;
      return setTotalPrice(Total.toFixed(2));
    });
  }, [products]);

  const exchangeRate = 80;
  function convertToRupees(priceInDollars) {
    return priceInDollars * exchangeRate;
  }

  return (
    <div className="w-full p-4 bg-gray-100 ">
      <div className="container grid h-auto grid-cols-1 md:grid-cols-5 gap-8 mx-auto">
        <div className="w-full h-full md:col-span-4 px-4 bg-white">
          <div className="flex items-center justify-between font-titlefont border-b-[1px] border-b-gray-400 py-3">
            <h2 className="text-3xl font-semibold">Shopping Cart</h2>
            <h4 className="text-3xl font-semibold hidden md:block">Subtitle</h4>
          </div>
          <div>
            {products.map((item) => (
              <div
                key={item.id}
                className="w-full border-b-[1px] border-b-gray-300 p-4 flex flex-col md:flex-row items-center md:gap-6"
              >
                <div className="w-full md:w-1/5">
                  <img
                    className="object-contain w-full h-44"
                    src={item.image}
                    alt="productImg"
                  ></img>
                </div>
                <div className="w-full md:w-4/5">
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-sm ">
                    {item.description.substring(0, 200)}
                  </p>
                  <br></br>
                  <p className="text-base">
                    Price <span> Rs.{convertToRupees(item.price)}</span>{" "}
                  </p>
                  <div className="flex flex-row items-center justify-center gap-4">
                    <div className="bg-[#F0F2F2] flex justify-center items-center gap-1 w-24 py-1 text-center drop-shadow-lg rounded-md">
                      <p>Qty:</p>
                      <p
                        onClick={() => dispatch(decrementQuantity(item.id))}
                        className="px-1 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-grey-400"
                      >
                        -
                      </p>
                      <p>{item.quantity}</p>

                      <p
                        onClick={() => dispatch(incrementQuantity(item.id))}
                        className="px-1 duration-300 bg-gray-200 rounded-md cursor-pointer hover:bg-grey-400"
                      >
                        +
                      </p>
                    </div>
                    <button
                      onClick={() => dispatch(deleteItem(item.id))}
                      className="p-1 mt-2 text-white duration-300 bg-red-500 rounded w-36-lg hover:bg-red-700 active:bg-red-900"
                    >
                      Delete Item
                    </button>
                  </div>
                </div>

                <div>
                  <p className="text-lg font-semibold font-titleFont ">Rs 
                    {item.price * item.quantity * 80}  
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div onClick={() => dispatch(resetCart())} className="p-5 ">
            <button className="items-center justify-between w-40 py-2 text-lg font-semibold tracking-wide text-white bg-red-500 rounded-lg pflex x-10 hover:bg-red-600 active:bg-red-500 font-titleFont">
              Clear
            </button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center w-full md:col-span-1 p-4 bg-white h-52">
          <div>
            <p className="flex items-start gap-2 text-sm">
              <span>
                <CheckCircleIcon className="text-green-500 bg-white rounded" />
              </span>
              {""}
              Something want to puts here so it can looks cool
            </p>
          </div>
          <div>
            <p className="flex items-center justify-between gap-1 px-10 py-1 font-semibold ">
              Total:<span className="font-bold">{totalPrice}/-</span>
            </p>
          </div>
          <button className="w-full mt-3 text-base font-medium border-blue-500 rounded-md py-1.5 duration-200 hover:border-blue-500 font-titleFont bg-gradient-to-tr from-blue-400 to-blue-200 hover:from-blue-300 hover:to-yellow">
            Proceed to pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
