import classes from "./Main.module.css";
import MainLeft from "./MainLeft/MainLeft";
import MainMiddle from "./MainMiddle/MainMiddle";
import MainRight from "./MainRight/MainRight";

const Main = () => {
  return (
    <main className={classes.Main}>
      <MainLeft />
      <MainMiddle />
      <MainRight />
    </main>
  );
};

export default Main;
