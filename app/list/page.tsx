import { PRODUCT_LIST } from "@/public/util/constant";

export default function List() {
  return (
    <div>
      <h4 className="text-center">상품목록</h4>
      {PRODUCT_LIST.map(({ name, price }) => (
        <div
          className="my-20 mx-auto w-1/6 bg-white text-black p-20 rounded-md"
          key={name}
        >
          <h4 className="font-bold text-lg">
            {name} ${price}
          </h4>
        </div>
      ))}
    </div>
  );
}
