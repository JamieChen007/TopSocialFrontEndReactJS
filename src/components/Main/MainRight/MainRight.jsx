import classes from "./MainRight.module.css";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Requests from "./Requests/Requests";
import { useEffect, useState } from "react";
import Messages from "./Messages/Messages";
import { useGetRequestQuery } from "../../../store/requestApi";
import { useGetMessageQuery } from "../../../store/messageApi";

const MainRight = () => {
  // set activeTab as a state
  const [activeTab, setActiveTab] = useState("");

  // tabs chosen CSS style
  const style = {
    color: "var(--color-black)",
    borderBottom: "1vh solid var(--color-primary)",
    transition: "border-bottom 1s",
  };

  // tabs CSS style
  let [primaryStyle, setPrimaryStyle] = useState({});
  let [generalStyle, setGeneralStyle] = useState({});
  let [requestsStyle, setRequestsStyle] = useState({});

  // click primary tab
  const primaryClickHandler = () => {
    setActiveTab("primary");
    setPrimaryStyle(style);
    setGeneralStyle({});
    setRequestsStyle({});
  };

  // click general tab
  const generalClickHandler = () => {
    setActiveTab("general");
    setPrimaryStyle({});
    setGeneralStyle(style);
    setRequestsStyle({});
  };

  // click requests tab
  const requestsClickHandler = () => {
    setActiveTab("requests");
    setPrimaryStyle({});
    setGeneralStyle({});
    setRequestsStyle(style);
  };

  // get all request data trough API from backend
  const { data: requestData, isSuccess: getRequestSuccess } =
    useGetRequestQuery();

  // get all message data trough API from backend
  const { data: messageData, isSuccess: getMessageSuccess } =
    useGetMessageQuery();

  // message data after filter
  const [messageFilterResult, setMessageFilterResult] = useState([]);

  // request data after filter
  const [requestFilterResult, setRequestFilterResult] = useState([]);

  // function for filter and set data, pass to Messages or Requests component, depends on tab chosen
  const filterData = (keyword) => {
    if (getMessageSuccess && activeTab === "primary") {
      const result = messageData.data.filter(
        (item) => item.name.toLowerCase().indexOf(keyword) !== -1
      );

      setMessageFilterResult(result);
    }

    if (getRequestSuccess && activeTab === "requests") {
      const result = requestData.data.filter(
        (item) => item.name.toLowerCase().indexOf(keyword) !== -1
      );

      setRequestFilterResult(result);
    }
  };

  // set default chosen tab and style when component first load
  useEffect(() => {
    setPrimaryStyle(style);
    setActiveTab("primary");
  }, []);

  // set all messages data as message data by default when API call success
  useEffect(() => {
    if (getMessageSuccess) {
      setMessageFilterResult(messageData.data);
    }
  }, [getMessageSuccess]);

  // set all requests data as request data by default when API call success
  useEffect(() => {
    if (getRequestSuccess) {
      setRequestFilterResult(requestData.data);
    }
  }, [getRequestSuccess]);

  return (
    <div className={classes.MainRight}>
      <div className={classes.Message}>
        <div className={classes.Title}>
          <span className={classes.TitleText}>message</span>
          <div className={classes.TitleIcon}>
            <i className="uil uil-edit"></i>
          </div>
        </div>
        <SearchBar
          onFilter={filterData}
          className={classes.RightSearch}
          placeholder={"Search for Creators"}
          icon={"uil uil-search-alt"}
        />
        <div className={classes.TabMenus}>
          <div
            className={classes.TabMenu}
            onClick={primaryClickHandler}
            style={primaryStyle}
          >
            primary
          </div>
          <div
            className={classes.TabMenu}
            onClick={generalClickHandler}
            style={generalStyle}
          >
            general
          </div>
          <div
            className={classes.TabMenu}
            onClick={requestsClickHandler}
            style={requestsStyle}
          >
            requests
          </div>
        </div>
        <div style={{ overflowY: "scroll", overflowX: "clip" }}>
          {activeTab === "primary" && getMessageSuccess && (
            <Messages messageData={messageFilterResult} />
          )}
          {activeTab === "requests" && getRequestSuccess && (
            <Requests requestData={requestFilterResult} />
          )}
          {activeTab === "primary" && !getMessageSuccess && (
            <div>no data found</div>
          )}
          {activeTab === "requests" && !getRequestSuccess && (
            <div>no data found</div>
          )}
        </div>
      </div>
      <span>request</span>
      {getRequestSuccess && <Requests requestData={requestData.data} />}
    </div>
  );
};

export default MainRight;
