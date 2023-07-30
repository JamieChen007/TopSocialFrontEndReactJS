import classes from "./Message.module.css";
import ProfileImg from "../../../../UI/ProfileImg/ProfileImg";

const Message = (props) => {
  return (
    <div className={classes.Message}>
      <ProfileImg
        className={classes.ProfileImg}
        profileImgUrl={props.messageData.src}
      />
      <div className={classes.Name}>{props.messageData.name}</div>
      <div className={classes.Msg}>{props.messageData.msg}</div>
    </div>
  );
};

export default Message;
