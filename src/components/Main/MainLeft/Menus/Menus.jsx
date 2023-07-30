import Menu from "./Menu/Menu";
import classes from "./Menus.module.css";

const MENU_LIST = [
  {
    name: "home",
    icon: "uil uil-home",
  },
  {
    name: "explore",
    icon: "uil uil-eye",
  },
  {
    name: "notifications",
    icon: "uil uil-bell",
  },
  {
    name: "messages",
    icon: "uil uil-comment-alt-dots",
  },
  {
    name: "bookmarks",
    icon: "uil uil-bookmark",
  },
  {
    name: "analytics",
    icon: "uil uil-analytics",
  },
  {
    name: "theme",
    icon: "uil uil-swatchbook",
  },
  {
    name: "setting",
    icon: "uil uil-setting",
  },
];

const Menus = () => {
  return (
    <div className={classes.Menus}>
      {MENU_LIST.map((item) => {
        return <Menu key={item.name} innerText={item.name} icon={item.icon} />;
      })}
    </div>
  );
};

export default Menus;
