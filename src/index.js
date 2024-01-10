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

const thirdFoopie = {
  title: "Tayto Ice Cr3am",
  img: "./assets/ice-cream-baked-potato.jpg",
  description: "Hot steaming baked potato topped with ice creams and sprinkles",
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
      <FoopieItem
        title={firstFoopie.title}
        img={firstFoopie.img}
        description={firstFoopie.description}
      />
      <FoopieItem
        title={secondFoopie.title}
        img={secondFoopie.img}
        description={secondFoopie.description}
      />
      <FoopieItem
        title={thirdFoopie.title}
        img={thirdFoopie.img}
        description={thirdFoopie.description}
      />
    </section>
  );
};

const FoopieItem = (props) => {
  console.log(props);
  return (
    <article className="foopieItem">
      <img src={props.img} alt="chocolate pizza" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foopies />);
