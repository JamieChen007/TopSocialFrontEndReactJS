import { useContext, useEffect, useState } from "react";
import classes from "./Nav.module.css";
import ProfileImg from "../UI/ProfileImg/ProfileImg";
import Btn from "../UI/Btn/Btn";
import SearchBar from "../UI/SearchBar/SearchBar";
import ProfileContext from "../../store/profile-context";

const Nav = (props) => {
  const [navbarShortStyle, setNavbarShortStyle] = useState({});

  const [logoShortStyle, setLogoShortStyle] = useState({});

  const ctx = useContext(ProfileContext);

  //navbar height change
  const scrollHandler = () => {
    if (window.scrollY > 150) {
      setNavbarShortStyle({
        height: "6vh",
        padding: "1vh 0",
        backgroundColor: "var(--color-black)",
        transition: "all 1s ease",
      });
      setLogoShortStyle({
        color: "var(--color-bgwhite)",
      });
    } else {
      setNavbarShortStyle({});
      setLogoShortStyle({});
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <nav className={classes.Navbar} style={navbarShortStyle}>
      <div className={classes.Logo} style={logoShortStyle}>
        top social
      </div>
      <SearchBar
        onFilter={props.onFilter}
        className={classes.NavSearch}
        placeholder={"Search for Creators"}
        icon={"uil uil-search-alt"}
      />
      <Btn className={classes.Btn}>create</Btn>
      <ProfileImg
        className={classes.ProfileImg}
        profileImgUrl={ctx.profileData.data.img_src}
      />
    </nav>
  );
};

export default Nav;
