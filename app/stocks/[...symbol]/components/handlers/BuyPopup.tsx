import { apiURL } from "@/app/components/apiURL";
import Loading from "@/app/components/Loading";
import axios from "axios";
import { getCookie } from "cookies-next";
import { useState } from "react";
import { Slide, toast } from "react-toastify";

export default function BuyPopup(props: any) {
  let symbol = props.symbol || "";
  let token = getCookie("token");
  const notifySuccess = (message: string) =>
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  const notifyError = (message: string) =>
    toast.error(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });

  const [quantity, setQuantity] = useState(0);

  function updateQuantity(e: any) {
    setQuantity(e.target.value);

    if (e.target.value < 0) {
      setQuantity(0);
      return;
    } else if ((e.target.value = NaN)) {
      setQuantity(0);
      return;
    }
  }
  const [loading, setLoading] = useState(false);

  async function handleBuy(e: any) {
    e.preventDefault();
    const data = {
      symbol: decodeURIComponent(props.symbol),
      quantity: quantity,
    };
    let results;
    try {
      results = await axios({
        method: "post",
        url: apiURL + "/transaction/buyScrip",
        headers: { Authorization: "Bearer " + token },
        data: {
          scrip: decodeURIComponent(symbol),
          quantity: quantity,
        },
      });
      setLoading(false);
    } catch (err: any) {
      results = err.response;
    }
    if (results.status === 200) {
      notifySuccess(`Successfully bought ${quantity} ${props.symbol}`);
    } else if (results.status === 401) {
      notifyError("Insufficient Funds!");
    } else {
      notifyError("Failed to buy the stock");
    }
  }

  return (
    <div className="bg-white mx-4 my-2">
      <div className="flex flex-row items-end">
        <h1 className="text-3xl  green-text mr-2">BUY</h1>
        <h1 className="text-2xl">{props.companyName}</h1>
      </div>
      <div className="mt-2 text-lg">
        LTP:{" "}
        <span className="ml-1 font-semibold blue-text">₹ {props.ltp}</span>
      </div>
      <div>
        <form onSubmit={handleBuy}>
          <div className="text-lg flex flex-col mt-4">
            <label className="text-xl ">Quantity</label>
            <input
              type="number"
              className="border border-[#B8B8B8] rounded-md my-2 p-2"
              value={quantity}
              onChange={updateQuantity}
            />
            <h1 className="blue-text font-semibold">
              Total value: ₹{(quantity * props.ltp).toFixed(2)}
            </h1>
            <div className="flex justify-center items-center">
              <button className="mt-2 flex w-fit px-4 text-xl font-semibold p-2 bg-[#4169e1] text-white  rounded-md hover:bg-[#1e3a8a]">
                {loading ? (
                  <div className=" w-full h-full flex justify-center items-center">
                    <Loading /> <span className="ml-2 "> Buy </span>
                  </div>
                ) : (
                  "Buy"
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
