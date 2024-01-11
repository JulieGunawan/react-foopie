import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const foopieItems = [
  {
    title: "Pieeza",
    img: "./assets/chocolate_pizza.jpg",
    description:
      "A slice of pizza topped with oreos, marshmallows, and icing sugar",
  },
  {
    title: "Chocoloco",
    img: "./assets/choco-cheese.jpg",
    description: "A plate of cheese paired with chocolate cake and brownies",
  },
  {
    title: "Tayto Ice Cr3am",
    img: "./assets/ice-cream-baked-potato.jpg",
    description:
      "Hot steaming baked potato topped with ice creams and sprinkles",
  },
];

function Foopies() {
  return (
    <>
      <header>
        <h1>Welcome to my Foopie Store!</h1>
        <h2>
          Foopie is a delicious combination of food and pie or dessert that you
          never tried before
        </h2>
      </header>
      <FoopieList />

      <input type="text" />
    </>
  );
}

const FoopieList = () => {
  return (
    <section className="foopieList">
      {foopieItems.map((foopieItem) => (
        <FoopieItem key={foopieItem.title} {...foopieItem} />
      ))}
    </section>
  );
};

const FoopieItem = (props) => {
  //you need to initialize the value of each img title and description
  const { img, title, description } = props;
  return (
    <article className="foopieItem">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      <button>Click Me</button>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foopies />);
