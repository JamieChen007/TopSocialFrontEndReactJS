import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import { useGetProfileQuery } from "./store/profileApi";
import ProfileContext from "./store/profile-context";
import { useGetCardsQuery } from "./store/cardsApi";
import CardContext from "./store/card-context";
import { useEffect, useState } from "react";

const App = () => {
  const { data: profileData, isSuccess: getProfileSuccess } =
    useGetProfileQuery();

  const { data: cardsAllData, isSuccess: getCardsSuccess } = useGetCardsQuery();

  const [cardsData, setCardsData] = useState([]);

  useEffect(() => {
    if (getCardsSuccess) {
      setCardsData(cardsAllData.data);
    }
  }, [getCardsSuccess]);

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
