import "../App.css";
import { FoopieItems } from "../Foopies";
import Title from "./Title";
import Foopie from "./Foopie";

const FoopieList = () => {
  return (
    <section className="section selections" id="selections">
      <Title title="our" subTitle="selections" />

      <div className="section-center selection-center">
        {FoopieItems.map((foopie) => {
          return (
            //...foopie is the same as const {id, img, title, description} = foopie
            //the () is the same as {return <FoopieItem>}
            <Foopie key={foopie.id} {...foopie} />
          );
        })}
      </div>
    </section>
  );
};

export default FoopieList;
