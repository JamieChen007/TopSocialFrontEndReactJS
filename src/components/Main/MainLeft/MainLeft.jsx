import ProfileImg from "../../UI/ProfileImg/ProfileImg";
import classes from "./MainLeft.module.css";
import Menus from "./Menus/Menus";
import Btn from "../../UI/Btn/Btn";
import ProfileContext from "../../../store/profile-context";
import { useContext } from "react";

const MainLeft = () => {
  // call profile context data
  const ctx = useContext(ProfileContext);

  return (
    <div className={classes.MainLeft}>
      <div className={classes.Profile}>
        <ProfileImg
          className={classes.ProfileImg}
          profileImgUrl={ctx.profileData.data.img_src}
        />
        <span className={classes.ProfileName}>{ctx.profileData.data.name}</span>
        <span className={classes.ProfileAt}>{ctx.profileData.data.at}</span>
      </div>
      <Menus />
      <Btn className={classes.Btn}>create post</Btn>
    </div>
  );
};

export default MainLeft;
