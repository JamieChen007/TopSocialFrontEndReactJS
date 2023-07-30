import classes from "./Highlines.module.css";
import Highline from "./Highline/Highline";
import { useGetHighlineQuery } from "../../../../store/highlineApi";

const Highlines = () => {
  const { data: highlineData, isSuccess: getHighlineSuccess } =
    useGetHighlineQuery();

  let HighlinesArr = [];

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
