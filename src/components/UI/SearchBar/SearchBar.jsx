import { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  // set keyword as a state
  const [keyword, setKeyword] = useState("");

  // get value and set keyword
  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };

  // call onFilter function and pass keyword as param when keyword change
  // use timeout to delay call 1000ms, minus backend API call times
  useEffect(() => {
    const timer = setTimeout(() => {
      props.onFilter(keyword.toLowerCase());
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [keyword]);

  return (
    <div className={`${classes.Search} ${props.className}`}>
      <div className={classes.SearchIcon}>
        <i className={props.icon}></i>
      </div>
      <input
        type="search"
        value={keyword}
        onChange={changeHandler}
        placeholder={props.placeholder}
        className={classes.SearchInput}
      />
    </div>
  );
};

export default SearchBar;
