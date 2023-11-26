import { CARTITEM_LIST } from "@/public/util/constant";

export default function Cart() {
  return (
    <div>
      <h4 className="title">Cart</h4>
      {CARTITEM_LIST.map(({ name, price, amount }, i) => (
        <CartItem key={i} name={name} price={price} amount={amount} />
      ))}
    </div>
  );
}

function CartItem({
  name,
  price,
  amount,
}: {
  name: string;
  price: number;
  amount: number;
}) {
  return (
    <div className="p-2.5 flex justify-around border-b border-b-gray-500 leading-none">
      <p>{name}</p>
      <p>${price}</p>
      <p>{amount}개</p>
    </div>
  );
}
