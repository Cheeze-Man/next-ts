interface Product {
  name: string;
  price: number;
}
export const PRODUCT_LIST: Product[] = [
  {
    name: "Tomatoes",
    price: 40,
  },
  {
    name: "Pasta",
    price: 50,
  },
  {
    name: "Coconut",
    price: 70,
  },
];

interface Route {
  title: string;
  path: string;
}
export const ROUTE_LIST: Route[] = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "List",
    path: "/list",
  },
  {
    title: "Cart",
    path: "/cart",
  },
];
