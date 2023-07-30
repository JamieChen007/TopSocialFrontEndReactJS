import classes from "./PostBar.module.css";
import ProfileImg from "../../../UI/ProfileImg/ProfileImg";
import ProfileContext from "../../../../store/profile-context";
import { useContext } from "react";
import Btn from "../../../UI/Btn/Btn";

const PostBar = () => {
  const ctx = useContext(ProfileContext);

  return (
    <div className={classes.PostBar}>
      <ProfileImg
        className={classes.ProfileImg}
        profileImgUrl={ctx.profileData.data.img_src}
      />
      <input
        type="text"
        className={classes.PostInput}
        placeholder={"What is on your mind, " + ctx.profileData.data.name + "?"}
      />
      <Btn className={classes.Btn}>post</Btn>
    </div>
  );
};

export default PostBar;
