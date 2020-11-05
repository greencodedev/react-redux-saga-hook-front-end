import React, { useState, useEffect } from "react";
import image1 from "./images/01.png";
import image2 from "./images/02.png";
import image3 from "./images/03.png";
import image4 from "./images/04.png";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import Layout from "../../../components/layout";
import VouchersDestination from '../vouchersDestination';
import image5 from '../../../assets/images/indonesia01.png';

const Packages = (props) => {
    const history = useHistory();
    console.log("asdf => ", props.location.state);
    // const { destination_id, homeData, destination_slug } = props.location.state
    const { slug } = props.match.params
    const { getdestPackages, getHomeData, homeData, getDestPackageStatus, destPackagesData, destinationVoucherData, getDestVouchers } = props
    useEffect(() => {
        const data = new FormData()
        data.append( 'action', 'packages' )
        // destination_id ? data.append( 'id', destination_id ) : 
        data.append( 'slug', slug )
        const voucherDta = new FormData()
        voucherDta.append( 'action', 'listVoucherByDesitnation' )
        // destination_id ? voucherDta.append( 'id', destination_id ) : 
        voucherDta.append( 'slug', slug )
        const homedata = new FormData();
        homedata.append("action", "HomeData");   
        
        getHomeData(homedata);
        getdestPackages(data)
        getDestVouchers(voucherDta)
      }, []);
  return (
      <Layout>
    <div className="destinations-package">
      <div class="d-container">
        <p class="menu-text">
          <i class="fas fa-arrow-left arrow" onClick={() => history.push('/')}></i>Destinations
        </p>
        <p class="primary-title">Book Your Experience</p>
        {destPackagesData?.map((item, index) => (
        // <div class="d-row" onClick={() => history.push('package-detail', {data: item})}>
        // <div class="d-row" onClick={() => history.push(`${destination_slug}/p/${item.url_slug}`, {data: item})}>
        <div class="d-row" onClick={() => history.push(`${slug}/p/${item.url_slug}`, {data: item})}>
          <img src={`https://spendwin-dev.xyz/files/${item.img}`} alt="Berlin" />
          <div class="paragraph">
            <p class="secondary-title">{item.package_name}</p>
            <p class="content-text">
            </p>
            <p class="schedule-text">2 Days . 1 Night</p>
 
            <div class='d-flex'>
              <div>
                <p class="price-text-label">At Counter</p>
               <p style={{ color: '#832020'}} class="price-text"><del style={{ fontWeight: '400'}}>AED {item.original_price}</del></p>
              </div>
              <div class="ml-3">
                <p class="price-text-label">Our Price</p>
                 <p style={{ color: '#000'}}  class="price-text">AED {item.price}</p>
              </div>
            </div>
  
          </div>
        </div>
        ))}
    
      </div>
      {/* <VouchersDestination data={homeData} voucherData={destinationVoucherData} destination_slug={slug}/> */}
      <VouchersDestination data={homeData} voucherData={destinationVoucherData}/>

    </div>
    </Layout>
  );
};

const mapStateToProps = ({
    user: { getDestPackageStatus, destPackagesData,destinationVoucherData, homeData },
  }) => ({
    getDestPackageStatus,
    destPackagesData,
    homeData,
    destinationVoucherData
  });
  
  const mapDispatchToProps = {
    getdestPackages: userAction.getdestPackages,
    getDestVouchers: userAction.getDestVouchers,
    getHomeData: userAction.getHomeData,
  };
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Packages));
