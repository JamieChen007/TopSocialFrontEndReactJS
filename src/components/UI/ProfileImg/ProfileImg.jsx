import classes from "./ProfileImg.module.css";

const ProfileImg = (props) => {
  return (
    <div
      className={`${classes.ProfileImg} ${props.className}`}
      style={{ backgroundImage: `url(${props.profileImgUrl})` }}
    ></div>
  );
};

export default ProfileImg;
