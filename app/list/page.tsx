export default function List() {
  let products: string[] = ["Tomatoes", "Pasta", "Coconut"];
  return (
    <div>
      <h4 className="text-center">상품목록</h4>
      {products.map((product) => (
        <div className="my-20 mx-auto w-1/6 bg-white text-black p-20 rounded-md">
          <h4 className="font-bold text-lg">{product} $40</h4>
        </div>
      ))}
    </div>
  );
}
