import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const firstFoopie = {
  title: "Pieeza",
  img: "./assets/chocolate_pizza.jpg",
  description:
    "A slice of pizza topped with oreos, marshmallows, and icing sugar",
};

const secondFoopie = {
  title: "Chocoloco",
  img: "./assets/choco-cheese.jpg",
  description: "A plate of cheese paired with chocolate cake and brownies",
};

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
      <FoopieItem title="Piezza" />
      <FoopieItem title="Sweets" number={22} />
      <FoopieItem title="Chocoloco" />
    </section>
  );
};

const FoopieItem = (props) => {
  console.log(props);
  return (
    <article className="foopieItem">
      <img src={img} alt="chocolate pizza" />
      <h3>{props.title}</h3>
      <p>A slice of pizza topped with oreos, marshmallows, and icing sugar</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foopies />);
