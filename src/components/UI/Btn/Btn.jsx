import classes from "./Btn.module.css";

const Btn = (props) => {
  return (
    <button className={`${classes.Btn} ${props.className}`}>
      {props.children}
    </button>
  );
};

export default Btn;
