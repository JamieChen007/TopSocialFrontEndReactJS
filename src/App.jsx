import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useGetProfileQuery } from "./store/profileApi";
import ProfileContext from "./store/profile-context";
import { useGetCardsQuery } from "./store/cardsApi";
import CardContext from "./store/card-context";
import { useEffect, useState } from "react";

const App = () => {
  //get my profile data trough API from backend
  const { data: profileData, isSuccess: getProfileSuccess } =
    useGetProfileQuery();

  // get all cards data trough API from backend
  const { data: cardsAllData, isSuccess: getCardsSuccess } = useGetCardsQuery();

  // set cards data, use as context data
  const [cardsData, setCardsData] = useState([]);

  // set all cards data as cards data by default when API call success
  useEffect(() => {
    if (getCardsSuccess) {
      setCardsData(cardsAllData.data);
    }
  }, [getCardsSuccess]);

  // function for filter and set cards data, pass to Nav component
  const filterData = (keyword) => {
    if (getCardsSuccess) {
      const result = cardsAllData.data.filter(
        (item) => item.profile.name.toLowerCase().indexOf(keyword) !== -1
      );
      setCardsData(result);
    }
  };

  return (
    <>
      {getProfileSuccess && getCardsSuccess && (
        <ProfileContext.Provider value={{ profileData }}>
          <CardContext.Provider value={{ cardsData }}>
            <Nav onFilter={filterData} />
            <Main />
          </CardContext.Provider>
        </ProfileContext.Provider>
      )}
    </>
  );
};

export default App;
