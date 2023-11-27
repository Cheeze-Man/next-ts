"use client";

import { PRODUCT_LIST } from "@/public/util/constant";
import { useState } from "react";

export default function List() {
  const [listData, setListData] = useState(PRODUCT_LIST);

  const handleAmountChange = (i: number, amountChange: number): void => {
    setListData((prev) => {
      const updatedListData = [...prev];
      const newAmount = updatedListData[i].amount + amountChange;
      updatedListData[i].amount = Math.max(0, newAmount);
      return updatedListData;
    });
  };

  return (
    <div>
      <h4 className="text-center">상품목록</h4>
      {listData.map(({ name, price, amount }, i) => (
        <div
          className="my-20 mx-auto w-1/6 bg-white text-black p-20 rounded-md"
          key={name + i}
        >
          <img
            className="w-full h-auto"
            src={`https://codingapple.com/wp-content/uploads/2023/01/food${i}.png`}
            alt={name}
          />
          <h4 className="font-bold text-lg">
            {name} ${price}
          </h4>
          <button
            onClick={() => {
              handleAmountChange(i, -1);
            }}
          >
            -
          </button>
          <span>{amount}</span>
          <button
            onClick={() => {
              handleAmountChange(i, 1);
            }}
          >
            +
          </button>
        </div>
      ))}
    </div>
  );
}
