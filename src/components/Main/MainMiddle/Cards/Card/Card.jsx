import classes from "./Card.module.css";
import ProfileImg from "../../../../UI/ProfileImg/ProfileImg";

const Card = (props) => {
  return (
    <div className={classes.Card}>
      <div className={classes.ProfileCtn}>
        <ProfileImg
          className={classes.ProfileImg}
          profileImgUrl={props.card.profile.src}
        />
        <div className={classes.ProfileName}>{props.card.profile.name}</div>
        <div className={classes.ProfilePositionTime}>
          {props.card.profile.position + " ," + props.card.profile.time}
        </div>
        <i className="uil uil-ellipsis-h"></i>
      </div>
      <div
        className={classes.CardPic}
        style={{ backgroundImage: `url(${props.card.picture.img_src})` }}
      ></div>
      <div className={classes.CardFunction}>
        <div className={classes.CardFunctionLike}>
          <i className="uil uil-heart"></i>
        </div>
        <div className={classes.CardFunctionComment}>
          <i className="uil uil-comment-dots"></i>
        </div>
        <div className={classes.CardFunctionShare}>
          <i className="uil uil-share-alt"></i>
        </div>
        <div className={classes.CardFunctionMark}>
          <i className="uil uil-bookmark"></i>
        </div>
      </div>
      <div className={classes.Like}>
        <ProfileImg
          className={classes.LikeProfileImg}
          profileImgUrl={props.card.comment.img_src_list[0]}
        />
        <ProfileImg
          className={classes.LikeProfileImg}
          profileImgUrl={props.card.comment.img_src_list[1]}
        />
        <ProfileImg
          className={classes.LikeProfileImg}
          profileImgUrl={props.card.comment.img_src_list[2]}
        />
        <div className={classes.LikeInfo}>
          Liked by <b>{props.card.comment.first_people_name}</b> and{" "}
          <b>{props.card.comment.like_peoples_number}</b> others
        </div>
      </div>
      <div className={classes.LikeComment}>
        {props.card.comment.comment_info}
      </div>
      <div className={classes.ViewInfo}>
        View all {props.card.comment.view_number} comments
      </div>
    </div>
  );
};

export default Card;
