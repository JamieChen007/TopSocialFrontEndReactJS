import CardContext from "../../../../store/card-context";
import Card from "./Card/Card";
import classes from "./Cards.module.css";
import { useContext } from "react";

const Cards = () => {
  const ctx = useContext(CardContext);

  return (
    <div className={classes.Cards}>
      {ctx.cardsData.map((item) => {
        return <Card key={item.id} card={item} />;
      })}
    </div>
  );
};

export default Cards;
