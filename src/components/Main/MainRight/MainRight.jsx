import classes from "./MainRight.module.css";
import SearchBar from "../../UI/SearchBar/SearchBar";
import Requests from "./Requests/Requests";
import { useEffect, useState } from "react";
import Messages from "./Messages/Messages";
import { useGetRequestQuery } from "../../../store/requestApi";
import { useGetMessageQuery } from "../../../store/messageApi";

const MainRight = () => {
  const [activeTab, setActiveTab] = useState("");

  const style = {
    color: "var(--color-black)",
    borderBottom: "1vh solid var(--color-primary)",
    transition: "border-bottom 1s",
  };

  let [primaryStyle, setPrimaryStyle] = useState({});
  let [generalStyle, setGeneralStyle] = useState({});
  let [requestsStyle, setRequestsStyle] = useState({});

  const primaryClickHandler = () => {
    setActiveTab("primary");
    setPrimaryStyle(style);
    setGeneralStyle({});
    setRequestsStyle({});
  };

  const generalClickHandler = () => {
    setActiveTab("general");
    setPrimaryStyle({});
    setGeneralStyle(style);
    setRequestsStyle({});
  };

  const requestsClickHandler = () => {
    setActiveTab("requests");
    setPrimaryStyle({});
    setGeneralStyle({});
    setRequestsStyle(style);
  };

  const { data: requestData, isSuccess: getRequestSuccess } =
    useGetRequestQuery();

  const { data: messageData, isSuccess: getMessageSuccess } =
    useGetMessageQuery();

  const [messageFilterResult, setMessageFilterResult] = useState([]);

  const [requestFilterResult, setRequestFilterResult] = useState([]);

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

  useEffect(() => {
    setPrimaryStyle(style);
    setActiveTab("primary");
  }, []);

  useEffect(() => {
    if (getMessageSuccess) {
      setMessageFilterResult(messageData.data);
    }
  }, [getMessageSuccess]);

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
