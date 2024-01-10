import React from "react";
import ReactDOM from "react-dom/client";

function Foopies() {
  return (
    <>
      <h1>Welcome to my Foopie Store!</h1>
      <h2>
        Foopie is a delicious combination of food and pie or dessert that you
        never tried before
      </h2>
      <FoopieList />

      <input type="text" />
    </>
  );
}

const FoopieList = () => {
  return (
    <section>
      <FoopieItem />
      <FoopieItem />
      <FoopieItem />
    </section>
  );
};
const FoopieItem = () => {
  return (
    <article>
      <Image />
      <Title />
      <Description />
    </article>
  );
};

const Image = () => {
  return <img src="" alt="" />;
};
const Title = () => {
  return <h3></h3>;
};

const Description = () => {
  return <p></p>;
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Foopies />);
