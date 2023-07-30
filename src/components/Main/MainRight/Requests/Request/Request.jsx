import classes from "./Request.module.css";
import ProfileImg from "../../../../UI/ProfileImg/ProfileImg";
import Btn from "../../../../UI/Btn/Btn";

const Request = (props) => {
  return (
    <div className={classes.Request}>
      <div className={classes.RequestBox}>
        <ProfileImg
          className={classes.ProfileImg}
          profileImgUrl={props.requestData.src}
        />
        <div className={classes.RequestName}>{props.requestData.name}</div>
        <div className={classes.RequestMfriend}>
          {props.requestData.mutualFriendNum} Mutual friends
        </div>
      </div>
      <div className={classes.BtnBox}>
        <Btn className={classes.AcceptBtn}>accept</Btn>
        <Btn className={classes.DeclineBtn}>decline</Btn>
      </div>
    </div>
  );
};

export default Request;
