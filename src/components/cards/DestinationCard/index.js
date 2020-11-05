import React from "react";
import pinIcon from "../../../assets/images/icons/pin.svg";
import subtractionIcon from "../../../assets/images/icons/subtraction.svg";
import { useHistory } from "react-router-dom";

const DestinationCard = (props) => {
  const history = useHistory();
  // const { img, name, location, id, homeData } = props;
  const { img, name, location, id, homeData, url_slug } = props;
  return (
    // <div className="destination-card" onClick={() => history.push('destination-packages', { destination_id: id, homeData: homeData })}>
    <div className="destination-card" onClick={() => history.push(`destination/${url_slug}`, { destination_id: id, homeData: homeData, destination_slug: url_slug })}>
      <img className="location-image" src={`https://spendwin-dev.xyz/files/${img}`} alt={name} />
      <span className="layer" />
      <div className="content">
        <h2 className="name">{name}</h2>
      </div>
    </div>
  );
};

export default DestinationCard;
