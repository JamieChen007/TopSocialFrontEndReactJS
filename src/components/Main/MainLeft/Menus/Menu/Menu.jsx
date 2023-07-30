import classes from "./Menu.module.css";

const Menu = (props) => {
  return (
    <div className={classes.Menu}>
      {props.innerText}
      <i className={props.icon} />
    </div>
  );
};

export default Menu;
