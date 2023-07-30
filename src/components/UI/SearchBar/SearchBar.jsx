import { useState, useEffect } from "react";
import classes from "./SearchBar.module.css";

const SearchBar = (props) => {
  const [keyword, setKeyword] = useState("");

  const changeHandler = (e) => {
    setKeyword(e.target.value);
  };

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
