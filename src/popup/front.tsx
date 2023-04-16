import React from "react";
import ReactDOM from "react-dom/client";
import "../assets/tailwind.css";

const sampleProducts = [
  {
    id: 0,
    name: "Product 1",
    description: "This is a product. It is very good. You should buy it.",
    price: "$100",
    pic: "https://picsum.photos/200",
    link: "https://google.com",
  },
  {
    id: 1,
    name: "Product 1",
    description: "This is a product. It is very good. You should buy it.",
    price: "$100",
    pic: "https://picsum.photos/200",
    link: "https://google.com",
  },
  {
    id: 2,
    name: "Product 1",
    description: "This is a product. It is very good. You should buy it.",
    price: "$100",
    pic: "https://picsum.photos/200",
    link: "https://google.com",
  },
  {
    id: 3,
    name: "Product 1",
    description: "This is a product. It is very good. You should buy it.",
    price: "$100",
    pic: "https://picsum.photos/200",
    link: "https://google.com",
  },
  {
    id: 4,
    name: "Product 1",
    description: "This is a product. It is very good. You should buy it.",
    price: "$100",
    pic: "https://picsum.photos/200",
    link: "https://google.com",
  },
  {
    id: 5,
    name: "Product 1",
    description: "This is a product. It is very good. You should buy it.",
    price: "$100",
    pic: "https://picsum.photos/200",
    link: "https://google.com",
  },
];

const sampleStores = [
  {
    id: 0,
    name: "Kikuu",
    description: "Online shopping Mall.",
    pic: "kikuu.png",
    link: "https://rw.kikuu.com/",
  },
  {
    id: 2,
    name: "Iduka",
    description: "For supplies, industries and individual sellers.",
    pic: "iduka.png",
    link: "https://iduka.rw/",
  },
  {
    id: 3,
    name: "Roots Rwanda",
    description: "Genuine brand resellers.",
    pic: "rootsRw.jpeg",
    link: "https://www.rootsrwanda.rw/",
  },
  {
    id: 4,
    name: "BeiMart",
    description: "Seller of products and services.",
    pic: "beimart.png",
    link: "https://beimart.com/",
  },
  {
    id: 5,
    name: "Kimironko Market",
    description: "For all fresh and local produce.",
    pic: "kimironko.png",
    link: "https://kimironkomarket.rw/",
  }
  // {
  //   id: 6,
  //   name: "Store 1",
  //   description: "This is a store. It is very good. You should buy it.",
  //   pic: "https://picsum.photos/200",
  //   link: "https://google.com",
  // },
];

function App() {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <main className="p-4 no-scrollbar">
      <header className="flex rounded-xl">
        <div
          onClick={() => setActiveTab(0)}
          className={`w-1/2 cursor-pointer rounded-l-xl border-[1px] pl-4 py-3 font-semibold text-base ${
            activeTab === 0
              ? "bg-amber-950 text-white border-amber-950"
              : "bg-transparent text-amber-950 border-amber-950"
          }`}
        >
          <h2>Similar Products</h2>
        </div>
        <div
          onClick={() => setActiveTab(1)}
          className={`w-1/2 cursor-pointer rounded-r-xl pr-4 border-[1px] pl-4 py-3 font-semibold text-base ${
            activeTab === 1
              ? "bg-amber-950 text-white border-amber-950"
              : "bg-transparent text-amber-950 border-amber-950"
          }`}
        >
          <h2>Top Websites</h2>
        </div>
      </header>

      {activeTab === 0 && (
        <div className="flex flex-col gap-4 mt-6 h-[500px] overflow-y-auto no-scrollbar">
          {sampleProducts.map((product) => (
            <OneProduct {...product} />
          ))}
        </div>
      )}
      {activeTab === 1 && (
        <div className="flex flex-col gap-4 mt-6 h-[500px] overflow-y-auto no-scrollbar">
          {sampleStores.map((store) => (
            <OneStore {...store} />
          ))}
        </div>
      )}
    </main>
  );
}

function OneProduct({ name, pic, description, price, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-[#edf3f4] transition-all ease-in duration-300 hover:bg-[#edf3f4]/60 relative p-4 pb-4 px-2 gap-3 rounded-xl flex text-[#212121]"
    >
      <div className="w-[70px] h-[70px]">
        <img
          src={pic}
          alt={name}
          height="70px"
          width="70px"
          className="rounded-xl"
        />
      </div>

      <div className="flex flex-col w-4/5 -mt-1 p-0 m-0">
        <h3 className="text-lg font-bold p-0 m-0">{name}</h3>
        <p className="text-sm text-black font-medium">{description}</p>
      </div>
      <span className="bg-amber-950 self-center text-white font-bold text-base w-[100px] flex justify-center items-center h-[35px] rounded-2xl">
        View
      </span>
      <span className="text-amber-950 font-bold text-base absolute bottom-1 right-3 rounded-2xl">
        {price}
      </span>
    </a>
  );
}

function OneStore({ name, pic, description, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-[#edf3f4] transition-all ease-in duration-300 hover:bg-[#edf3f4]/60 relative p-4 h-[200px] pb-4 px-2 gap-3 rounded-xl flex text-[#212121]"
    >
      <div className="w-[100px] h-full">
        <img src={pic} alt={name} width="auto" className="rounded-xl h-full" />
      </div>

      <div className="flex flex-col w-4/5 p-0 m-0">
        <h3 className="text-lg font-bold p-0 m-0">{name}</h3>
        <p className="text-sm text-black font-medium">{description}</p>
      </div>
      <span className="bg-amber-950 self-center text-white font-bold text-base w-[100px] flex justify-center items-center h-[35px] rounded-2xl">
        Visit
      </span>
    </a>
  );
}

export default App;