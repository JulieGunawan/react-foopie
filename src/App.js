import React from "react";
import "./index.css";
import "./App.css";
import FoopieItem from "./Foopie";
import FoopieItems from "./Foopies";
import Navbar from "./components/navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <session className="foopieStore">
      <Navbar />
      <Hero />
      <FoopieList />
    </session>
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
        <button type="submit" className="btn">
          Search
        </button>
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
      <h1 className="foopieBestSeller">Foopies Best Sellers</h1>
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

export default App;
