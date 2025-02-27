import "./App.css";
import { useState } from "react";
import Product from "./components/Product";
import CardProduct from ".//components/CardProduct";

export default function App() {
  const productData = [
    {
      id: 1,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 1,
      price: 234,
      isLiked: false,
      isSelected: false,
      isBasket: true,
    },
    {
      id: 2,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 0,
      price: 5456,
      isLiked: false,
      isBasket: false,
    },
    {
      id: 3,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 0,
      price: 234,
      isLiked: false,
      isBasket: false,
    },
    {
      id: 4,
      image: "../public/product1.png",
      title: "Эмаль Condor ПФ-115 жёлтая 1,8 кг",
      desc: "Быстросохнущая, высокоукрывистая, защита от водорослей, мха, лишайника, защита от грибка",
      count: 2,
      price: 500,
      isLiked: false,
      isBasket: false,
    },
  ];
  const [status, setStatus] = useState("full");
  const [products, setProducts] = useState(productData);

  const handleLike = (productId) => {
    console.log("productId", productId);
    const newPros = products.map((product) => {
      if (productId === product.id) {
        product.isLiked = !product.isLiked;
      }
      return product;
    });
    setProducts(newPros);
  };
  const [statusi, setStatusi] = useState("full");
  const [productsi, setProductsi] = useState(productData);

  const Basket = (productId) => {
    console.log("productId", productId);

    const newPros = productsi.map((product) => {
      if (productId === product.id) {
        product.isInBasket = !product.isInBasket;
      }
      return product;
    });

    setProductsi(newPros);
  };

  return (
    <div className="main">
      <h1>Садово-огородный инвентарь</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>Сортировать: Сначала новые</p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p>Вид:</p>
          <button onClick={() => setStatusi("card")}>
            <img src="../public/cardStatus.png" alt="card" />
          </button>
          <button onClick={() => setStatusi("full")}>
            <img src="../public/fullStatus.png" alt="full" />
          </button>
        </div>
      </div>
      {/* Products */}
      <div
        className="products"
        style={{
          display: "flex",
          flexWrap: "wrap",
          flexDirection: status === "card" ? "row" : "column",
          flexDirection: statusi === "card" ? "row" : "column",
          alignItems: "center",
        }}
      >
        {products.map((item) => {
          if (statusi === "card") {
            return (
              <CardProduct 
            key={item.id} 
            product={item} 
            Basket={Basket}
            handleLike={handleLike}/>
            )
          }
          return (
            <Product
              key={item.id}
              product={item}
              Basket={Basket}
              handleLike={handleLike}
            />
          );
        })}
        {/* <Pictures/> */}
      </div>
    </div>
  );
}
