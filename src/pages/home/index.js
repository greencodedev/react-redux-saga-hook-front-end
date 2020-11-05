import React, { useState, useEffect } from "react";
import Camera from "./camera";
import Gallery from "../../components/gallerySlide";
import Destinations from "./destinations";
import Vouchers from "./vouchers";
import { connect } from "react-redux";
import * as userAction from "../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import Header from '../../components/Header';
// import Footer from "../../components/layout/footer";
import Layout from "../../components/layout";
const Home = (props) => {
  const [count, setCount] = useState(0);

  const {
    getSliderDataStatus,
    getHomeData,
    homeData,
    sliderData,
    getDestinationDataStatus,
    destinationData,
    getSliderData,
    getDestinationData,
  } = props;
  useEffect(() => {
    const sliderData = new FormData();
    sliderData.append("action", "slider");

    const destinationData = new FormData();
    destinationData.append("action", "destinations");
    
    const data = new FormData();
    data.append("action", "HomeData");   
    
    getHomeData(data);
    getSliderData(sliderData);
    getDestinationData(destinationData);
  }, [count]);
  if (count < 1) {
    setTimeout(() => {
      setCount(count + 1);
    }, 1000);
  }

  return (
    <>
      <Layout>
        <Header/>
        <Gallery status={getSliderDataStatus} data={sliderData} />
        <Camera />
        <Destinations status={getDestinationDataStatus} data={destinationData} homeData={homeData}/>
        <Vouchers data={homeData} />
      </Layout>
    </>
  );
};

const mapStateToProps = ({
  user: { homeData, getSliderDataStatus, getDestinationDataStatus, sliderData, destinationData },
}) => ({
  homeData,
  getSliderDataStatus,
  getDestinationDataStatus,
  sliderData,
  destinationData,
});

const mapDispatchToProps = {
  getSliderData: userAction.getSliderData,
  getDestinationData: userAction.getDestinationData,
  getHomeData: userAction.getHomeData,
  getProfileDetails: userAction.getProfileDetails
};
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));
