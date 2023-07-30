import classes from "./Requests.module.css";
import Request from "./Request/Request";

const Requests = (props) => {
  return (
    <div className={classes.Requests}>
      {props.requestData.map((item) => {
        return <Request requestData={item} key={item.id} />;
      })}
    </div>
  );
};

export default Requests;
