import React, { useState, useEffect } from "react";
import pinIcon from "../../../assets/images/icons/pin.svg";
import subtractionIcon from "../../../assets/images/icons/subtraction.svg";
import { useHistory } from "react-router-dom";
import Header from '../../../components/Header';
import Layout from "../../../components/layout";

import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";

const ViewAll = (props) => {
  const {
    destinationData,
    getDestinationData,
  } = props;

  useEffect(() => {
    const formData = new FormData();
    formData.append("action", "destinations");
    getDestinationData(formData);
  })
  const history = useHistory();
  const secondColumnStart = Math.floor(destinationData.length / 2);

  return (
    <Layout>
      <Header></Header>
      <div className="flex-grow-1 mb-20">
        <h2 className="s-title mb-0 ml-2 pt-40">Choose Destination</h2>
      </div>
      <div className="row no-margin">
        <div className="col-6 pd-5">
          {destinationData.slice(0, secondColumnStart).map((item, index) => (
            <div
              className="destination-cards mb-20 ml-auto mr-auto"
              onClick={() =>
                // history.push("destination-packages", {
                //   destination_id: item.id,
                // })
                history.push(`destination/${item.url_slug}`, {
                  destination_id: item.id, destination_slug: item.url_slug
                })
              }
            >
              <img
                className="location-image"
                src={`https://spendwin-dev.xyz/files/${item.img}`}
                alt={item.name}
              />
              <span className="layer" />
              <img
                className="subtractionIcon"
                src={subtractionIcon}
                alt="subtraction"
              />
              <div className="content">
                <h2 className="name">{item.name}</h2>
                <p className="location">
                  <img src={pinIcon} className="mr-2" alt="location" />
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className="col-6 pd-5">
          {destinationData.slice(secondColumnStart).map((item, index) => (
            <div
              className="destination-cards mb-20 ml-auto mr-auto"
              onClick={() =>
                // history.push("destination-packages", {
                //   destination_id: item.id,
                // })
                history.push(`destination/${item.url_slug}`, {
                  destination_id: item.id, destination_slug: item.url_slug
                })
              }
            >
              <img
                className="location-image"
                src={`https://spendwin-dev.xyz/files/${item.img}`}
                alt={item.name}
              />
              <span className="layer" />
              <img
                className="subtractionIcon"
                src={subtractionIcon}
                alt="subtraction"
              />
              <div className="content">
                <h2 className="name">{item.name}</h2>
                <p className="location">
                  <img src={pinIcon} className="mr-2" alt="location" />
                  {item.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};


const mapStateToProps = ({
  user: { destinationData },
}) => ({
  destinationData,
});

const mapDispatchToProps = {
  getDestinationData: userAction.getDestinationData,
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ViewAll));
