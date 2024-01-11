import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const foopieItems = [
  {
    id: 1,
    title: "Pieeza",
    img: "./assets/chocolate_pizza.jpg",
    description:
      "A slice of pizza topped with oreos, marshmallows, and icing sugar",
  },
  {
    id: 2,
    title: "Chocoloco",
    img: "./assets/choco-cheese.jpg",
    description: "A plate of cheese paired with chocolate cake and brownies",
  },
  {
    id: 3,
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
    </>
  );
}

const FoopieList = () => {
  return (
    <>
      <EventExample />
      <section className="foopieList">
        {foopieItems.map((foopieItem) => (
          //...foopieItem is the same as const {id, img, title, description} = foopieItem
          <FoopieItem key={foopieItem.id} {...foopieItem} />
        ))}
      </section>
    </>
  );
};

const EventExample = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
  };
  return (
    <section>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="example"
          onChange={(e) => {
            console.log(e.target.name);
            console.log(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
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
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foopies />);
