import React, { useState, useEffect } from "react";
// import image1 from "./images/01.png";
// import image2 from "./images/02.png";
// import image3 from "./images/03.png";
// import image4 from "./images/04.png";
import {Alert} from 'reactstrap';
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as userAction from "../../../actions/user-action-type";
import { withRouter } from "react-router-dom";
import Layout from "../../../components/layout";
import VouchersDestination from '../vouchersDestination'
// import image5 from '../../../assets/images/indonesia01.png'

const NearbyVouchers = (props) => {
    const history = useHistory();
    const [alerttext, setAlerttext] = useState('')
    const { getdestPackages, getDestPackageStatus, destPackagesData, locationData, destinationVoucherData, getDestVouchers, getLocation, homeData, destinationData, emptyLocation } = props
    useEffect(() => {
      if (props.location.state != undefined){
        const data = new FormData()
        data.append( 'action', 'packages' )
        data.append( 'id', props.location.state.destination_id )
        const voucherDta = new FormData()
        voucherDta.append( 'action', 'listVoucherByDesitnation' )
        voucherDta.append( 'destination_id', props.location.state.destination_id )
        getdestPackages(data)
        getDestVouchers(voucherDta)
      }
    }, []);
    
    useEffect(() => {
      const locationdata = new FormData() 
      navigator.permissions.query({name:'geolocation'}).then(function(permissionStatus) {
          if (permissionStatus.state === 'granted') {
            navigator.geolocation.getCurrentPosition(function(position) {
              locationdata.append('action', 'listVourchers')
              locationdata.append('lat', position.coords.latitude)
              locationdata.append('lang', position.coords.longitude)
              getLocation(locationdata)
            })
          } else if (permissionStatus.state === 'prompt'){
            emptyLocation();
            navigator.geolocation.getCurrentPosition(function(position) {
            })
          } else if (permissionStatus.state === 'denied') {
            setAlerttext("This page needs Location Permission to show Nearby Vouchers.")
            emptyLocation();
          }
        permissionStatus.onchange = function() {
          if (this.state === 'granted') {
            navigator.geolocation.getCurrentPosition(function(position) {
              locationdata.append('action', 'listVourchers')
              locationdata.append('lat', position.coords.latitude)
              locationdata.append('lang', position.coords.longitude)
              getLocation(locationdata)
            })
          } else if (this.state === 'denied') {
            setAlerttext("This page needs Location Permission to show Nearby Vouchers.")
            emptyLocation();
          }
        };
      })
      
    }, []);
  return (
    <Layout>
    <div className="destinations-package">
        {alerttext != '' && <Alert color='danger'>{alerttext}</Alert>}
      <div class="d-container">
        <p class="menu-text">
          <i class="fas fa-arrow-left arrow" onClick={() => history.push('/')}></i>Destinations
        </p>       
      </div>
      <VouchersDestination data={homeData} voucherData={props.location.state!= undefined?destinationVoucherData:locationData}/>
    </div>
    </Layout>
  );
};

const mapStateToProps = ({
    user: { getDestPackageStatus, destPackagesData,destinationVoucherData, locationData, homeData, destinationData },
  }) => ({
    getDestPackageStatus,
    destPackagesData,
    destinationVoucherData,
    homeData,
    destinationData,
    locationData
  });
  
  const mapDispatchToProps = {
    getdestPackages: userAction.getdestPackages,
    getDestVouchers: userAction.getDestVouchers,
    getLocation: userAction.getLocation,
    emptyLocation: userAction.emptyLocation
  };
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NearbyVouchers));