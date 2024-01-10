import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
      <FoopieItem />
      <FoopieItem />
      <FoopieItem />
    </section>
  );
};
const FoopieItem = () => {
  return (
    <article className="foopieItem">
      <Image />
      <Title />
      <Description />
    </article>
  );
};

const Image = () => {
  return <img src="./assets/chocolate_pizza.jpg" />;
};
const Title = () => {
  return <h3>Pieezza</h3>;
};

const Description = () => {
  return (
    <p>A slice of pizza topped with oreos, marshmallows, and icing sugar</p>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foopies />);
