import { CARTITEM_LIST } from "@/public/util/constant";

export default function Cart() {
  return (
    <div className="text-center">
      <h4 className="title">Cart</h4>
      {CARTITEM_LIST.map((item, i) => (
        <CartItem key={i} item={item} />
      ))}
      <ColorButton text="결제하기" textColor="amber-300" bgColor="red-500" />
    </div>
  );
}

interface CartItemProps {
  item: {
    name: string;
    price: number;
    amount: number;
  };
}
function CartItem({ item }: CartItemProps) {
  return (
    <div className="p-2.5 flex justify-around border-b border-b-gray-500 leading-none">
      <p>{item.name}</p>
      <p>${item.price}</p>
      <p>{item.amount}개</p>
    </div>
  );
}

function ColorButton({ text, bgColor, textColor }: any) {
  return (
    <button
      className={`text-${textColor} bg-${bgColor} px-2.5  py-1.5 rounded-md font-bold text-lg mx-auto my-10 hover:bg-sky-700 hover:scale-105 transition duration-300 ease-in-out`}
    >
      {text}
    </button>
  );
}
