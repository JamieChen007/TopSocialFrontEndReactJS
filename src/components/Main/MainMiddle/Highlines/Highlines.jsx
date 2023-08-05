import classes from "./Highlines.module.css";
import Highline from "./Highline/Highline";
import { useGetHighlineQuery } from "../../../../store/highlineApi";

const Highlines = () => {
  //get highline data trough API from backend
  const { data: highlineData, isSuccess: getHighlineSuccess } =
    useGetHighlineQuery();

  // highline data array
  let HighlinesArr = [];

  // format highline data to array
  if (getHighlineSuccess) {
    let highlinePieces = 6;
    for (let i = 0; i < highlinePieces; i++) {
      HighlinesArr.push({
        description: highlineData.data.description[i],
        highline_src: highlineData.data.highline_src[i],
        profile_src: highlineData.data.profile_src[i],
      });
    }
  }

  return (
    <div className={classes.Highlines}>
      {getHighlineSuccess &&
        HighlinesArr.map((item) => {
          return <Highline highlineData={item} key={item.description} />;
        })}
    </div>
  );
};

export default Highlines;
