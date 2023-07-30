import classes from "./Messages.module.css";
import Message from "./Message/Message";

const Messages = (props) => {
  return (
    <div className={classes.Messages}>
      {props.messageData.map((item) => {
        return <Message key={item.id} messageData={item} />;
      })}
    </div>
  );
};

export default Messages;
