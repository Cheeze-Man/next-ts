"use client";

import { PRODUCT_LIST } from "@/public/util/constant";
import { useState } from "react";

export default function List() {
  const [listData, setListData] = useState(PRODUCT_LIST);
  const buttonClass =
    "text-xl font-bold rounded-md bg-slate-500 w-7 h-7 shadow-md";

  const handleAmountChange = (index: number, amountChange: number): void => {
    setListData((prev) => {
      return prev.map((item, i) => {
        if (index === i) {
          return { ...item, amount: Math.max(item.amount + amountChange, 0) };
        }
        return item;
      });
    });
  };

  return (
    <div>
      <h4 className="text-center">상품목록</h4>
      {listData.map(({ name, price, amount }, i) => (
        <div
          className="text-center my-20 mx-auto w-1/6 bg-white text-black p-20 rounded-md"
          key={name + i}
        >
          <img
            className="w-full h-auto"
            src={`https://codingapple.com/wp-content/uploads/2023/01/food${i}.png`}
            alt={name}
          />
          <h4 className="text-lg font-bold">
            {name}
            <br />$ {price}
          </h4>
          <button
            className={buttonClass}
            onClick={() => {
              handleAmountChange(i, -1);
            }}
          >
            -
          </button>
          <span className="mx-3 text-lg font-bold">{amount}</span>
          <button
            className={buttonClass}
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
