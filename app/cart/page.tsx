import { CARTITEM_LIST } from "@/public/util/constant";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      {CARTITEM_LIST.map((item, i) => (
        <CartItem key={i} item={item} />
      ))}
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
