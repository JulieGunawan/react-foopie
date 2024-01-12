import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import FoopieItems from "./Foopies";

function FoopieStore() {
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

const FoopieList = () => {
  const getFoopie = (id) => {
    const foopie = FoopieItems.find((foopie) => foopie.id === id);
    console.log(foopie);
  };

  return (
    <>
      <EventExample />
      <section className="foopieList">
        {FoopieItems.map((foopieItem) => (
          //...foopieItem is the same as const {id, img, title, description} = foopieItem
          //the () is the same as {return <FoopieItem>}
          <FoopieItem
            key={foopieItem.id}
            {...foopieItem}
            getFoopie={getFoopie}
          />
        ))}
      </section>
    </>
  );
};

const FoopieItem = (props) => {
  //you need to initialize the value of each img title and description
  const { id, img, title, description, getFoopie } = props;

  return (
    <article className="foopieItem">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <button onClick={() => getFoopie(id)}>Display Title</button>
      <p>{description}</p>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<FoopieStore />);
