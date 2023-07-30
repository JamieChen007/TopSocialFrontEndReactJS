import classes from "./MainMiddle.module.css";
import Highlines from "./Highlines/Highlines";
import PostBar from "./PostBar/PostBar";
import Cards from "./Cards/Cards";

const MainMiddle = () => {
  return (
    <div className={classes.MainMiddle}>
      <Highlines />
      <PostBar />
      <Cards />
    </div>
  );
};

export default MainMiddle;
