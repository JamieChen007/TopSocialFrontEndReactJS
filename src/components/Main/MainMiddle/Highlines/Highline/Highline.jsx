import classes from "./Highline.module.css";
import ProfileImg from "../../../../UI/ProfileImg/ProfileImg";

const Highline = (props) => {
  return (
    <div
      className={classes.Highline}
      style={{ backgroundImage: `url(${props.highlineData.highline_src})` }}
    >
      <div className={classes.Desc}>{props.highlineData.description}</div>
      <ProfileImg
        className={classes.ProfileImg}
        profileImgUrl={props.highlineData.profile_src}
      />
    </div>
  );
};

export default Highline;
